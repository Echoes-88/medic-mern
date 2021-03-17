const Product = require("../../schema/schemaProduct.js");

async function getproduct(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  try {

    const findProduct = await Product.findOne({ name });
    if (!findProduct)
      return res.status(401).json({
        text: "Le produit n'existe pas"
      });

    return res.status(200).json({
      product: findProduct
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
}


async function getAllproduct(req, res) {

  try {

    const findProducts = await Product.find();
    if (!findProducts)
      return res.status(401).json({
        text: "Les produits n'existent pas"
      });

    return res.status(200).json({
      product: findProducts
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
}

async function addproduct(req, res) {
  const { name, description, quantity } = req.body;
  if (!name || !quantity) {
    return res.status(400).json({
      text: "Requête invalide"
    });
  }

  const product = {
    name,
    description,
    quantity
  };

  try {
    const findProduct = await Product.findOne({
      name
    });
    if (findProduct) {
      return res.status(400).json({
        text: "Le produit existe déjà"
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {

    const productData = new Product(product);
    const productObject = await productData.save();
    return res.status(200).json({
      product: productObject
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

exports.getproduct = getproduct;
exports.getAllproduct = getAllproduct;
exports.addproduct = addproduct;