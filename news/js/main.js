document.addEventListener("DOMContentLoaded", () => {
  const url = "https://script.google.com/macros/s/AKfycbxaaDk2M9n3FTBhIBjWP7mpKV2KKNRlE6IzEGQTJBQR60eJF-RHcr__nsexrY-qDD4NKQ/exec"; // 例: https://script.google.com/macros/s/XXXX/exec

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach((item, index) => {
        const newsEl = document.getElementById(`news-${index + 1}`);
        const userEl = document.getElementById(`news-user-${index + 1}`);
        if (newsEl) newsEl.textContent = item.news;
        if (userEl) userEl.textContent = item.user;
      });
    })
    .catch(err => {
      console.error("データ取得エラー:", err);
    });
});
