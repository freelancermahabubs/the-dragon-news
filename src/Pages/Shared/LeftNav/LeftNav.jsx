import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RigthCards from "../../News/RigthCards/RigthCards";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      `https://the-news-dragon-server-freelancermahabubs.vercel.app/categories`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h4 className="mt-4">All Category</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <RigthCards />
    </div>
  );
};

export default LeftNav;
