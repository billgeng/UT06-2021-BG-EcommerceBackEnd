const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:[
      {
      model: Product,
      attributes: ['id','product_name','price','stock','category_id'],
      }
    ]
  }) .then((Categorydata => res.json(Categorydata)))
     .catch(err =>{
       console.log(err);
       res.status(500).json(err);
     });
    });
  
     


router.get('/:id', (req, res) => {
  // find one category by its `id` value
   // be sure to include its associated Products
  Category.findOne({
    where:{
      id: req.params.id
    },
    include:[
      {
      model: Product,
      attributes: ['id','product_name','price','stock','category_id'],
    }]
  }) .then((CategoryData) => {
    if (!CategoryData) {
      res.status(404).json({message: 'No category found with id'});
      return;
    }
    res.json(CategoryData);
  }) .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
 
});

router.post('/', (req, res) => {
  Category.create({
      category_name : req.body.category_name
    
  }) .then(CategoryData => res.json(CategoryData))
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
  });

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }) .then(CategoryData => {
    if (!CategoryData) {
      res.status(404).json({message: 'No category found with id'});
      return;
    }
    res.json(CategoryData);
  })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(CategoryData =>{
    if (!CategoryData) {
      res.status(404).json({message: 'No category found with id'});
      return;
    }
    res.json(CategoryData);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;