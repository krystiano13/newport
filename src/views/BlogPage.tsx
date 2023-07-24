import React from "react";
import { BlogData } from "../components/BlogData";

const BlogPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <main className="BlogPage container-lg">
      <div className="row">
        <aside className="col-lg-2 col-md-12">
          <h2 className="title">{title}</h2>
          <p className="lead">JUNE 26 2020</p>
        </aside>
        <article className="col-lg-8 col-md-12">
          <p>
            Nunc at orci aliquet, ornare ex at, dignissim lacus. Aenean ipsum
            justo, maximus eget maximus vel, efficitur ut dui. Donec sit amet mi
            non tellus tempus tempor et eget diam. Proin mollis suscipit urna,
            at facilisis sapien pellentesque sed. Maecenas at risus ultrices,
            tempus libero non, lacinia turpis. Donec ac sapien quis enim
            vestibulum fermentum rutrum sed urna. Etiam sit amet lectus ut
            libero porta tincidunt a sed ex. Ut nibh purus, blandit ut suscipit
            eu, pharetra quis libero. Donec congue dapibus odio, at lobortis
            ligula pharetra eu. Aenean sit amet nunc nec massa cursus bibendum
            nec nec quam. Quisque quis faucibus justo. Proin eget felis semper,
            accumsan orci eu, tristique turpis.
          </p>
          <p>
            Nulla lacinia efficitur auctor. Nulla felis erat, fermentum quis
            volutpat vitae, tristique et nunc. Nullam finibus dui diam, quis
            hendrerit sem consectetur sed. Maecenas tempus et augue id molestie.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Curabitur auctor massa eros, vitae euismod
            lorem consectetur id. Curabitur condimentum viverra lacus, in
            laoreet odio dapibus in. Praesent in dignissim risus. Ut vitae porta
            augue. Praesent vitae sem elit. In egestas fermentum mi, eget
            maximus tellus tristique ut. Phasellus euismod vel mi at dapibus.
            Nullam dignissim, tellus sed volutpat accumsan, lectus urna feugiat
            sem, eu bibendum nulla lorem eget nunc. Maecenas lobortis convallis
            quam non vestibulum.
          </p>
        </article>
        <aside className="col-lg-2 col-md-12">
          {BlogData.map((item) => (
            <div className="article">
              <h3 className="text-end">{item.title}</h3>
              <p className="text-end">JUNE 26 2020</p>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
};

export { BlogPage };
