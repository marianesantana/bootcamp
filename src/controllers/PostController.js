const Post = require('../models/Post')

module.exports = {
    async index(req, res){

    },
    async store(req, res){

        const { author, place, description, hashtags, like } = req.body;
        const { filename: image } = req.file;

        const post = await Post.create({
            author,
            place,
            description, 
            hashtags, 
            image
        })

        console.log(req.file)
        return res.json({
            post
        })
    }
}