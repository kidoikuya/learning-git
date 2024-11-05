const url = "https://www.googleapis.com/books/v1/volumes/66rnDwAAQBAJ";
(async () => { //async:
    try {
        const res = await fetch(url); //await:完了するまで次行の処理を待つ、fetch:指定URLからデータ取得
        if (res.ok) { //.ok:fetchAPIのHTTPレスポンスが成功（ステータスコード200-299）ならtrue
            const data = await res.json();
            const {
                title,
                authors,
                publishedDate,
                description
            } = data["volumeInfo"];
            console.log(`書籍名:${title}\n著者:${authors.join(",")}\n発行日:${publishedDate}\n説明:${description}`);
        }
    } catch (error) {
        console.log(error);
    }
})();