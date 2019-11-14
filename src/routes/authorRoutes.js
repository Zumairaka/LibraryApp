const express = require('express');
const authorRouter = express.Router();

function router(nav) {
    var authors = [
        {
            name: "Liv Nicolayevich",
            age: "38",
            country: "German",
            image: "image2.jpg"
        },
        {
            name: "Victor Hugo",
            age: "60",
            country: "USA",
            image: "image2.jpg"
        },
        {
            name: "V.M.Basheer",
            age: "68",
            country: "India",
            image: "image2.jpg"

        },
        {
            name: "Vilasini",
            age: "52",
            country: "India",
            image: "image2.jpg"
        }
    ];

    authorRouter.route('/')
        .get((req, res) => {
            res.render(
                'authors',
                {
                    nav,
                    title: "Authors",
                    authors
                });
        }
        );

    authorRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'author',
                {
                    nav,
                    title: "Authors",
                    author: authors[id]
                }
            );
        });

    return authorRouter;
}

module.exports = router;