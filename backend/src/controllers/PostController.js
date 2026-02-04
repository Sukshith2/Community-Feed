import PostModel from '../models/PostModel.js';
import LikeModel from '../models/LikeModel.js';



export const CreatePost = async (req, res)=>{
    try {

        const {content, AuthorID} = req.body;

        const post = await PostModel.create({content, author:AuthorID});
        res.status(201).json(post);
        
    } catch (error) {
        res.status(501).json({message : "Post creation failed"});
        
    }
};


export const getfeed = async(req, res)=>{
    try {
        const posts = await PostModel.find().populate("author", "username").sort({createdAt : -1}).lean();
        const postId = posts.Map(p=> p._id);


        const likes = await LikeModel.aggregate([
             { $match: { post: { $in: postIds } } },
      { $group: { _id: "$post", count: { $sum: 1 } } }
        ]);


        const likeMap = {};
        likes.forEach(l => (likeMap[l._id] = l.count));

        posts.forEach(p => { p.likecount = likeMap[p_.id] || 0 })
        res.json(posts);        
        
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch feed" });
        
    }
}

