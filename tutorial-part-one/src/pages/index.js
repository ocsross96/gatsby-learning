import React from "react";
import Link from "gatsby-link";

export default () => (
  <div style={{ color: `tomato` }}>
    <h1>Hello gatsby!</h1>
    <p>What a world</p>
    <img src="https://source.unsplash.com/random/200x200" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Page-2</Link>
      <Link to="/page-3/">Page-3</Link>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
);

