import React from "react";

const Card = () => (
  <div className="card">
    <div className="image-container">
      <img
        src="/image-header-mobile.jpg"
        alt="People in an office"
        className="mobile-image"
      />
      <img
        src="/image-header-desktop.jpg"
        alt="People in an office"
        className="desktop-image"
      />
    </div>

    <div className="content-container">
      <h1>
        Get <span>insights</span> that help your business grow.
      </h1>

      <p className="description">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>

      <div className="stats-container">
        <div>
          <h2>10k+</h2>
          <p>companies</p>
        </div>

        <div>
          <h2>314</h2>
          <p>templates</p>
        </div>

        <div>
          <h2>12M+</h2>
          <p>queries</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
