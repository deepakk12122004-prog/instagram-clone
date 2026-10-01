const mongoose = require("mongoose"); 
const commentSchema = new mongoose.Schema({ 
user: String, 
text: String, 
createdAt: { type: Date, default: Date.now } 
}); 
const postSchema = new mongoose.Schema({ 
userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  
image: { type: String, required: true }, 
caption: String, 
location: String,  
likes: { type: Number, default: 0 }, 
reposts: { type: Number, default: 0 }, 
shares: { type: Number, default: 0 }, 
comments: { type: [commentSchema], default: [] }, 
createdAt: { type: Date, default: Date.now } 
}); 
module.exports = mongoose.model("Post", postSchema);