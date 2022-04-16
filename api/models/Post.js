const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    categories: {
      type: Array,
      require: false,
    },
    likes: {
      type: Array,
      default: [],
    },

    comments: [
      {
        username:{
          type:String,
        },
        desc:{
          type:String,
          require:true,
        },
        date: {
					type: Date,
					default: Date.now,
				},
      }
    ]
  },
  { timestamps: true }
);


module.exports = mongoose.model("Post", PostSchema);

