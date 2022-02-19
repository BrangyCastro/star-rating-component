import { useState, useEffect } from "react";
import { RatingIcon } from "./RatingIcon";

export const StarRating = ({
  countStar,
  initialStar,
  onChange,
  colorStar = "#FCD12A",
}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    validateInitialValue(initialStar, countStar);
    setStars(getStars(countStar));
  }, [initialStar, countStar]);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index) => {
    if (index === rating) {
      onResetRating();
      return;
    }
    setRating(index);
    onChange(index);
  };

  const onResetRating = () => {
    setRating(0);
  };

  const validateInitialValue = (value, count) => {
    if (value < 0 || value > count) {
      setRating(0);
    } else {
      setRating(value);
    }
  };

  const getStars = (count) => {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(i + 1);
    }
    return stars;
  };

  return (
    <>
      {stars.map((index) => (
        <RatingIcon
          key={index}
          index={index}
          rating={rating}
          hoverRating={hoverRating}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onSaveRating={onSaveRating}
          colorStar={colorStar}
        />
      ))}
    </>
  );
};
