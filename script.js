const content = {
  en: {
    description: "Chocolate is a Discord Bot designed to manage user inventories for Florr.io, perform lucky draws, and enhance your community server with various utilities.",
    features: [
      "🎲 Lucky draw system (lottery)",
      "📦 Inventory tracking",
      "🛠 Custom item support",
      "📊 Score calculation based on equipped items"
    ],
    footer: "Made with sayolate(chocolate) by sayo_n"
  },
  ja: {
    description: "chocolateは、florr.io向けにユーザーのインベントリ管理、抽選、スコア計算などを提供する多機能なDiscord Botです。",
    features: [
      "🎲 抽選システム（lottery）",
      "📦 インベントリ追跡",
      "🛠 カスタムアイテム対応",
      "📊 装備アイテムに基づくスコア計算"
    ],
    footer: "sayolate(chocolate) 制作：sayo_n（ちょっとした設定はおれ）"
  }
};

function updateContent(lang) {
  const t = content[lang];
  document.getElementById("description").textContent = t.description;
  const ul = document.getElementById("features");
  ul.innerHTML = "";
  t.features.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.getElementById("footer").textContent = t.footer;
}

document.getElementById("language-select").addEventListener("change", (e) => {
  updateContent(e.target.value);
});

updateContent("en");
