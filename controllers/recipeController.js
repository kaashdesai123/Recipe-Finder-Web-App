const Recipe = require('../models/recipe');

exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.render('index', { recipes });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

exports.searchRecipes = async (req, res) => {
    const query = req.body.query;
    try {
        const recipes = await Recipe.find({ 
            ingredients: { $regex: query, $options: "i" } 
        });
        res.render('index', { recipes });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};
