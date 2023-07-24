import React from 'react';

interface ImageViewInterface {
    imageSource: string,
    imageAlt: string,
    title: string
}

const ImageView: React.FC<ImageViewInterface> = ({ imageSource, imageAlt, title }) => {
    return (
      <div className="ImageView">
        <div className="container-lg d-flex justify-content-between">
          <div className="left">
            <h2>{title}</h2>
            <p className="lead">JUNE 26 2020</p>
            <p className="text">
              Nam porta sodales sodales. Aliquam condimentum neque ut dui
              convallis finibus vitae eu mauris. Nunc nisi purus, imperdiet nec
              tempus mattis, luctus vitae dui. Vivamus eget ipsum massa. In
              luctus purus vitae vestibulum posuere. Etiam cursus elit id
              ultrices egestas. Proin in dictum lacus. Aenean sagittis turpis
              vitae erat dignissim mattis. Praesent faucibus venenatis mattis.
              Aliquam erat volutpat. Nunc tincidunt urna leo. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. In hac habitasse platea
              dictumst. Duis sit amet molestie neque, sed congue nisl.
            </p>
          </div>
          <img src={imageSource} alt={imageAlt} />
        </div>
      </div>
    );
}

export { ImageView };