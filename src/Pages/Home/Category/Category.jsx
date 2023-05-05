import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import useTitle from "../../../useTitle";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  useTitle("Category");
  console.log(categoryNews);

  return (
    <div>
      {id && <h2>This Category News: {categoryNews.length}</h2>}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
