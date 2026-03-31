const stockDataKo = [
    {
      name: "NVIDIA",
      ticker: "NVDA",
      reason: "AI 반도체 수요가 강하다는 가정 아래, 대표 성장주 예시로 넣은 종목입니다.",
      risk: "단기 급등 후 변동성이 커질 수 있습니다."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      reason: "클라우드와 광고 사업이 같이 성장하는 구조의 예시 종목입니다.",
      risk: "소비 둔화나 클라우드 성장 둔화 시 기대가 약해질 수 있습니다."
    },
    {
      name: "Meta",
      ticker: "META",
      reason: "광고 효율 개선과 AI 투자 기대감을 반영한 예시 종목입니다.",
      risk: "광고 경기 둔화 시 실적 기대가 흔들릴 수 있습니다."
    }
  ];
  
  const stockDataEn = [
    {
      name: "NVIDIA",
      ticker: "NVDA",
      reason: "An example growth stock based on strong demand for AI chips.",
      risk: "Volatility may increase after sharp short-term gains."
    },
    {
      name: "Amazon",
      ticker: "AMZN",
      reason: "An example stock supported by cloud and advertising growth.",
      risk: "Expectations may weaken if consumer demand or cloud growth slows."
    },
    {
      name: "Meta",
      ticker: "META",
      reason: "An example stock reflecting ad efficiency improvement and AI expectations.",
      risk: "Earnings expectations may weaken if the ad market slows."
    }
  ];
  
  const stockList = document.getElementById("stockList");
  const today = document.getElementById("today");
  const langToggle = document.getElementById("langToggle");
  const themeToggle = document.getElementById("themeToggle");
  
  let currentLanguage = localStorage.getItem("language") || "ko";
  let isDarkMode = localStorage.getItem("theme") === "dark";
  
  function applySavedTheme() {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  
  function renderDate() {
    const now = new Date();
  
    if (currentLanguage === "ko") {
      today.textContent = `기준일: ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
    } else {
      today.textContent = `As of: ${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    }
  }
  
  function renderStocks() {
    stockList.innerHTML = "";
    const stockData = currentLanguage === "ko" ? stockDataKo : stockDataEn;
  
    stockData.forEach((stock) => {
      const card = document.createElement("article");
      card.className = "card";
  
      card.innerHTML = `
        <h2>${stock.name}</h2>
        <span class="ticker">${stock.ticker}</span>
        <div>
          <p class="section-title">${currentLanguage === "ko" ? "추천 이유" : "Why Picked"}</p>
          <p>${stock.reason}</p>
        </div>
        <div>
          <p class="section-title">${currentLanguage === "ko" ? "리스크" : "Risk"}</p>
          <p>${stock.risk}</p>
        </div>
      `;
  
      stockList.appendChild(card);
    });
  }
  
  function renderText() {
    if (currentLanguage === "ko") {
      document.documentElement.lang = "ko";
      document.getElementById("badgeText").textContent = "Demo Page";
      document.getElementById("titleText").textContent = "오늘의 주식 종목추천";
      document.getElementById("subtitleText").textContent = "학습용 예시 페이지입니다. 실제 투자 추천이 아닙니다.";
      document.getElementById("contactTitle").textContent = "제휴 문의";
      document.getElementById("contactDesc").textContent = "광고, 협업, 제휴 관련 문의를 남겨주세요.";
      document.getElementById("emailInput").placeholder = "이메일 주소";
      document.getElementById("messageInput").placeholder = "문의 내용을 적어주세요.";
      document.getElementById("submitBtn").textContent = "보내기";
      document.getElementById("footerText").textContent = "본 페이지는 예시 데이터로 제작되었습니다.";
      langToggle.textContent = "English";
      themeToggle.textContent = isDarkMode ? "라이트모드" : "다크모드";
    } else {
      document.documentElement.lang = "en";
      document.getElementById("badgeText").textContent = "Demo Page";
      document.getElementById("titleText").textContent = "Today's Stock Picks";
      document.getElementById("subtitleText").textContent = "This is a demo page for learning purposes. Not real investment advice.";
      document.getElementById("contactTitle").textContent = "Partnership Inquiry";
      document.getElementById("contactDesc").textContent = "Leave your message for ads, collaborations, or partnership inquiries.";
      document.getElementById("emailInput").placeholder = "Email address";
      document.getElementById("messageInput").placeholder = "Write your message";
      document.getElementById("submitBtn").textContent = "Send";
      document.getElementById("footerText").textContent = "This page was created with demo data.";
      langToggle.textContent = "한국어";
      themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }
  
    renderDate();
    renderStocks();
  }
  
  langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ko" ? "en" : "ko";
    localStorage.setItem("language", currentLanguage);
    renderText();
  });
  
  themeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    applySavedTheme();
    renderText();
  });
  
  applySavedTheme();
  renderText();