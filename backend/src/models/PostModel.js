import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    content :{
        type: String,
        require : true
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
         require : true
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})


export default mongoose.model('Post', postSchema);