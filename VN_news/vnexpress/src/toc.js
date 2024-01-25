load('config.js');
function execute(url) {
    const data = [];
    data.push({
        name: "Full",
        url: url,
        host: BASE_URL
    })
    return Response.success(data);
}