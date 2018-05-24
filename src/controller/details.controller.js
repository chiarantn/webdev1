const Mustache = require('mustache');
const detailsTemplate = require('../view/details.template');
const fakeData = require('../fakeDAta');


let detailsController = (req,res) => {

    let reqId = req.params.id;

    // Can throw error because id can be diffrent from position
    // const result = fakeData.filter(() => fakeData[5].id == reqId);
    // console.log(result);

    let article = fakeData[reqId];
    let model = {
        title: article.title,
        articletext: article.articletext,
        published: `${article.published.getDate()}.${article.published.getMonth()}.${article.published.getFullYear()}`,
        author: article.author,
        image: article.image,
    };
    let ouput = Mustache.render(detailsTemplate, model);

    return res.send(ouput);
};

module.exports = detailsController;