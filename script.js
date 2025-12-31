document.addEventListener("DOMContentLoaded", function () {
  // ===== 학생 데이터(코드 내부 입력) =====
  var students = [
    {
      name: "가빈",
      majorKey: "Magic",
      majorText: "마법학부 (Magic)",
      id: "AIP-679-1108",
      issueDate: "제국력 679년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "20세",
      grade: "1학년",
      personality: "호기심이 많고 명랑함, 순수하고 낙천적임, 겁이 많고 소심함",
      str: 10, mag: 30, agi: 25,
      frontPhoto: "dg (1).png",
      backPhoto: "dg (45).png"
    },
    {
      name: "사프론",
      majorKey: "Magic",
      majorText: "마법학부 (Magic)",
      id: "AIP-677-0623",
      issueDate: "제국력 677년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "22세",
      grade: "3학년",
      personality: "책임감 강함, 덜렁거림, 망상 많음.",
      str: 25, mag: 50, agi: 40,
      frontPhoto: "wr (1).png",
      backPhoto: "wr (45).png"
    },
    {
      name: "칼리오페",
      majorKey: "Magic",
      majorText: "마법학부 (Magic)",
      id: "AIP-678-0213",
      issueDate: "제국력 678년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "21세",
      grade: "2학년",
      personality: "차분함, 냉철함, 이성적임, 분석적임",
      str: 15, mag: 40, agi: 30,
      frontPhoto: "sg (1).png",
      backPhoto: "sg (45).png"
    },
    {
      name: "그록시아",
      majorKey: "Combat",
      majorText: "전투학부 (Combat)",
      id: "AIP-679-0511",
      issueDate: "제국력 679년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "20세",
      grade: "1학년",
      personality: "호기심 많음, 명랑함, 음흉함, 낙천적임",
      str: 30, mag: 10, agi: 25,
      frontPhoto: "nrg (1).png",
      backPhoto: "nrg (45).png"
    },
    {
      name: "발렌티나",
      majorKey: "Combat",
      majorText: "전투학부 (Combat)",
      id: "AIP-676-0923",
      issueDate: "제국력 676년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "23세",
      grade: "4학년",
      personality: "책임감 강함, 강인함, 용감함, 순수함",
      str: 50, mag: 20, agi: 45,
      frontPhoto: "bg (1).png",
      backPhoto: "bg (44).png"
    },
    {
      name: "퀘이사",
      majorKey: "Science",
      majorText: "과학학부 (Science)",
      id: "AIP-679-1207",
      issueDate: "제국력 679년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "20세",
      grade: "1학년",
      personality: "호기심 많음, 천재적, 엉뚱함, 독창적임",
      log: 20, cre: 25, pss: 20,
      frontPhoto: "wb (1).png",
      backPhoto: "wb (45).png"
    },
    {
      name: "아스트라",
      majorKey: "Science",
      majorText: "과학학부 (Science)",
      id: "AIP-676-0302",
      issueDate: "제국력 676년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "23세",
      grade: "4학년",
      personality: "분석적임, 논리적임, 침착함, 신중함",
      log: 55, cre: 45, pss: 50,
      frontPhoto: "dr (1).png",
      backPhoto: "dr (45).png"
    },
    {
      name: "세실리아",
      majorKey: "Medicine",
      majorText: "의학학부 (Medicine)",
      id: "AIP-678-1225",
      issueDate: "제국력 678년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "21세",
      grade: "2학년",
      personality: "따뜻함, 배려심 많음, 인내심 강함, 헌신적임",
      log: 30, cre: 35, pss: 30,
      frontPhoto: "gb (1).png",
      backPhoto: "gb (45).png"
    },
    {
      name: "루시아",
      majorKey: "Medicine",
      majorText: "의학학부 (Medicine)",
      id: "AIP-679-0228",
      issueDate: "제국력 679년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "20세",
      grade: "1학년",
      personality: "순수한, 이해심 많음, 친절함, 울보",
      log: 20, cre: 15, pss: 10,
      frontPhoto: "yy (1).png",
      backPhoto: "yy (45).png"
    }
  ];

  var grid = document.getElementById("grid");

  function majorThemeClass(majorKey) {
    return "theme-" + String(majorKey || "combat").toLowerCase();
  }

  function clampPercent(v) {
    var n = parseInt(v, 10);
    if (isNaN(n)) n = 0;
    if (n < 0) n = 0;
    if (n > 100) n = 100;
    return n;
  }

  function buildAbilityGauges(s) {
    var major = String(s.majorKey || "").toLowerCase();

    if (major === "science" || major === "medicine") {
      return (
        '<div class="gauge-wrap"><span>LOG</span><div class="bar"><div style="width:' + clampPercent(s.log) + '%"></div></div></div>' +
        '<div class="gauge-wrap"><span>CRE</span><div class="bar"><div style="width:' + clampPercent(s.cre) + '%"></div></div></div>' +
        '<div class="gauge-wrap"><span>PSS</span><div class="bar"><div style="width:' + clampPercent(s.pss) + '%"></div></div></div>'
      );
    }

    return (
      '<div class="gauge-wrap"><span>STR</span><div class="bar"><div style="width:' + clampPercent(s.str) + '%"></div></div></div>' +
      '<div class="gauge-wrap"><span>MAG</span><div class="bar"><div style="width:' + clampPercent(s.mag) + '%"></div></div></div>' +
      '<div class="gauge-wrap"><span>AGI</span><div class="bar"><div style="width:' + clampPercent(s.agi) + '%"></div></div></div>'
    );
  }

  function buildFrontFace(s) {
    var theme = majorThemeClass(s.majorKey);
    return (
      '<div class="cert-front ' + theme + '">' +
        '<div class="cert-border-outer">' +
          '<div class="cert-border-inner">' +
            '<div class="cert-header">' +
              '<div class="cert-logo-text">A.I.P</div>' +
              '<h1>CERTIFICATE OF ENROLLMENT</h1>' +
              '<p class="cert-sub">PANGAEA IMPERIAL ACADEMY</p>' +
            "</div>" +

            '<div class="cert-body">' +
              '<div class="photo-area">' +
                '<img src="' + escapeAttr(s.frontPhoto) + '" alt="Front Photo">' +
              "</div>" +

              '<div class="info-area">' +
                '<p class="statement">' + escapeHtml(s.statement) + "</p>" +
                '<div class="info-row"><span class="label">NAME</span><span class="value">' + escapeHtml(s.name) + "</span></div>" +
                '<div class="info-row"><span class="label">MAJOR</span><span class="value">' + escapeHtml(s.majorText) + "</span></div>" +
                '<div class="info-row"><span class="label">ID</span><span class="value">' + escapeHtml(s.id) + "</span></div>" +
              "</div>" +
            "</div>" +

            '<div class="cert-footer">' +
              '<p class="issue-date">' + escapeHtml(s.issueDate) + "</p>" +
              '<div class="seal-area">' +
                '<p class="signer">' + escapeHtml(s.signer) + "</p>" +
                '<span class="wax-seal"><img src="seal.png" alt="Wax Seal" onerror="this.style.display=\'none\'"></span>' +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function buildBackFace(s) {
    var theme = majorThemeClass(s.majorKey);
    return (
      '<div class="cert-back ' + theme + '">' +
        '<div class="cert-border-outer">' +
          '<div class="cert-border-inner">' +
            '<div class="cert-header">' +
              '<div class="cert-logo-text" style="font-size:1.4rem; letter-spacing:6px;">STUDENT DOSSIER</div>' +
            "</div>" +

            '<div class="cert-body">' +
              '<div class="private-photo-area">' +
                '<img src="' + escapeAttr(s.backPhoto) + '" alt="Back Photo">' +
              "</div>" +

              '<div class="profile-data-box">' +
                '<div class="data-field"><span class="data-tag">AGE</span><span class="data-text">' + escapeHtml(s.age) + "</span></div>" +
                '<div class="data-field"><span class="data-tag">GRADE</span><span class="data-text">' + escapeHtml(s.grade) + "</span></div>" +
                '<div class="data-field full-width"><span class="data-tag">PERSONALITY</span><span class="data-text">' + escapeHtml(s.personality) + "</span></div>" +
                '<div class="data-field full-width stats-display">' +
                  '<span class="data-tag">ABILITIES</span>' +
                  buildAbilityGauges(s) +
                "</div>" +
              "</div>" +
            "</div>" +

            '<div class="cert-footer">' +
              '<p style="font-family:\'Cinzel\'; font-size:0.7rem; opacity:0.55;">CONFIDENTIAL RECORD: <span>' + escapeHtml(s.id) + "</span></p>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function buildCertificateHTML(s) {
    return buildFrontFace(s) + buildBackFace(s);
  }

  function render() {
    grid.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
      (function (idx) {
        var s = students[idx];

        var card = document.createElement("div");
        card.className = "cert-card";

        var scaler = document.createElement("div");
        scaler.className = "cert-scaler";

        var cert = document.createElement("div");
        cert.className = "cert-area " + majorThemeClass(s.majorKey);
        cert.innerHTML = buildCertificateHTML(s);

        cert.addEventListener("click", function (e) {
          e.currentTarget.classList.toggle("flipped");
        });

        var renderWrap = document.createElement("div");
renderWrap.className = "cert-render";

renderWrap.appendChild(cert);
scaler.appendChild(renderWrap);
card.appendChild(scaler);

        grid.appendChild(card);
      })(i);
    }
  }

  function escapeHtml(str) {
    var s = String(str == null ? "" : str);
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, "&quot;");
  }

  render();
});


