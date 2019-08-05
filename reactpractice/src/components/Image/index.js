import React, { Component } from "react";
import "./style.css";


class Image extends Component {
  handleClick = () => {
    const { selected, id } = this.props;
    if (selected) {
      this.props.resetScore();
    } else {
      this.props.incrementScore(id);
    }
  }

  render() {
    const { id, alt, src } = this.props;
    return (
      <div className="img-container">
        <img
          alt={alt}
          src={src}
          onClick={() => this.handleClick(id)}
        />
      </div>
    );
  }

}

export default Image;


