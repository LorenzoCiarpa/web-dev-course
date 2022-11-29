
const {AuthQueries} = require('../queries/authQueries')




//installare un middleware to check validità nickname
const signUp = async (req, res, next) => { 
    //Dati input
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    console.log(req.body)
    
    let responseCreateUser
    try{
        responseCreateUser = await AuthQueries.createUser(email, password, username);
    }catch(error){
        console.log(`Error in AuthQueries.setUser, error: ${error}`)
        return res
        .status(401)
        .json({
            success: false,
            errorMessage: "Error in setUser"
        })
    }

    console.log("responseCreateUser: ", responseCreateUser)
    
    return res
    .status(200)
    .json({
        success: true
    });
    
}




module.exports = {
    signUp
}
    