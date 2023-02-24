
const getCart = (req, res) => {
    // return res.send("estoy en Cart")
    return res.render("pages/cart");
}

module.exports = {
    getCart,
}