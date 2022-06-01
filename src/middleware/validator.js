'use strict'
// Checks the query string for a name property
// Sends the request through when valid, forces an error when not
function validator() {
    return (req, res, next) => {
    //     console.log('req.query.name => ', req.query.name);
    //     let name = req.query.name;
    //     console.log(typeof name);
    //     req.name = name;
    //    (typeof req.name == "string") ? next() : 
    //     (req.name == null) ? next("name invalid: you should enter a name /person/name") : null;
        // req.query.name;
        // let result = /^[A-Za-z]+$/;     
        // if(result.test(req.query.name))     
        // next();    
        // else     
        // next("invalid input for name it should be a string")     
        // }
        // else
        // { 
        // next("name not provided")
        console.log(req.query.name);
        let regex= /^[A-Za-z]+$/;
        let regex1 = /^[0-9]/;
        (regex.test(req.query.name)) ? next() : 
        (regex1.test(req.query.name)) ? next("enter a string for the name") : 
        next("name empty : enter a name");
     
    //      else     
    //      next("invalid input for name it should be a string")     
    //     }
    //     else{       
    //     next("name not provided")};
     }
    }


module.exports = validator;