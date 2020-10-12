exports.home = (req, res) =>{
    let param = {
        title: "Home",
        description: "Home"
    }
    res.render("./partials/index", param)
 }

 function Game(arg_title){
    return   (req, res) =>{
        let param = {
            title: arg_title,
            description: "Ultimate Daruma Selfy"
        }
        res.render("./partials/UDS", param)
     }
 } 
 function Cool(arg_face){
    return   (req, res) =>{
        let param = {
            title: arg_face(),
            face:arg_face(),
            description: "cool ascii face"
        }
        res.render("./partials/cool", param)
     }
 }
 
 exports.game=Game; 

 exports.cool=Cool;