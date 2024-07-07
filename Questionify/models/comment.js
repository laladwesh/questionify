const {Schema , model} = require('mongoose')


const commentSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    
    questionId:{
        type:Schema.Types.ObjectId,
        ref:"question"
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
} , {timestamps:true});

const Comment = model("comment" , commentSchema)

module.exports = Comment;