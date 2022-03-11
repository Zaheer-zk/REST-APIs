const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/wikiDB')

const articleSchema = {
  title: String,
  content: String,
}

const Article = mongoose.model('Article', articleSchema)

//////////////////////////////////Request targeting Articles////////////////////////////////

app
  .route('/articles') // chained route handles using express
  .get((req, res) => {
    Article.find((err, articlesFounded) => {
      if (!err) {
        res.send(articlesFounded)
      } else {
        res.send(err)
      }
    })
  })

  .post((req, res) => {
    console.log(req.body.title)
    console.log(req.body.content)

    const newArticle = new Article({
      // title: req.body.title,
      // content : req.body.content
    })
    newArticle.save((err) => {
      if (!err) {
        res.send('Successfully Added!')
      } else {
        res.send(err)
      }
    })
  })

  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (!err) {
        res.send('Successfully Deleted!')
      } else {
        res.send(err)
      }
    })
  })

//////////////////////////////////Request targeting Specific Articles////////////////////////////////

app
  .route('/articles/:articleTitle')

  .get((req, res) => {
    Article.findOne(
      { title: req.params.articleTitle },
      (err, articleFounded) => {
        if (!err) {
          res.send(articleFounded)
        } else {
          res.send(err)
        }
      }
    )
  })

  .put((req, res) => {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      (err) => {
        if (!err) {
          res.send('Successfully update article')
        } else {
          res.send(err)
        }
      }
    )
  })

  .patch((req, res) => {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      (err) => {
        if (!err) {
          res.send('Successfully update article')
        } else {
          res.send('Error' + err)
        }
      }
    )
  })

  .delete((req, res) => {
    Article.deleteOne(
      { title: req.params.articleTitle },
      // { title: req.body.title, content: req.body.content },
      (err) => {
        if (!err) {
          res.send('Successfully delete corresponding article.')
        } else {
          res.send(err)
        }
      }
    )
  })

app.listen('3000', () => {
  console.log('listening on Port 3000...')
})
