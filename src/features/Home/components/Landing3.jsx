import React from "react";
import "../styles/landing3.style.css";

const benefits = [
  {
    id: 1,
    text: "Better visibility",
  },
  {
    id: 2,
    text: "Improved efficiency",
  },
  {
    id: 3,
    text: "Increased productivity",
  },
  {
    id: 4,
    text: "Preventing team overburden",
  },
  { id: 5, text: "Increased team focus" },
  { id: 6, text: "Reduced waste" },
  { id: 7, text: "Flexibility" },
  { id: 8, text: "Improved collaboration" },
  { id: 9, text: "Improved company culture" },
  { id: 10, text: "Cost savings" },
  { id: 11, text: "Acts as a hub for information" },
  { id: 12, text: "Fun to use!" },
];

const Landing3 = () => {
  return (
    <div className="landing3">
      <h1>Discover the Power of Our Products</h1>
      <div className="landing3__benefits">
        <h2 className="landing3__benefits--title">Key Benefits:</h2>
        <div>
          <ul className="landing3__benefits--list">
            {benefits.map((benefit) => (
              <li key={benefit.id}>{benefit.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing3;
