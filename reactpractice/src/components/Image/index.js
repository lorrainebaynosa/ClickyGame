import React from "react";
import "./style.css";

function Image (props) {
  return (
      <div className="img-container">
        <img key={props.image.key} alt={props.image.name} src={props.image.image} onClick={props.children}
        // <img key={props.image.key} alt={props.image.alt} src={props.image.src} onClick={props.children}
        />
      </div>
  );
}

export default Image;

// const imageComponents = imageData.map(image => <Image key={image.id} alt={image.name} src={image.image} />)

image=alt={image.name} src={image.image} />