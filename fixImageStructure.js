const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); // adjust path if needed

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function fixImages() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");

  // Find listings where image.url doesn't exist
  const listings = await Listing.find({ "image.url": { $exists: false } });

  console.log(`Found ${listings.length} listings with invalid image format`);

  for (let listing of listings) {
    if (typeof listing.image === "string") {
      listing.image = {
        filename: "listingimage",
        url: listing.image
      };
      await listing.save();
      console.log(`Fixed: ${listing.title}`);
    }
  }

  console.log("All listings updated successfully!");
  mongoose.connection.close();
}

fixImages().catch(err => {
  console.error("Error:", err);
});
