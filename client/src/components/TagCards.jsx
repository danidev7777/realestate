import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'
import Featured from "./Featured";

const tagColumns = 4;

const TagCard = ({ tag }) => {
  // console.log(tagCards)

  return (
    <Link to={tag.link}>
      <div>
        <div className="relative">
          <img
            className=" rounded-lg w-full h-full"
            src={new URL(`../assets/${tag.image}`, import.meta.url).href}
          />
          <div className="absolute rounded-lg bg-gray-700 top-4 left-4 text-white text-xs px-1">
            {tag.name} <span>{tag.count}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const renderRow = (row, rowIndex, tagCards) => (
  <div key={rowIndex} className="grid grid-cols-4 gap-4 mt-3">
    {row.map((item, colIndex) => (
      <TagCard key={colIndex} tag={item} tagCards={tagCards} />
    ))}
  </div>
);

const renderTags = (tagCards) => {
  console.log("tags", tagCards);

  const rows = [];
  for (let i = 0; i < tagCards.length; i += tagColumns) {
    console.log("tagPath: ", tagCards);
    const tagRow = tagCards.slice(i, i + tagColumns);
    rows.push(renderRow(tagRow, i));
  }
  return rows;
};

const TagCards = ({ tagCards }) => {
  return (
    <>
      <div className="">
        <Featured />
      </div>

      <div className="relative  mt-4 w-3/4 m-auto mt-4">
        <h2 className="text-4xl font-extrabold text-red-600">Browse Homes</h2>
        {renderTags(tagCards)}
      </div>
    </>
  );
};

export default TagCards;
