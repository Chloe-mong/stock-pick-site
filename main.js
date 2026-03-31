const stockData = {
    ko: {
      picks: [
        {
          name: "NVIDIA",
          ticker: "NVDA",
          summary: "AI 반도체 대표 수혜주 예시입니다.",
          link: "nvda.html"
        },
        {
          name: "Amazon",
          ticker: "AMZN",
          summary: "클라우드와 광고 성장이 결합된 예시 종목입니다.",
          link: "amzn.html"
        },
        {
          name: "Meta",
          ticker: "META",
          summary: "광고 효율과 AI 기대가 결합된 예시 종목입니다.",
          link: "meta.html"
        }
      ],
      reports: [
        {
          tag: "TREND",
          title: "NVDA: AI 인프라 핵심 수혜",
          desc: "AI 서버 확장 기대감이 반영된 대표 리포트형 카드입니다."
        },
        {
          tag: "TREND",
          title: "META: 광고 효율과 AI 기대",
          desc: "광고 효율 회복과 AI 투자 심리가 같이 붙는 구조입니다."
        },
        {
          tag: "TREND",
          title: "TSLA: 로보택시 기대와 변동성",
          desc: "기대는 크지만 변동성도 큰 테마형 종목 예시입니다."
        },
        {
          tag: "TREND",
          title: "AMZN: 클라우드와 광고의 결합",
          desc: "이익 체력이 어디에서 나오는지 보여주는 예시입니다."
        },
        {
          tag: "TREND",
          title: "PLTR: 정부 데이터 테마",
          desc: "방산·정부·AI 데이터 해석 스토리를 붙인 예시 카드입니다."
        }
      ],
      ui: {
        badge: "Demo Project",
        heroTitle: "AI 시대, 어떤 종목을 볼 것인가",
        heroSubtitle: "가짜 데이터로 만든 투자 미디어형 데모 페이지입니다.",
        todayTitle: "오늘의 종목",
        reportTitle: "트렌딩 리포트",
        labTitle: "종목 미니 랩",
        inputPlaceholder: "티커 입력 (예: NVDA)",
        analyzeBtn: "분석 보기",
        contactTitle: "제휴 문의",
        emailPlaceholder: "이메일 주소",
        messagePlaceholder: "문의 내용을 적어주세요.",
        submitBtn: "보내기",
        footer: "본 페이지는 예시 데이터로 제작된 데모 프로젝트입니다.",
        empty: "종목을 입력하면 메인 추천 종목 기준으로 안내합니다.",
        viewBtn: "상세 보기",
        thesisLabel: "핵심 포인트",
        riskLabel: "리스크",
        conclusionLabel: "한 줄 요약",
        langBtn: "English",
        themeDark: "다크모드",
        themeLight: "라이트모드"
      }
    },
    en: {
      picks: [
        {
          name: "NVIDIA",
          ticker: "NVDA",
          summary: "An example stock benefiting from AI chip demand.",
          link: "nvda.html"
        },
        {
          name: "Amazon",
          ticker: "AMZN",
          summary: "An example stock driven by cloud and ad growth.",
          link: "amzn.html"
        },
        {
          name: "Meta",
          ticker: "META",
          summary: "An example stock supported by ad efficiency and AI optimism.",
          link: "meta.html"
        }
      ],
      reports: [
        {
          tag: "TREND",
          title: "NVDA: Core AI Infrastructure Winner",
          desc: "A report-style card built around AI server expansion expectations."
        },
        {
          tag: "TREND",
          title: "META: Ad Efficiency and AI Upside",
          desc: "A setup where ad recovery and AI optimism work together."
        },
        {
          tag: "TREND",
          title: "TSLA: Robotaxi Hype and Volatility",
          desc: "A high-expectation name with equally high volatility."
        },
        {
          tag: "TREND",
          title: "AMZN: Cloud + Ads Combo",
          desc: "An example of how multiple profit engines support a stock."
        },
        {
          tag: "TREND",
          title: "PLTR: Government Data Theme",
          desc: "A sample card built around defense, government, and AI data themes."
        }
      ],
      ui: {
        badge: "Demo Project",
        heroTitle: "What Stocks Matter in the AI Era?",
        heroSubtitle: "A media-style investing demo site built with sample data.",
        todayTitle: "Today's Picks",
        reportTitle: "Trending Reports",
        labTitle: "Mini Stock Lab",
        inputPlaceholder: "Enter ticker (ex: NVDA)",
        analyzeBtn: "View Page",
        contactTitle: "Partnership Inquiry",
        emailPlaceholder: "Email address",
        messagePlaceholder: "Write your message",
        submitBtn: "Send",
        footer: "This page is a demo project built with sample data.",
        empty: "Enter a ticker to move to one of the sample detail pages.",
        viewBtn: "View Detail",
        thesisLabel: "Key Point",
        riskLabel: "Risk",
        conclusionLabel: "One-line Summary",
        langBtn: "한국어",
        themeDark: "Dark Mode",
        themeLight: "Light Mode"
      }
    }
  };
  
  let currentLanguage = localStorage.getItem("language") || "ko";
  let isDarkMode = localStorage.getItem("theme") === "dark";
  
  const todayPicks = document.getElementById("todayPicks");
  const reportList = document.getElementById("reportList");
  const analysisResult = document.getElementById("analysisResult");
  const tickerInput = document.getElementById("tickerInput");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const langToggle = document.getElementById("langToggle");
  const themeToggle = document.getElementById("themeToggle");
  
  function applyTheme() {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }
  
  function getLinkByTicker(ticker) {
    const found = stockData[currentLanguage].picks.find(
      (item) => item.ticker.toLowerCase() === ticker.toLowerCase()
    );
    return found ? found.link : null;
  }
  
  function renderPicks() {
    const { picks, ui } = stockData[currentLanguage];
    todayPicks.innerHTML = "";
  
    picks.forEach((stock) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <h3>${stock.name}</h3>
        <span class="ticker">${stock.ticker}</span>
        <p>${stock.summary}</p>
        <button class="card-btn" data-link="${stock.link}">${ui.viewBtn}</button>
      `;
      todayPicks.appendChild(card);
    });
  }
  
  function renderReports() {
    const { reports } = stockData[currentLanguage];
    reportList.innerHTML = "";
  
    reports.forEach((report) => {
      const card = document.createElement("article");
      card.className = "report-card";
      card.innerHTML = `
        <span class="report-tag">${report.tag}</span>
        <h3>${report.title}</h3>
        <p>${report.desc}</p>
      `;
      reportList.appendChild(card);
    });
  }
  
  function renderLabMessage() {
    const { ui } = stockData[currentLanguage];
    analysisResult.innerHTML = `<p class="muted">${ui.empty}</p>`;
  }
  
  function renderStaticText() {
    const { ui } = stockData[currentLanguage];
  
    document.documentElement.lang = currentLanguage;
    document.getElementById("badgeText").textContent = ui.badge;
    document.getElementById("heroTitle").textContent = ui.heroTitle;
    document.getElementById("heroSubtitle").textContent = ui.heroSubtitle;
    document.getElementById("todayTitle").textContent = ui.todayTitle;
    document.getElementById("reportTitle").textContent = ui.reportTitle;
    document.getElementById("labTitle").textContent = ui.labTitle;
    document.getElementById("tickerInput").placeholder = ui.inputPlaceholder;
    document.getElementById("analyzeBtn").textContent = ui.analyzeBtn;
    document.getElementById("contactTitle").textContent = ui.contactTitle;
    document.getElementById("emailInput").placeholder = ui.emailPlaceholder;
    document.getElementById("messageInput").placeholder = ui.messagePlaceholder;
    document.getElementById("submitBtn").textContent = ui.submitBtn;
    document.getElementById("footerText").textContent = ui.footer;
    langToggle.textContent = ui.langBtn;
    themeToggle.textContent = isDarkMode ? ui.themeLight : ui.themeDark;
  }
  
  function renderAll() {
    applyTheme();
    renderStaticText();
    renderPicks();
    renderReports();
    renderLabMessage();
  }
  
  langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ko" ? "en" : "ko";
    localStorage.setItem("language", currentLanguage);
    renderAll();
  });
  
  themeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    renderAll();
  });
  
  analyzeBtn.addEventListener("click", () => {
    const link = getLinkByTicker(tickerInput.value.trim());
    if (link) {
      window.location.href = link;
    } else {
      renderLabMessage();
    }
  });
  
  todayPicks.addEventListener("click", (event) => {
    const button = event.target.closest(".card-btn");
    if (!button) return;
    window.location.href = button.dataset.link;
  });
  
  renderAll();