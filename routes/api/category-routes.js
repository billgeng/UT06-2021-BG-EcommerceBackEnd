const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:[{
      model: Product,
      attributes: ['id','product_name','price','stock','category_id']
    }]
  }) .then((CategoryPost,ProductPost) => {
    res.json(CategoryPost,ProductPost);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
   // be sure to include its associated Products
  Category.findOne({
    where:{
      id: req.params.id
    },
    incl
  }) .then((CategoryPost,ProductPost) => {
    res.json(CategoryPost,ProductPost);
  });
 
});

router.post('/', (req, res) => {
  Category.Post.create({
    where: {
      id: req.params.id
    }
  }) .then(CategoryPost =>{
    res.json(CategoryPost);
  });
});

router.put('/:id', (req, res) => {
  Category.Post.update({
    where: {
      id: req.params.id
    }
  }) .then(CategoryPost => {
    res.json(CategoryPost);
  });
});

router.delete('/:id', (req, res) => {
  Category.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(CategoryPost =>{
    res.json(CategoryPost);
  });

module.exports = router;
