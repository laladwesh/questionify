const {Schema , model} = require('mongoose')

const questionSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    coverImageURL:{
        type:String,
        required:false
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
} , {timestamps:true});

const Question = model("question" , questionSchema)

module.exports = Question;