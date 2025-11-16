const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const imageSchema = new Schema({
  filename: {
    type: String,
    default: "listingimage",
  },
  url: {
    type: String,
    default:
      "https://media.gettyimages.com/id/1950819333/photo/nature-heart.jpg?s=612x612&w=0&k=20&c=Yz06COggz10YHgENrx53gMKw2TTN9iV8chRpO1dYGPs=",
  },
});

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({_id : {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
