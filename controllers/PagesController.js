exports.home = (req, res) =>{
    let param = {
        title: "Home",
        description: "Home"
    }
    res.render("./partials/index", param)
 }
 
 exports.game = (req, res) =>{
    let param = {
        title: "UDS",
        description: "Ultimate Daruma Selfy"
    }
    res.render("./partials/UDS", param)
 }