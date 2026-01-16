const db = require('../models');
const News = db.news;

exports.findAll = (req, res) => {
    News.find()
        .then((result) => {
            res.status(200).json({
                success: true,
                message: 'Operation successfull',
                data: result,
                count: result.length
            })
        }).catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error while retrieve news'
            });
        });
};

exports.findOne = (req, res) => {
    let id = req.params.id;

    News.findById(id)
        .then((result) => {
            res.status(200).json({
                success: true,
                message: 'Operation successfull',
                data: result,
            })
        }).catch((err) => {
            res.status(409).send({
                message: err.message || 'Some error while find news'
            });
        });
};

exports.create = (req, res) => {
    let news = new News({
        title: req.body.title,
        summary: req.body.summary,
        image: req.body.image,
    });

    news.save(news)
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(409).send({
                message: err.message || 'Some error while create news'
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    News.findOneAndUpdate(id, req.body)
        .then((result) => {
            result ? res.send({ message: "News was updated" }) : res.status(404).send({ message: "News not found" });
        }).catch((err) => {
            res.status(409).send({
                message: err.message || 'Some error while update news'
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    News.findByIdAndRemove(id)
        .then((result) => {
            result ? res.send({ message: "News was deleted" }) : res.status(404).send({ message: "News not found" });
        }).catch((err) => {
            res.status(409).send({
                message: err.message || 'Some error while delete news'
            });
        });
};