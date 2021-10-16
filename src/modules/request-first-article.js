import axios from "axios";

/**
 * Ajax articles from [Bacon Ipsum](https://baconipsum.com/api).
 * @param {*} params Refer [the manual](https://baconipsum.com/json-api).
 * @returns {Array|Error} Articles or error config
 */
const AjaxFirstArticle = async (params = { type: "all-meat", start_with_lorem: 1, paras: 6 }) =>
{
    const api = axios({
        baseURL: "https://baconipsum.com/api",
        url: "/",
        method: "GET",
        params: params,
    });
    try {
        const response = await api;
        return response.data;
    } catch (error) {
        console.error( error );
        return ["Request error"];
    }
};

export { AjaxFirstArticle };
