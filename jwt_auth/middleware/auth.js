

const authentication = async (req,res,next)=>{
    console.log(req.header.authorization)
    next()
}

module.exports = authentication