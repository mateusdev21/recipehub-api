const db = require('../models');
const Recipe = db.recipes;
const generatePDF = require('../utils/pdf');

exports.findAll = (req, res) => {
    Recipe.find()
        .then((result) => {
            res.status(200).json({
                success: true,
                message: 'Operation successfull',
                data: result,
                count: result.length
            })
        }).catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error while retrieve recipes'
            });
        });
};

exports.findOne = (req, res) => {
    let id = req.params.id;

    Recipe.findById(id)
        .then((result) => {
            res.status(200).json({
                success: true,
                message: 'Operation successfull',
                data: result,
            })
        }).catch((err) => {
            res.status(409).send({
                message: err.message || 'Some error while find recipes'
            });
        });
};

exports.create = (req, res) => {
    let recipe = new Recipe({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        isFeatured: req.body.isFeatured,
    });

    recipe.save(recipe)
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(409).send({
                message: err.message || 'Some error while create recipes'
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Recipe.findOneAndUpdate(id, req.body)
        .then((result) => {
            result ? res.send({ message: "Recipe was updated" }) : res.status(404).send({ message: "Recipe not found" });
        }).catch((err) => {
            res.status(409).send({
                message: err.message || 'Some error while update recipe'
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Recipe.findByIdAndRemove(id)
        .then((result) => {
            result ? res.send({ message: "Recipe was deleted" }) : res.status(404).send({ message: "Recipe not found" });
        }).catch((err) => {
            res.status(409).send({
                message: err.message || 'Some error while delete recipes'
            });
        });
};

exports.featured = (req, res) => {
    Recipe.find({ isFeatured: true })
        .sort({ createdAt: -1 })
        .limit(6)
        .then((recipes) => {
            res.json(recipes);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error while retrieving featured recipes'
            });
        });
};

exports.pdf = (req, res) => {
    const id = req.params.id;

    Recipe.findById(id)
        .then((recipe) => {
            if (!recipe) {
                return res.status(404).send({ message: "Recipe not found" });
            }
            generatePDF(recipe, res);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while generating the PDF"
            });
        });
};