(function () {
  var LANGS = ["en", "zh", "ar"];
  var root = document.documentElement;
  var stage = document.getElementById("stage");
  var segs = document.getElementById("segs");
  var secName = document.getElementById("secName");
  var count = document.getElementById("count");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var toc = document.getElementById("toc");
  var tocBtn = document.getElementById("tocBtn");
  var tocList = document.getElementById("tocList");

  var lang = "en", slides = [], cur = 0;

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem("sio-lang"); if (s && LANGS.indexOf(s) > -1) return s; } catch (e) {}
    return "en";
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function r(d) { return ' class="r" style="--d:' + d + '"'; }
  function rc(cls, d) { return ' class="r ' + cls + '" style="--d:' + d + '"'; }

  function badge(ui, level, qual) {
    return '<span class="badge lv-' + level + '">' + ui.levels[level] + (qual ? ' <em>· ' + qual + '</em>' : '') + '</span>';
  }

  /* ---------- slide builders ---------- */
  function build(c) {
    var ui = c.ui, d = ui.deck, list = [];
    function add(id, tone, label, html) { list.push({ id: id, tone: tone, label: label, html: html }); }

    // cover
    var t = c.cover.title.split(" ");
    var last = t.pop();
    add("top", "night", d.cover,
      '<div class="hero">' +
        '<div class="hero-l"><p' + rc("kick", 0) + '>' + c.cover.kicker + '</p>' +
        '<h1' + rc("mega", 1) + '>' + t.join(" ") + ' <em>' + last + '</em></h1></div>' +
        '<div class="hero-r"><p' + rc("big-lead", 2) + '>' + c.cover.sub + '</p>' +
        '<div' + rc("duo", 3) + '>' +
          '<a href="#sector-ai"><span>' + c.sectors.ai.kicker + '</span><strong>' + c.sectors.ai.title + '</strong><i>A · B</i></a>' +
          '<a href="#sector-hc"><span>' + c.sectors.hc.kicker + '</span><strong>' + c.sectors.hc.title + '</strong><i>C · D · E · F · G</i></a>' +
        '</div>' +
        '<p' + rc("note", 4) + '>' + c.cover.note + '</p>' +
        '<p' + rc("hint", 5) + '>' + d.hint + '</p></div>' +
      '</div>');

    // overview
    var o = c.overview;
    var rows = o.rows.map(function (x, i) {
      var pend = x[1] === "H";
      var chip = pend ? '<span class="chip">' + x[1] + '</span>' : '<a class="chip" href="#company-' + x[1].toLowerCase() + '">' + x[1] + '</a>';
      return '<tr' + (pend ? ' class="pending"' : '') + ' style="--d:' + (3 + i * 0.5) + '">' +
        '<td class="num" data-l="' + o.cols[0] + '">' + x[0] + '</td>' +
        '<td class="opp" data-l="' + o.cols[1] + '">' + chip + '</td>' +
        '<td class="nm" data-l="' + o.cols[2] + '"><strong>' + x[2] + '</strong></td>' +
        '<td data-l="' + o.cols[3] + '">' + x[3] + '</td>' +
        '<td data-l="' + o.cols[4] + '" class="muted">' + x[4] + '</td>' +
        '<td data-l="' + o.cols[5] + '">' + badge(ui, x[5][0], x[5][1]) + '</td></tr>';
    }).join("");
    add("overview", "paper", ui.nav.overview,
      '<div class="head"><p' + rc("kick", 0) + '>' + o.kicker + '</p><h2' + rc("title", 1) + '>' + o.title + '</h2><p' + rc("lead", 2) + '>' + o.lead + '</p></div>' +
      '<table class="ov r" style="--d:3"><thead><tr>' + o.cols.map(function (h) { return '<th>' + h + '</th>'; }).join("") + '</tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p' + rc("fine", 6) + '>' + o.foot + '</p>');

    function sector(key) {
      var s = c.sectors[key], mat = "";
      if (s.maturity) {
        mat = '<div' + rc("maturity", 5) + '><div class="axis"><span>' + s.maturity.left + '</span><span>' + s.maturity.right + '</span></div>' +
          '<div class="line">' + s.maturity.order.map(function (k) { return '<a href="#company-' + k.toLowerCase() + '" class="chip">' + k + '</a>'; }).join("") + '</div></div>';
      }
      add("sector-" + key, "night", key === "ai" ? ui.nav.ai : ui.nav.hc,
        '<div class="sec-head"><div><p' + rc("kick", 0) + '>' + s.kicker + '</p><h2' + rc("title xl", 1) + '>' + s.title + '</h2></div>' +
        '<p' + rc("lead", 2) + '>' + s.lead + '</p></div>' +
        '<div class="points">' + s.points.map(function (p, i) {
          return '<div' + rc("point", 3 + i * 0.6) + '><span class="n">' + pad(i + 1) + '</span><h3>' + p[0] + '</h3><p>' + p[1] + '</p></div>';
        }).join("") + '</div>' + mat +
        '<p' + rc("members", 6) + '>' + s.members + '</p>');
    }

    function coHead(co, d0) {
      var nm = lang === "ar" ? ui.company + ' <bdi>' + co.code + '</bdi>' : ui.company + " " + co.code;
      return '<div class="co-head">' +
        '<span' + rc("bigcode", d0) + ' aria-hidden="true">' + co.code + '</span>' +
        '<div' + rc("co-meta", d0 + 0.5) + '><p class="kick">' + nm + ' · ' + co.sector + '</p>' +
        '<p class="prio">' + ui.priority + ' <bdi>' + co.prio + '</bdi> <span class="sep">/</span> ' + ui.visibility + ' ' + badge(ui, co.exit.level, co.exit.qual) + '</p></div>' +
      '</div>';
    }

    function company(co) {
      var k = co.code.toLowerCase(), nm = ui.company + " " + co.code;
      add("company-" + k, "paper", nm + " · " + d.thesis,
        coHead(co, 0) +
        '<h2' + rc("title headline", 1) + '>' + co.headline + '</h2>' +
        '<div class="co-body">' +
          '<div' + rc("what", 2) + '><h3 class="lbl">' + ui.whatItDoes + '</h3><p>' + co.what + '</p></div>' +
          '<div class="stats">' + co.stats.map(function (s, i) {
            return '<div' + rc("stat", 2.5 + i * 0.5) + '><strong><bdi dir="ltr">' + s[0] + '</bdi></strong><span>' + s[1] + '</span></div>';
          }).join("") + '</div>' +
        '</div>' +
        '<h3' + rc("lbl why-t", 4) + '>' + ui.whyInvest + '</h3>' +
        '<div class="why">' + co.why.map(function (w, i) {
          return '<div' + rc("card", 4.5 + i * 0.5) + '><span class="n">' + pad(i + 1) + '</span><h4>' + w[0] + '</h4><p>' + w[1] + '</p></div>';
        }).join("") + '</div>');

      if (co.extra === "econ") {
        add("company-" + k + "-economics", "paper", nm + " · " + d.economics,
          coHead(co, 0) +
          '<h2' + rc("title headline", 1) + '>' + ui.econTitle + '</h2>' +
          '<div class="extra">' +
            '<div' + rc("chain", 2) + '><h3 class="lbl">' + ui.chainTitle + '</h3><ol>' + ui.chain.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ol></div>' +
            '<div' + rc("econ", 3) + '><table><thead><tr>' + ui.econCols.map(function (h) { return '<th>' + h + '</th>'; }).join("") + '</tr></thead><tbody>' +
              ECON_ROWS.map(function (row) { return '<tr>' + row.map(function (v, i) { return '<td' + (i === 3 ? ' class="hi"' : '') + '><bdi>' + v + '</bdi></td>'; }).join("") + '</tr>'; }).join("") +
            '</tbody></table><p class="fine">' + ui.econNote + '</p></div>' +
          '</div>');
      }

      add("company-" + k + "-terms", "paper", nm + " · " + d.terms,
        coHead(co, 0) +
        '<div class="lower">' +
          '<div' + rc("stagebox", 1) + '><h3 class="lbl">' + ui.stage + '</h3><dl>' + co.stage.map(function (s) { return '<div><dt>' + s[0] + '</dt><dd>' + s[1] + '</dd></div>'; }).join("") + '</dl></div>' +
          '<div class="exitcol">' +
            '<div' + rc("exit", 2) + '><h3 class="lbl">' + ui.exit + '</h3>' + badge(ui, co.exit.level, co.exit.qual) + '<p>' + co.exit.text + '</p></div>' +
            '<div' + rc("gcc", 3) + '><h3 class="lbl">' + ui.gcc + '</h3><p>' + co.gcc + '</p></div>' +
          '</div>' +
        '</div>' +
        '<p' + rc("verify", 4) + '><strong>' + ui.verify + ':</strong> ' + co.verify + '</p>');
    }

    sector("ai");
    c.companies.filter(function (x) { return x.sectorKey === "ai"; }).forEach(company);
    sector("hc");
    c.companies.filter(function (x) { return x.sectorKey === "hc"; }).forEach(company);

    var cl = c.closing;
    add("next-steps", "night", ui.nav.next,
      '<div class="head"><p' + rc("kick", 0) + '>' + cl.kicker + '</p><h2' + rc("title xl", 1) + '>' + cl.title + '</h2></div>' +
      '<div class="models">' + cl.models.map(function (m, i) { return '<div' + rc("model", 2 + i * 0.5) + '><h3>' + m[0] + '</h3><p>' + m[1] + '</p></div>'; }).join("") + '</div>' +
      '<h3' + rc("lbl", 4) + '>' + cl.stepsTitle + '</h3>' +
      '<ol class="steps">' + cl.steps.map(function (s, i) { return '<li' + r(4.5 + i * 0.5) + '>' + s + '</li>'; }).join("") + '</ol>' +
      '<p' + rc("fine notice", 7) + '>' + cl.notice + '</p>' +
      '<a' + rc("cta", 7.5) + ' href="#top">' + ui.top + '</a>');

    return list;
  }

  /* ---------- render ---------- */
  function render(l) {
    lang = l;
    var c = CONTENT[l], ui = c.ui, d = ui.deck;
    root.lang = l === "zh" ? "zh-Hans" : l;
    root.dir = l === "ar" ? "rtl" : "ltr";
    document.querySelector('meta[name="description"]').setAttribute("content", c.meta.description);
    document.getElementById("draft").textContent = "/ " + d.draft;
    tocBtn.textContent = d.contents;
    document.getElementById("tocTitle").textContent = d.contents;
    document.getElementById("tocClose").textContent = d.close;
    prevBtn.setAttribute("aria-label", d.prev);
    nextBtn.setAttribute("aria-label", d.next);

    slides = build(c);
    var html = slides.map(function (s, i) {
      return '<article class="scene" data-id="' + s.id + '" data-i="' + i + '" aria-label="' + s.label.replace(/"/g, "&quot;") + '">' + s.html + '</article>';
    }).join("");
    if (l === "ar") {
      // keep numeric ranges and slash series in left-to-right order inside RTL text
      html = html.replace(/(?:US\$|~|>|\+)?\d[\d.,]*%?(?:\s?(?:[–\-]|\/)\s?\d[\d.,]*%?)+/g, function (m) { return '<bdi dir="ltr">' + m + '</bdi>'; });
    }
    stage.innerHTML = html;

    segs.innerHTML = slides.map(function (s, i) {
      return '<button type="button" data-i="' + i + '" aria-label="' + (i + 1) + ' · ' + s.label.replace(/"/g, "&quot;") + '" title="' + s.label.replace(/"/g, "&quot;") + '"><i></i></button>';
    }).join("");
    tocList.innerHTML = slides.map(function (s, i) {
      return '<li class="t-' + s.tone + '"><a href="#' + s.id + '"><b>' + pad(i + 1) + '</b><span>' + s.label + '</span></a></li>';
    }).join("");

    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === l ? "true" : "false");
    });
  }

  function indexFromHash() {
    var h = decodeURIComponent(location.hash.slice(1));
    if (!h) return 0;
    for (var i = 0; i < slides.length; i++) if (slides[i].id === h) return i;
    return -1;
  }

  function show(i, opts) {
    opts = opts || {};
    if (i < 0 || i >= slides.length) return;
    cur = i;
    var s = slides[i];
    root.setAttribute("data-tone", s.tone);
    stage.querySelectorAll(".scene").forEach(function (el) {
      var on = +el.getAttribute("data-i") === i;
      el.classList.toggle("on", on);
      if (on && !opts.still) { el.classList.remove("play"); void el.offsetWidth; el.classList.add("play"); }
    });
    stage.scrollTop = 0;
    segs.querySelectorAll("button").forEach(function (b, k) {
      b.classList.toggle("now", k === i);
      b.classList.toggle("done", k < i);
      if (k === i) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
    });
    secName.textContent = s.label;
    count.textContent = pad(i + 1) + " / " + pad(slides.length);
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === slides.length - 1;
    document.title = (i === 0 ? "" : s.label + " | ") + CONTENT[lang].meta.title;
    var want = "#" + s.id;
    if (location.hash !== want) {
      var u = location.pathname + location.search + want;
      if (opts.replace) history.replaceState(null, "", u); else history.pushState(null, "", u);
    }
  }

  function go(delta) { show(Math.max(0, Math.min(slides.length - 1, cur + delta))); }

  function setLang(l) {
    var id = slides[cur] ? slides[cur].id : "top";
    try { localStorage.setItem("sio-lang", l); } catch (e) {}
    var u = new URL(location.href);
    u.searchParams.set("lang", l);
    u.hash = id;
    history.replaceState(null, "", u.pathname + u.search + u.hash);
    render(l);
    var i = indexFromHash();
    show(i < 0 ? 0 : i, { replace: true, still: true });
  }

  function openToc(open) {
    toc.hidden = !open;
    tocBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      tocList.querySelectorAll("li").forEach(function (li, k) { li.classList.toggle("now", k === cur); });
      var a = tocList.querySelectorAll("a")[cur]; if (a) a.focus();
    } else { stage.focus({ preventScroll: true }); }
  }

  /* ---------- events ---------- */
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  prevBtn.addEventListener("click", function () { go(-1); });
  nextBtn.addEventListener("click", function () { go(1); });
  segs.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (b) show(+b.getAttribute("data-i"));
  });
  count.addEventListener("click", function () { openToc(true); });
  tocBtn.addEventListener("click", function () { openToc(toc.hidden); });
  document.getElementById("tocClose").addEventListener("click", function () { openToc(false); });
  toc.addEventListener("click", function (e) {
    if (e.target === toc) openToc(false);
    if (e.target.closest("a")) setTimeout(function () { openToc(false); }, 0);
  });

  // internal links (#company-c etc.) go through the router
  window.addEventListener("hashchange", function () {
    var i = indexFromHash();
    if (i > -1 && i !== cur) show(i, { replace: true });
  });
  window.addEventListener("popstate", function () {
    var i = indexFromHash();
    if (i > -1 && i !== cur) show(i, { replace: true });
  });

  document.addEventListener("keydown", function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (!toc.hidden) { if (e.key === "Escape") openToc(false); return; }
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    var rtl = root.dir === "rtl";
    var atEnd = stage.scrollTop + stage.clientHeight >= stage.scrollHeight - 4;
    var atStart = stage.scrollTop <= 4;
    switch (e.key) {
      case "ArrowRight": e.preventDefault(); go(rtl ? -1 : 1); break;
      case "ArrowLeft": e.preventDefault(); go(rtl ? 1 : -1); break;
      case "PageDown": case " ":
        if (e.key === " " && tag === "button") return;
        if (atEnd) { e.preventDefault(); go(e.shiftKey ? -1 : 1); } break;
      case "PageUp":
        if (atStart) { e.preventDefault(); go(-1); } break;
      case "Home": e.preventDefault(); show(0); break;
      case "End": e.preventDefault(); show(slides.length - 1); break;
    }
  });

  // swipe
  var sx = 0, sy = 0, st = 0;
  stage.addEventListener("touchstart", function (e) {
    var t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; st = Date.now();
  }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Date.now() - st > 800 || Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
    if (e.target.closest && e.target.closest(".econ, .ov")) { var sc = e.target.closest(".econ, .ov"); if (sc.scrollWidth > sc.clientWidth + 2) return; }
    var forward = dx < 0;
    if (root.dir === "rtl") forward = !forward;
    go(forward ? 1 : -1);
  }, { passive: true });

  // print: show every page
  window.addEventListener("beforeprint", function () { root.classList.add("printing"); });
  window.addEventListener("afterprint", function () { root.classList.remove("printing"); });

  render(pickLang());
  var start = indexFromHash();
  show(start < 0 ? 0 : start, { replace: true });
})();
