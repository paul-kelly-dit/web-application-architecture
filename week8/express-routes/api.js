const express = require('express');
const router = express.Router();

const articles = [
        {
            articleID: "1",
            articleName: "Pauls Article"
        },
        {
            articleID: "2",
            articleName: "Johns Articles"
        },
        {
            articleID: "3",
            articleName: "Sophies Articles"
        }
    ]

router.get('/', (req, res) => {
    res.json(articles)
});

router.get('/:articleID', (req, res, next) => {
    let result = {}
    articles.forEach((article) => {
        if (article.articleID === req.params.articleID) return result = article;
    })

    if (Object.keys(result).length > 0) return res.json(result)
    else {
        res.status(404);
        return res.send('Article does not exist');
    }
});

router.post('/', (req, res, next) => {
    const articleID = req.query.articleID || req.body.articleID;
    const articleName = req.query.articleName || req.body.articleName;
    let result = {}
    articles.forEach((article) => {
        if (article.articleID === req.body.articleID) return result = article;
    })

    if (Object.keys(result).length > 0) {
        res.status(400)
        return res.send('Article ID already exists')
    }
    else return next();

})

router.post('/', (req, res, next) => {
    const articleID = req.query.articleID || req.body.articleID;
    const articleName = req.query.articleName || req.body.articleName;

    if (articleID && articleName) {
        articles.push({articleID: articleID, articleName: articleName})
        return res.send(`Article ${articleID} successfully added`)
    } else  {
        res.status(400)
        return res.send('Invalid. Please check article ID and name.')
    }
})

router.delete('/:articleID', (req, res) => {
    const articleID = req.params.articleID;
    let result = {}
    Object.entries(articles).map((article, key) => {
        if (articles[key].articleID === articleID) {
            result = article;
            articles.splice(key, 1)
            return res.send(`Article ${articleID} has been deleted.`)
        }   
    })

    if (Object.keys(result).length === 0) {
        res.status(404)
        return res.send('Article does not exist.')
    }
})

module.exports = router;
