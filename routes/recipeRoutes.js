const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.getRecipes);
router.post('/search', recipeController.searchRecipes);

module.exports = router;
