document.addEventListener("DOMContentLoaded", () => {
    const url = "https://script.google.com/macros/s/AKfycbz4UKiT5MouKAzeS94CDPZPGuR33ycQyetf5GUFHN16MiMIp45UZSuKT2ix1NkOuYsQ9Q/exec";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // ここは複数ニュースに対応させる場合は変更が必要
            document.getElementById("news-1").textContent = data.news || "データがありません";
            document.getElementById("news-user-1").textContent = data.user || "不明";
        })
        .catch(err => {
            console.error(err);
            document.getElementById("news-1").textContent = "エラーが発生しました";
        });
});
