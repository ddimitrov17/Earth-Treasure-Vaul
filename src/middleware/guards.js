const { getStoneById } = require("../services/stoneService");

function CheckForLoggedInUser() {
    return function (req, res, next) {
        if (!req.user) {
            res.redirect('/home');
        } else {
            next();
        }
    }
}

function CheckIfThisIsTheOwner() {
    return async function (req,res,next) {
        const stoneId=req.params.id;
        const currentStone=await getStoneById(stoneId);
        const ownerId=currentStone.owner.toString();
        if (req.user.id!=ownerId) {
            res.redirect('/details/' + stoneId);
        } else {
            next();
        }
    }
}

function ifThisIsNotTheOwner() {
    return async function (req,res,next) {
        const stoneId=req.params.stoneId;
        const currentStone=await getStoneById(stoneId);
        const ownerId=currentStone.owner.toString();
        if (req.user.id==ownerId) {
            res.redirect('/details/' + stoneId);
        } else {
            next();
        }
    }
}

module.exports = {
    CheckForLoggedInUser,
    CheckIfThisIsTheOwner,
    ifThisIsNotTheOwner
}