(function () {
  var LANGS = ["en", "zh", "ar"];
  var app = document.getElementById("app");
  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menuBtn");

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem("sio-lang"); if (s && LANGS.indexOf(s) > -1) return s; } catch (e) {}
    return "en";
  }

  function badge(ui, level, qual) {
    return '<span class="badge lv-' + level + '">' + ui.levels[level] + (qual ? ' <em>· ' + qual + '</em>' : '') + '</span>';
  }

  function coName(ui, lang, code) {
    return lang === "zh" ? ui.company + " " + code : (lang === "ar" ? ui.company + ' <bdi>' + code + '</bdi>' : ui.company + " " + code);
  }

  function render(lang) {
    var c = CONTENT[lang], ui = c.ui;
    var html = document.documentElement;
    html.lang = lang === "zh" ? "zh-Hans" : lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = c.meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", c.meta.description);

    // navigation
    var links = [["overview", ui.nav.overview], ["sector-ai", ui.nav.ai], ["company-a", "A"], ["company-b", "B"], ["sector-hc", ui.nav.hc]];
    ["c", "d", "e", "f", "g"].forEach(function (k) { links.push(["company-" + k, k.toUpperCase()]); });
    links.push(["next-steps", ui.nav.next]);
    nav.innerHTML = links.map(function (l) {
      var cls = l[1].length === 1 ? ' class="code"' : '';
      return '<a href="#' + l[0] + '"' + cls + '>' + l[1] + '</a>';
    }).join("");

    var out = [];

    // 1. cover
    out.push(
      '<section class="cover dark" id="top"><div class="wrap">' +
      '<p class="kicker">' + c.cover.kicker + '</p>' +
      '<h1>' + c.cover.title + '</h1>' +
      '<p class="sub">' + c.cover.sub + '</p>' +
      '<div class="cover-sectors">' +
        '<div><span>' + c.sectors.ai.kicker + '</span><strong>' + c.sectors.ai.title + '</strong><i>A · B</i></div>' +
        '<div><span>' + c.sectors.hc.kicker + '</span><strong>' + c.sectors.hc.title + '</strong><i>C · D · E · F · G</i></div>' +
      '</div>' +
      '<a class="cta" href="#overview">' + c.cover.cta + '</a>' +
      '<p class="note">' + c.cover.note + '</p>' +
      '</div></section>'
    );

    // 2. overview table
    var o = c.overview;
    var rows = o.rows.map(function (r) {
      var pend = r[1] === "H" ? ' class="pending"' : '';
      var href = r[1] === "H" ? '' : ' href="#company-' + r[1].toLowerCase() + '"';
      return '<tr' + pend + '>' +
        '<td class="num" data-l="' + o.cols[0] + '">' + r[0] + '</td>' +
        '<td class="opp" data-l="' + o.cols[1] + '"><a class="codechip"' + href + '>' + r[1] + '</a></td>' +
        '<td data-l="' + o.cols[2] + '"><strong>' + r[2] + '</strong></td>' +
        '<td data-l="' + o.cols[3] + '">' + r[3] + '</td>' +
        '<td data-l="' + o.cols[4] + '" class="muted">' + r[4] + '</td>' +
        '<td data-l="' + o.cols[5] + '">' + badge(ui, r[5][0], r[5][1]) + '</td>' +
        '</tr>';
    }).join("");
    out.push(
      '<section class="overview" id="overview"><div class="wrap">' +
      '<p class="kicker">' + o.kicker + '</p><h2>' + o.title + '</h2><p class="lead">' + o.lead + '</p>' +
      '<table class="ov"><thead><tr>' + o.cols.map(function (h) { return '<th>' + h + '</th>'; }).join("") + '</tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p class="foot">' + o.foot + '</p>' +
      '</div></section>'
    );

    function sector(key) {
      var s = c.sectors[key];
      var mat = "";
      if (s.maturity) {
        mat = '<div class="maturity"><div class="axis"><span>' + s.maturity.left + '</span><span>' + s.maturity.right + '</span></div>' +
          '<div class="line">' + s.maturity.order.map(function (k) { return '<a href="#company-' + k.toLowerCase() + '" class="codechip">' + k + '</a>'; }).join("") + '</div></div>';
      }
      return '<section class="sector" id="sector-' + key + '"><div class="wrap">' +
        '<p class="kicker">' + s.kicker + '</p><h2>' + s.title + '</h2><p class="lead">' + s.lead + '</p>' +
        '<div class="points">' + s.points.map(function (p, i) {
          return '<div class="point"><span class="n">0' + (i + 1) + '</span><h3>' + p[0] + '</h3><p>' + p[1] + '</p></div>';
        }).join("") + '</div>' + mat +
        '<p class="members">' + s.members + '</p>' +
        '</div></section>';
    }

    function econBlock() {
      var chain = '<div class="chain"><h4>' + ui.chainTitle + '</h4><ol>' + ui.chain.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ol></div>';
      var t = '<div class="econ"><h4>' + ui.econTitle + '</h4><table><thead><tr>' + ui.econCols.map(function (h) { return '<th>' + h + '</th>'; }).join("") + '</tr></thead><tbody>' +
        ECON_ROWS.map(function (r) { return '<tr>' + r.map(function (v, i) { return '<td' + (i === 3 ? ' class="hi"' : '') + '><bdi>' + v + '</bdi></td>'; }).join("") + '</tr>'; }).join("") +
        '</tbody></table><p class="fine">' + ui.econNote + '</p></div>';
      return '<div class="extra">' + chain + t + '</div>';
    }

    function company(co) {
      return '<section class="company" id="company-' + co.code.toLowerCase() + '"><div class="wrap">' +
        '<div class="co-head">' +
          '<div class="co-id"><span class="bigcode">' + co.code + '</span><div><p class="kicker">' + coName(ui, lang, co.code) + ' · ' + co.sector + '</p>' +
          '<p class="prio">' + ui.priority + ' <bdi>' + co.prio + '</bdi></p></div></div>' +
          '<div class="co-vis"><span>' + ui.visibility + '</span>' + badge(ui, co.exit.level, co.exit.qual) + '</div>' +
        '</div>' +
        '<h2 class="headline">' + co.headline + '</h2>' +
        '<div class="row what-row">' +
          '<div class="what"><h3>' + ui.whatItDoes + '</h3><p>' + co.what + '</p></div>' +
          '<div class="stats">' + co.stats.map(function (s) { return '<div class="stat"><strong><bdi dir="ltr">' + s[0] + '</bdi></strong><span>' + s[1] + '</span></div>'; }).join("") + '</div>' +
        '</div>' +
        '<h3 class="sec">' + ui.whyInvest + '</h3>' +
        '<div class="why">' + co.why.map(function (w, i) { return '<div class="card"><span class="n">0' + (i + 1) + '</span><h4>' + w[0] + '</h4><p>' + w[1] + '</p></div>'; }).join("") + '</div>' +
        (co.extra === "econ" ? econBlock() : '') +
        '<div class="row lower">' +
          '<div class="stage"><h3>' + ui.stage + '</h3><dl>' + co.stage.map(function (s) { return '<div><dt>' + s[0] + '</dt><dd>' + s[1] + '</dd></div>'; }).join("") + '</dl></div>' +
          '<div class="exitcol"><div class="exit"><h3>' + ui.exit + '</h3>' + badge(ui, co.exit.level, co.exit.qual) + '<p>' + co.exit.text + '</p></div>' +
          '<div class="gcc"><h3>' + ui.gcc + '</h3><p>' + co.gcc + '</p></div></div>' +
        '</div>' +
        '<p class="verify"><strong>' + ui.verify + ':</strong> ' + co.verify + '</p>' +
        '</div></section>';
    }

    out.push(sector("ai"));
    c.companies.filter(function (x) { return x.sectorKey === "ai"; }).forEach(function (x) { out.push(company(x)); });
    out.push(sector("hc"));
    c.companies.filter(function (x) { return x.sectorKey === "hc"; }).forEach(function (x) { out.push(company(x)); });

    // closing
    var cl = c.closing;
    out.push(
      '<section class="closing dark" id="next-steps"><div class="wrap">' +
      '<p class="kicker">' + cl.kicker + '</p><h2>' + cl.title + '</h2>' +
      '<div class="models">' + cl.models.map(function (m) { return '<div><h3>' + m[0] + '</h3><p>' + m[1] + '</p></div>'; }).join("") + '</div>' +
      '<h3 class="steps-t">' + cl.stepsTitle + '</h3>' +
      '<ol class="steps">' + cl.steps.map(function (s) { return '<li>' + s + '</li>'; }).join("") + '</ol>' +
      '<p class="notice">' + cl.notice + '</p>' +
      '<a class="cta ghost" href="#top">' + ui.top + '</a>' +
      '</div></section>'
    );

    var htmlOut = out.join("");
    if (lang === "ar") {
      // keep numeric ranges and slash series in left-to-right order inside RTL text
      htmlOut = htmlOut.replace(/(?:US\$|~|>|\+)?\d[\d.,]*%?(?:\s?(?:[–\-]|\/)\s?\d[\d.,]*%?)+/g, function (m) { return '<bdi dir="ltr">' + m + '</bdi>'; });
    }
    app.innerHTML = htmlOut;

    document.querySelectorAll(".langs button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    menuBtn.setAttribute("aria-label", ui.menu);
    observe();
  }

  // active section highlight
  var io;
  function observe() {
    if (!("IntersectionObserver" in window)) return;
    if (io) io.disconnect();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          nav.querySelectorAll("a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    app.querySelectorAll("section[id]").forEach(function (s) { io.observe(s); });
  }

  function setLang(lang) {
    var hash = location.hash;
    try { localStorage.setItem("sio-lang", lang); } catch (e) {}
    var u = new URL(location.href);
    u.searchParams.set("lang", lang);
    history.replaceState(null, "", u.pathname + u.search + hash);
    render(lang);
    if (hash) { var el = document.getElementById(hash.slice(1)); if (el) el.scrollIntoView(); }
  }

  document.querySelectorAll(".langs button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  menuBtn.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { document.body.classList.remove("menu-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  render(pickLang());
  if (location.hash) { var el = document.getElementById(location.hash.slice(1)); if (el) setTimeout(function () { el.scrollIntoView(); }, 50); }
})();
