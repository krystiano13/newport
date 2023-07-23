import React from "react";

import { BlogData } from "../components/BlogData";

export const Blog = () => {
  return (
    <main className="Blog">
      <div className="container-lg">
        <div className="row">
          {BlogData.map((item) => (
            <div
              key={item.id}
              className="col-12 d-flex justify-content-between"
            >
              <div className="title">
                <h2>{item.title}</h2>
                <p>JUNE 26 2020</p>
              </div>
              <article>{item.text}</article>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
