load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        let descriptionMeta = doc.select(".detail-sapo").text();
        let title = doc.select('meta[property="og:title"]').attr("content");
        let author = doc.select('.author-info .name').text();
        let category = doc.select('.category-name_ac').text();
        let updateTime = doc.select('.detail-time').text();

        return Response.success({
            name: title,
            cover: coverImg,
            author: author,
            description: descriptionMeta,
            detail: "Danh mục: " + category + '<br>' + "Thời gian cập nhật: " + updateTime,
            host: BASE_URL
        });
    }
    return null;
}