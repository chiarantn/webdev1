const Mustache = require('mustache');
const articlesTemplate = require('../view/articles.template');
const fakeData = require('../fakeDAta');


let articlesController = (req,res) => {

    let ouput = Mustache.render(articlesTemplate, {fakeData});

    return res.send(ouput);
};

module.exports = articlesController;