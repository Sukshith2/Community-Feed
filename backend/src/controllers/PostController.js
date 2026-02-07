import PostModel from '../models/PostModel.js';
import Like from '../models/LikeModel.js';




export const CreatePost = async (req, res)=>{
    try {
        const {content, AuthorID} = req.body;

        const post = await PostModel.create({content, author:AuthorID});
        res.status(201).json(post);
        
    } catch (error) {
        res.status(501).json({message : "Post creation failed"});
        
    }
};


export const getfeed = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .populate("author", "username")
      .sort({ createdAt: -1 })
      .lean();

    if (posts.length === 0) {
      return res.json([]);
    }

    const postIds = posts.map(p => p._id);

    const likes = await Like.aggregate([
      {
        $match: {
          post: { $in: postIds }
        }
      },
      {
        $group: {
          _id: "$post",
          count: { $sum: 1 }
        }
      }
    ]);

    const likeMap = {};
    likes.forEach(l => {
      likeMap[l._id.toString()] = l.count;
    });

    posts.forEach(p => {
      p.likeCount = likeMap[p._id.toString()] || 0;
    });

    res.json(posts);
  } catch (error) {
    console.error("GET FEED ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


