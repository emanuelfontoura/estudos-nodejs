const User = require('../models/User.js')
const Address = require('../models/Address.js')

async function getUserAddresses (id){
    try{
        const userAddresses = await User.findOne({
            include : Address,
            where : {id : id}
        })
        return userAddresses ? userAddresses.get({plain : true}) : []
    }catch(err){
        console.log(err)
        throw err
    }
}

module.exports = { getUserAddresses }