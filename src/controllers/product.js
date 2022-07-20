
const products = [
    {
        id: 1,
        title: "Relojo negro",
        price: 1000,
        is_offer: false
    },
    {
        id: 2,
        title: "Relojo color plata",
        price: 2000,
        is_offer: true
    },
    {
        id: 3,
        title: "Relojo color oro",
        price: 5000,
        is_offer: false
    }
];

const getProducts = (req, res) => {

    return res.json(products);

};

const getProduct = (req, res) => {

    const id = req.params.productId;

    const product = products.filter((p) => p.id == id);

    res.json(product);

};

module.exports = {
    getProducts,
    getProduct
};