const product = require('./product/lib.js');

module.exports = function (app) {
    app.post('/addproduct',product.addproduct);
    app.get('/getproduct',product.getproduct);
    app.get('/getAllproduct',product.getAllproduct);
}