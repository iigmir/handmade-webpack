import "./scss/core.scss";
import { AjaxFirstArticle } from "./modules/request-first-article.js";
import { RenderFirstArticles } from "./modules/render-doms";

const main = async () =>
{
    RenderFirstArticles(
        await AjaxFirstArticle({ type: "all-meat", start_with_lorem: 1, paras: 6 })
    );
};

main();
