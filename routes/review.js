const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("C:\\Users\\hp\\Desktop\\MajorProject\\models\\review.js");
const Listing = require("C:\\Users\\hp\\Desktop\\MajorProject\\models\\listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

router.post("/", isLoggedIn, 
    validateReview, wrapAsync(reviewController.createReview));

router.delete("/:reviewId", isLoggedIn, isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

module.exports = router;