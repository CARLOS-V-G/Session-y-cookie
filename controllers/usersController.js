
const {validationResult} = require("express-validator");

module.exports = {
    index: (req, res) => {
        res.render("index");
        req.session.usuario = req.cookies.cookie;
    },
   formularioIndex: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()){

            req.session.usuario = {...req.body};

        
            if(req.body.recordar){
                res.cookie('cookie', req.session.usuario.color, {
                    expires: new Date(Date.now() + 70000),
                    httpOnly: true
                }); 
            }

            res.render('view-date-user', {
                session: req.session
            })
        }else{
            console.log(errors.mapped());
                res.render('index', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },

    deleteColor: (req, res) => {
            res.cookie("cookie", "", {maxAge: -1});
            res.redirect("/");
    }
}