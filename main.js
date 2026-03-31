const stockData = {
    ko: {
      picks: [
        {
          name: "NVIDIA",
          ticker: "NVDA",
          summary: "AI 반도체 대표 수혜주 예시입니다.",
          thesis: "AI 인프라 확장 기대가 큰 대표 성장주입니다.",
          risk: "단기 급등 이후 밸류에이션 부담이 커질 수 있습니다.",
          conclusion: "AI 투자심리의 중심에 있는 상징적 종목입니다."
        },
        {
          name: "Amazon",
          ticker: "AMZN",
          summary: "클라우드와 광고 성장이 결합된 예시 종목입니다.",
          thesis: "AWS와 광고 비즈니스의 동반 확장이 핵심 포인트입니다.",
          risk: "소비 둔화와 클라우드 성장 둔화 가능성을 봐야 합니다.",
          conclusion: "플랫폼 확장성과 현금창출력을 동시에 가진 대형주입니다."
        },
        {
          name: "Meta",
          ticker: "META",
          summary: "광고 효율과 AI 기대가 결합된 예시 종목입니다.",
          thesis: "광고 수익성과 AI 투자 기대가 동시에 반영됩니다.",
          risk: "광고 경기 둔화 시 밸류 재평가 가능성이 있습니다.",
          conclusion: "빅테크 내 수익성 개선 스토리가 강한 편입니다."
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
        empty: "종목을 입력하거나 카드 버튼을 눌러보세요.",
        viewBtn: "이 종목 보기",
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
          thesis: "A major growth stock tied to AI infrastructure expansion.",
          risk: "Valuation pressure may rise after sharp upside moves.",
          conclusion: "A symbolic stock at the center of the AI narrative."
        },
        {
          name: "Amazon",
          ticker: "AMZN",
          summary: "An example stock driven by cloud and ad growth.",
          thesis: "AWS and advertising expansion are the key pillars.",
          risk: "Consumer weakness and slower cloud growth are risks.",
          conclusion: "A mega-cap with both platform strength and cash flow."
        },
        {
          name: "Meta",
          ticker: "META",
          summary: "An example stock supported by ad efficiency and AI optimism.",
          thesis: "Ad profitability and AI expectations support the story.",
          risk: "A weaker ad cycle may pressure sentiment.",
          conclusion: "One of the stronger profitability recovery stories in big tech."
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
        analyzeBtn: "View Analysis",
        contactTitle: "Partnership Inquiry",
        emailPlaceholder: "Email address",
        messagePlaceholder: "Write your message",
        submitBtn: "Send",
        footer: "This page is a demo project built with sample data.",
        empty: "Type a ticker or click one of the stock cards.",
        viewBtn: "View This Stock",
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
  
  function findStock(ticker) {
    return stockData[currentLanguage].picks.find(
      (item) => item.ticker.toLowerCase() === ticker.toLowerCase()
    );
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
        <button class="card-btn" data-ticker="${stock.ticker}">${ui.viewBtn}</button>
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
  
  function renderAnalysis(stock) {
    const { ui } = stockData[currentLanguage];
  
    if (!stock) {
      analysisResult.innerHTML = `<p class="muted">${ui.empty}</p>`;
      return;
    }
  
    analysisResult.innerHTML = `
      <h3>${stock.name}</h3>
      <div class="meta">${stock.ticker}</div>
  
      <div class="label">${ui.thesisLabel}</div>
      <p>${stock.thesis}</p>
  
      <div class="label">${ui.riskLabel}</div>
      <p>${stock.risk}</p>
  
      <div class="label">${ui.conclusionLabel}</div>
      <p>${stock.conclusion}</p>
    `;
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
    renderAnalysis(null);
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
    const stock = findStock(tickerInput.value.trim());
    renderAnalysis(stock);
  });
  
  todayPicks.addEventListener("click", (event) => {
    const button = event.target.closest(".card-btn");
    if (!button) return;
  
    const stock = findStock(button.dataset.ticker);
    renderAnalysis(stock);
  });
  
  renderAll();