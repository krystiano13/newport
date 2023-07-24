import React from "react";
import { GalleryData } from "../components/GalleryData";
import { ImageView } from "../components/ImageView";

export const Gallery = () => {
  const [isViewVisible, setIsViewVisible] = React.useState<boolean>(false);
  const [img, setImg] = React.useState<string>("");
  const [alt, setAlt] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");

  React.useEffect(() => setIsViewVisible(false), []);

  const handleShowImageView = (img: string, title: string): void => {
    setImg(img);
    setAlt(title);
    setTitle(title);
    setIsViewVisible(true);
  };

  return (
    <main className="gallery">
      {isViewVisible && (
        <ImageView imageAlt={alt} imageSource={img} title={title} />
      )}

      <div className="container-lg">
        <div className="row">
          {GalleryData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-12">
              <img
                onClick={() => handleShowImageView(item.img, item.title)}
                src={item.img}
                alt={item.title}
              />
              <p className="lead">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
