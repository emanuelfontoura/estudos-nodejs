module.exports = class DashboardController{
    static async authentication(req, res){
        res.status(200).json({
            statusCode: 200,
            message: 'Authenticated route'
        })
    }
}