const RenderFirstArticles = (input = []) =>
{
    const dom = document.querySelector("article#top-article section.right");
    const articles = input.map((text = "") => `<p>${text}</p>`);
    dom.innerHTML = "";
    articles.forEach( (article) =>
    {
        dom.innerHTML += article;
    });
    dom.innerHTML += "<hr />";
};

export { RenderFirstArticles };
