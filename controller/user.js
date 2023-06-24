var jwt = require('jsonwebtoken');
const UserService = require("../service/user");
// const config = require("../config");

const signUp = async (req, res) => {

  const {walletAddress, twitter, discard, userName, userAvatar, jwt_token} = req.body

  const addUser = await UserService.addUser({
    walletAddress: walletAddress,
    twitter: twitter,
    discard: discard,
    userName: userName,
    userAvatar, userAvatar,
    jwt_token: jwt_token
  })

  return res.send({status: true,User: addUser});

}

const logIn = async (req, res) => {
  
}

const updateProfile = async (req, res) => {
  
}


module.exports = {
  signUp,
  logIn,
  updateProfile
}