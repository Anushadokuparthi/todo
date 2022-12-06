const mongoose = require("mongoose")
const TodoSchema = mongoose.Schema(
    {
        title:{
            type:String,
            require: [true, "todo title is Required"],
            trim: true,
            maxlength: [120, "title should not more than 120 characters"],
        },
        priority:{
            type:String,
            default:"Low",
            enum:["Low","Medium","High"],
        },
        tasks:{
            type:[String],
            trim: true,
            maxlength: [120, "title should not more than 120 characters"],
        },
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("Todo", TodoSchema)