

const getLogin = (req, res) => {
    // return res.send("estoy en Login")
    return res.render("pages/login");
}

module.exports = {
    getLogin,
}