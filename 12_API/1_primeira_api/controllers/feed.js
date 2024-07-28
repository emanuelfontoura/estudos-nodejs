module.exports = class FeedController{
    static getPosts(req, res, next){
        res.status(200).json({
            posts: [{title: 'My first post', content: 'This is the first post'}]
        })
    }

    static async createPost(req, res, next){
        const title = req.body.title
        const content = req.body.content
        // insert on db
        res.status(201).json({
            message: 'Post created successfully',
            post: {id: new Date().toISOString(), title: title, content: content}
        })
    }
}