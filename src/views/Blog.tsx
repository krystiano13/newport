import React from "react";
import { useNavigate } from "react-router";

import { BlogData } from "../components/BlogData";

interface BlogInterface {
  setTitle: (title: string) => void;
}

export const Blog: React.FC<BlogInterface> = ({ setTitle }) => {
  const navigate = useNavigate();
  return (
    <main className="Blog">
      <div className="container-lg">
        <div className="row">
          {BlogData.map((item) => (
            <div
              key={item.id}
              className="col-12 d-flex justify-content-between"
              onClick={() => {
                setTitle(item.title);
                navigate("/blog/page");
              }}
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
