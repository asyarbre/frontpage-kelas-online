import React from "react";
import propTypes from "prop-types";
import IconStar from "public/images/icon-star.svg";

export default function Star({ classname, value, height, width }) {
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        key={`star-${index}`}
        className="star"
        style={{ left: index * width, height: height, width: width }}
      />
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        key={`starPlaceholder-${index}`}
        className="star placeholder"
        style={{ left: index * width, height: height, width: width }}
      />
    );
  }

  return (
    <div className={["stars", classname].join(" ")} style={{ height: height }}>
      {starPlaceholder}
      {star}
    </div>
  );
}

Star.propTypes = {
  classname: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
};
