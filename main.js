const stockData = [
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
  
  const stockList = document.getElementById("stockList");
  const today = document.getElementById("today");
  
  const now = new Date();
  today.textContent = `기준일: ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
  
  stockData.forEach((stock) => {
    const card = document.createElement("article");
    card.className = "card";
  
    card.innerHTML = `
      <h2>${stock.name}</h2>
      <span class="ticker">${stock.ticker}</span>
      <div>
        <p class="section-title">추천 이유</p>
        <p>${stock.reason}</p>
      </div>
      <div>
        <p class="section-title">리스크</p>
        <p>${stock.risk}</p>
      </div>
    `;
  
    stockList.appendChild(card);
  });// Add JS here