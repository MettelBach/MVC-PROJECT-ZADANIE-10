const express = require("express"),
      router = express.Router(),
      bookController = require("../controllers/bookController");

router.get('/', bookController.homepage);

router.get('/view/:id', bookController.view);

router.get('/add', bookController.addBook);
router.post('/add', bookController.postBook);

router.get('/edit/:id', bookController.edit);
router.put('/edit/:id', bookController.editPost);
router.post('/edit/isChecked/:id', bookController.editPostCheck);
router.delete('/edit/:id', bookController.deleteBook);

module.exports = router;