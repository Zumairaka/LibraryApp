const express = require('express');
const booksRouter = express.Router();
// const cors = require('cors');
// const bodyparser = require('body-parser');
// booksRouter.use(cors());
// booksRouter.use(bodyparser.json())
function router(nav) {
    var books = [
        {
            title: "War and Peace",
            genre: "Historical Fiction",
            author: "Liv Nicolayevich",
            image: "image2.jpg"
        },
        {
            title: "Les Miserable",
            genre: "Historical Fiction",
            author: "Victor Hugo",
            image: "image2.jpg"
        },
        {
            title: "Book3",
            genre: "Classic",
            author: "V.M.Basheer",
            image: "image2.jpg"
        },
        {
            title: "Book4",
            genre: "Fiction",
            author: "Vilasini",
            image: "image2.jpg"
        }
    ];

    booksRouter.route('/')
        .get((req, res) => {

            res.render(
                'books',
                {
                    nav,
                    title: "Books",
                    books
                });
        });

    booksRouter.route('/addBooks')
        .get((req, res) => {
            res.render(
                'addBooks',
                {
                    nav,
                    title: "Add Books"
                }
            );
        });

    booksRouter.route('/save')
        .post((req,res)=>{
            console.log(req.body);
        });

    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;

            res.render(
                'book',
                {
                    nav,
                    title: "Books",
                    book: books[id]
                }
            );
        });

    return booksRouter;
}

module.exports = router;