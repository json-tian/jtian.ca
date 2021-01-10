import React, { Component } from "react";
import "./project.css";

class Portfolio extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="spanning">
        <img className="image" src={data.imageURL}></img>
        <div className="desc">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <div className="links">
            <a
              href={data.linksURL[0]}
              className={data.linksICON[0]}
              target="_blank"
            />
            <a
              href={data.linksURL[1]}
              className={data.linksICON[1]}
              target="_blank"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
