import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  // it will run only on first render

  return (
    <>
      <h5>API Data Fetcher using useEffect Hook.</h5>
      <div>
        {loading ? (
          <h2>Loading!⌛....</h2>
        ) : (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DataFetcher;
