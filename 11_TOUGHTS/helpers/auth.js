// MIDDLEWARE DE VERIFICAÇÃO DE AUTENTICAÇÃO
module.exports.checkAuth = function (req, res, next){
    const userId = req.session.userId
    if(!userId){
        req.flash('message', 'Você precisa estar logado para fazer isso!')
        res.redirect('/login')
        return
    }
    next()
}