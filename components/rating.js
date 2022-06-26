import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function StarRating() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <div className="">
      評価
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        allowHalfIcon
        allowHover
        fillColor="orange"
        emptyColor="gray"
        className="" // Will remove the inline style if applied
      />
    </div>
  );
}
