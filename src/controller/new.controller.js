const Mustache = require('mustache');
const newTemplate = require('../view/new.template');


let newController = (req,res) => {

    let ouput = Mustache.render(newTemplate);

    return res.send(ouput);
};

module.exports = newController;