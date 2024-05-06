const Book = require("../models/Book"),
      mongoose = require("mongoose");

exports.homepage = async (req, res) => {
        const messages = await req.flash("info");

        const locals = {
            title: "Library",
            description: "System zarządzania listą zadań do przeczytania"
        }

        let perPage = 6,
            page = req.query.page || 1;
    
        try {
            const books = await Book.aggregate([ { $sort: { updatedAt: -1 } } ])
                .skip(perPage * page - perPage)
                .limit(perPage)
                .exec();

            const count = await Book.countDocuments();

            res.render("index", {
                locals,
                books,
                current: page,
                pages: Math.ceil(count / perPage),
                messages
            });

        } catch (error) {
            console.log(error);
        }
}

exports.addBook = async (req, res) => {
    const locals = {
        title: "Add New Book",
        description: "System zarządzania listą zadań do przeczytania"
    }

    res.render("book/add", locals);
}

exports.postBook = async (req, res) => {
    console.log(req.body);
    
    const newBook = new Book({
      title: req.body.title,
      genre: req.body.genre,
      country: req.body.country,
      year: req.body.year,
      imageLink: req.body.imageLink,
      description: req.body.description,
    });

    try {
        await Book.create(newBook);
        await req.flash("info", "New book has been added.");
        res.redirect("/");
    } catch(error) {
        console.log(error);
    }
};

exports.view = async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id })
    
        const locals = {
            title: "View Book Data",
            description: "System zarządzania listą zadań do przeczytania"
        }

        res.render("book/view", {
            locals,
            book
        });
    } catch (error) {
        console.log(error);
    }
};

exports.edit = async (req, res) => {
    try {
      const book = await Book.findOne({ _id: req.params.id });
  
      const locals = {
        title: "Edit Book Data",
        description: "System zarządzania listą zadań do przeczytania",
      };
  
      res.render("book/edit", {
        locals,
        book,
      });
    } catch (error) {
      console.log(error);
    }
  };

  exports.editPost = async (req, res) => {
    try {
      await Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: req.body.genre,
        country: req.body.country,
        year: req.body.year,
        imageLink: req.body.imageLink,
        description: req.body.description,
      });
      await res.redirect(`/view/${req.params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  exports.editPostCheck = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        book.isChecked = !book.isChecked;
        await book.save();
      await res.redirect(`/view/${req.params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  exports.deleteBook = async (req, res) => {
    try {
      await Book.deleteOne({ _id: req.params.id });
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };