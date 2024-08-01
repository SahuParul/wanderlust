const express = require("express");
const router = express.Router({mergeParams : true});
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js"); // bcz review are inside listings
const {validateReview, isLoggedIn,isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//REVIEWS ROUTE
router.post("/",isLoggedIn, validateReview,wrapAsync(reviewController.createReview));
  
  //DELETE REVIEW ROUTE
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;