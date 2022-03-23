const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
		
        title:{
            type: String,
            required:true,
            unique:true,
        },
        desc:{
            type:String,
            require:true,
        },
        photo:{
            type:String,
            required:false,
        },
        username:{
            type:String,
            required:true,
        },
        categories:{
            type: Array,
            require:false,
        },
        likes: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
				},
			},
		],
		comments: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
				},
				name: {
					type: String,
				},
				avatar: {
					type: String,
					default: "",
				},
				desc: {
					type: String,
					required: true,
				},
				likes: [
					{
						user: {
							type: mongoose.Schema.Types.ObjectId,
						},
					},
				],
				date: {
					type: Date,
					default: Date.now,
				},
			},
		],
    },
    {timestamps: true}
);


module.exports = mongoose.model("Post", PostSchema);

