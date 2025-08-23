document.addEventListener("DOMContentLoaded", () => {
  const url = "https://script.google.com/macros/s/AKfycbwB3qVaTIyMkRfY0PJZ8N8TYz-YEJSEs-R_O4IpiWEdwuBSjpV5T82fwmFxxfRlVptG/exec"; // あなたのGASのURL

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById("news").textContent = data.news || "データがありません";
      document.getElementById("news-user").textContent = data.user || "不明";
    })
    .catch(err => {
      console.error(err);
      document.getElementById("news").textContent = "エラーが発生しました";
    });
});
