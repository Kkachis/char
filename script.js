document.addEventListener("DOMContentLoaded", function () {
  // ===== 데이터 =====
  var students = [
    {
      role: "professor",
      roleText: "Professor",
      tag: "magic",
      deptText: "Faculty of Magic",
      name: "셀레스틴",
      id: "AIP-PROF-0001",
      issueDate: "제국력 599년 3월 1일",
      signer: "제국 황제",
      statement: "위 인물은 판게아 제국 아카데미의 정식 교수진임을 엄격히 증명함.",
      age: "불명",
      grade: "9서클 대마법사",
      personality: "엄격함, 품위, 권위",
      str: 40, mag: 99, agi: 70,
      frontPhoto: "wv (1).png",
      backPhoto: "wv (45).png"
    },

    {
      role: "professor",
      roleText: "Professor",
      tag: "combat",
      deptText: "Faculty of combat",
      name: "카엘렌",
      id: "AIP-PROF-0002",
      issueDate: "제국력 665년 3월 1일",
      signer: "제국 황제",
      statement: "위 인물은 판게아 제국 아카데미의 정식 교수진임을 엄격히 증명함.",
      age: "35세",
      grade: "8급 전투 마스터",
      personality: "강인함, 용맹함, 결단력",
      str: 90, mag: 30, agi: 80,
      frontPhoto: "rg (1).png",
      backPhoto: "rg (45).png"
    },

    {
      role: "professor",
      roleText: "Professor",
      tag: "science",
      deptText: "Faculty of science",
      name: "에라라",
      id: "AIP-PROF-0003",
      issueDate: "제국력 670년 3월 1일",
      signer: "제국 황제",
      statement: "위 인물은 판게아 제국 아카데미의 정식 교수진임을 엄격히 증명함.",
      age: "30세",
      grade: "8급 수석 연구원",
      personality: "논리적, 분석적, 침착함, 친절함",
      log: 90, cre: 80, pss: 95,
      frontPhoto: "br (1).png",
      backPhoto: "br (45).png"
    },

    {
      role: "professor",
      roleText: "Professor",
      tag: "medicine",
      deptText: "Faculty of medicine",
      name: "셀레나",
      id: "AIP-PROF-0004",
      issueDate: "제국력 673년 3월 1일",
      signer: "제국 황제",
      statement: "위 인물은 판게아 제국 아카데미의 정식 교수진임을 엄격히 증명함.",
      age: "28세",
      grade: "9급 대성모",
      personality: "배려심 많음, 인내심 강함, 헌신적임, 친절함",
      log: 60, cre: 90, pss: 75,
      frontPhoto: "pb (1).png",
      backPhoto: "pb (45).png"
    },

    {
      role: "student",
      roleText: "Student",
      tag: "magic",
      deptText: "Faculty of Magic",
      name: "가빈",
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
      role: "student",
      roleText: "Student",
      tag: "magic",
      deptText: "Faculty of Magic",
      name: "사프론",
      id: "AIP-677-0623",
      issueDate: "제국력 677년 3월 1일",
      signer: "총장 셀레스틴",
      statement: "위 학생은 판게아 제국 아카데미의 일원임을 엄격히 증명함.",
      age: "22세",
      grade: "3학년",
      personality: "책임감 강함, 덜렁거림, 망상 많음",
      str: 25, mag: 50, agi: 40,
      frontPhoto: "wr (1).png",
      backPhoto: "wr (45).png"
    },

    {
      role: "student",
      roleText: "Student",
      tag: "magic",
      deptText: "Faculty of Magic",
      name: "칼리오페",
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
      role: "student",
      roleText: "Student",
      tag: "combat",
      deptText: "Faculty of Combat",
      name: "그록시아",
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
      role: "student",
      roleText: "Student",
      tag: "combat",
      deptText: "Faculty of Combat",
      name: "발렌티나",
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
      role: "student",
      roleText: "Student",
      tag: "science",
      deptText: "Faculty of Science",
      name: "퀘이사",
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
      role: "student",
      roleText: "Student",
      tag: "science",
      deptText: "Faculty of Science",
      name: "아스트라",
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
      role: "student",
      roleText: "Student",
      tag: "medicine",
      deptText: "Faculty of Medicine",
      name: "세실리아",
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
      role: "student",
      roleText: "Student",
      tag: "medicine",
      deptText: "Faculty of Medicine",
      name: "루시아",
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

  function themeClassByTag(tag) {
    return "theme-" + String(tag || "combat").toLowerCase();
  }
  function roleClass(role) {
    return "role-" + String(role || "student").toLowerCase();
  }

  function clampPercent(v) {
    var n = parseInt(v, 10);
    if (isNaN(n)) n = 0;
    if (n < 0) n = 0;
    if (n > 100) n = 100;
    return n;
  }

  function isLogicTypeByTag(tag) {
    var t = String(tag || "").toLowerCase();
    return t === "science" || t === "medicine";
  }

  function buildAbilityGauges(s) {
    if (isLogicTypeByTag(s.tag)) {
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

  function titleByRole(role) {
    return String(role || "student").toLowerCase() === "professor"
      ? "CERTIFICATE OF APPOINTMENT"
      : "CERTIFICATE OF ENROLLMENT";
  }

  function dossierTitleByRole(role) {
    return String(role || "student").toLowerCase() === "professor"
      ? "FACULTY DOSSIER"
      : "STUDENT DOSSIER";
  }

  function buildFrontFace(s) {
    return (
      '<div class="cert-front">' +
        '<div class="cert-border-outer">' +
          '<div class="cert-border-inner">' +
            '<div class="cert-header">' +
              '<div class="cert-logo-text">A.I.P</div>' +
              '<h1>' + escapeHtml(titleByRole(s.role)) + '</h1>' +
              '<p class="cert-sub">PANGAEA IMPERIAL ACADEMY</p>' +
            '</div>' +

            '<div class="cert-body">' +
              '<div class="photo-area">' +
                '<img src="' + escapeAttr(s.frontPhoto) + '" alt="Front Photo">' +
              '</div>' +

              '<div class="info-area">' +
                '<p class="statement">' + escapeHtml(s.statement) + '</p>' +
                '<div class="info-row"><span class="label">NAME</span><span class="value">' + escapeHtml(s.name) + '</span></div>' +
                '<div class="info-row"><span class="label">ROLE</span><span class="value">' + escapeHtml(s.roleText || (s.role === "professor" ? "Professor" : "Student")) + '</span></div>' +
                '<div class="info-row"><span class="label">DEPT</span><span class="value">' + escapeHtml(s.deptText || "-") + '</span></div>' +
                '<div class="info-row"><span class="label">TAG</span><span class="value">' + escapeHtml(String(s.tag || "").toUpperCase()) + '</span></div>' +
                '<div class="info-row"><span class="label">ID</span><span class="value">' + escapeHtml(s.id) + '</span></div>' +
              '</div>' +
            '</div>' +

            '<div class="cert-footer">' +
              '<p class="issue-date">' + escapeHtml(s.issueDate) + '</p>' +
              '<div class="seal-area">' +
                '<p class="signer">' + escapeHtml(s.signer) + '</p>' +
                '<span class="wax-seal"><img src="seal.png" alt="Wax Seal" onerror="this.style.display=\'none\'"></span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function buildBackFace(s) {
    return (
      '<div class="cert-back">' +
        '<div class="cert-border-outer">' +
          '<div class="cert-border-inner">' +
            '<div class="cert-header">' +
              '<div class="cert-logo-text" style="font-size:1.4rem; letter-spacing:6px;">' + escapeHtml(dossierTitleByRole(s.role)) + '</div>' +
            '</div>' +

            '<div class="cert-body">' +
              '<div class="private-photo-area">' +
                '<img src="' + escapeAttr(s.backPhoto) + '" alt="Back Photo">' +
              '</div>' +

              '<div class="profile-data-box">' +
                '<div class="data-field"><span class="data-tag">AGE</span><span class="data-text">' + escapeHtml(s.age) + '</span></div>' +
                '<div class="data-field"><span class="data-tag">' + (String(s.role).toLowerCase() === "professor" ? "RANK" : "GRADE") + '</span><span class="data-text">' + escapeHtml(s.grade) + '</span></div>' +
                '<div class="data-field full-width"><span class="data-tag">PERSONALITY</span><span class="data-text">' + escapeHtml(s.personality) + '</span></div>' +
                '<div class="data-field full-width stats-display">' +
                  '<span class="data-tag">ABILITIES</span>' +
                  buildAbilityGauges(s) +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="cert-footer">' +
              '<p style="font-family:\'Cinzel\'; font-size:0.7rem; opacity:0.55;">CONFIDENTIAL RECORD: <span>' + escapeHtml(s.id) + '</span></p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function buildCertificateHTML(s) {
    return buildFrontFace(s) + buildBackFace(s);
  }

  function render() {
    if (!grid) return;
    grid.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
      (function (idx) {
        var s = students[idx];

        var card = document.createElement("div");
        card.className = "cert-card";

        var scaler = document.createElement("div");
        scaler.className = "cert-scaler";

        var renderWrap = document.createElement("div");
        renderWrap.className = "cert-render";

        var cert = document.createElement("div");
        cert.className = "cert-area " + themeClassByTag(s.tag) + " " + roleClass(s.role);
        cert.innerHTML = buildCertificateHTML(s);

        cert.addEventListener("click", function (e) {
          e.currentTarget.classList.toggle("flipped");
        });

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
