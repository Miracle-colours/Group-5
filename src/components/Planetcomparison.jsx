import React from 'react';
import './planetcomparison.css';

const PlanetsVisualization = () => {
  const planets = [
    {
      name: "Mercury",
      distance: "57.9 million km from Sun",
      img: "https://anurella.github.io/images/planets/mercury.webp",
      alt: "Mercury"
    },
    {
      name: "Venus",
      distance: "108.2 million km from Sun",
      img: "https://anurella.github.io/images/planets/venus.webp",
      alt: "Venus"
    },
    {
      name: "Earth",
      distance: "149.6 million km from Sun",
      img: "https://anurella.github.io/images/planets/earth.jpg",
      alt: "Earth"
    },
    {
      name: "Mars",
      distance: "227.9 million km from Sun",
      img: "https://anurella.github.io/images/planets/mars.webp",
      alt: "Mars"
    },
    {
      name: "Jupiter",
      distance: "778.6 million km from Sun",
      img: "https://anurella.github.io/images/planets/jupiter.webp",
      alt: "Jupiter"
    },
    {
      name: "Saturn",
      distance: "1433.5 million km from Sun",
      img: "https://anurella.github.io/images/planets/saturn.webp",
      alt: "Saturn"
    },
    {
      name: "Uranus",
      distance: "2872.5 million km from Sun",
      img: "https://anurella.github.io/images/planets/uranus.webp",
      alt: "Uranus"
    },
    {
      name: "Neptune",
      distance: "4495.1 million km from Sun",
      img: "https://anurella.github.io/images/planets/neptune.webp",
      alt: "Neptune"
    },
    {
      name: "Pluto",
      distance: "5906.4 million km from Sun",
      img: "https://anurella.github.io/images/planets/pluto.webp",
      alt: "Pluto"
    },
  ];

  return (
    <div className="container">
      <h1 className="main-title">Visualizing the Differences Between Planets</h1>
      <p className="subtitle">
        Each planet in our solar system has unique physical characteristics. 
        Visual comparisons help highlight how vastly different terrestrial planets 
        are from gas giants and ice giants.
      </p>

      <div className="grid">
        {planets.map((planet, index) => (
          <div key={index} className="card">
            <div className="image-wrapper">
              <img src={planet.img} alt={planet.alt} />
            </div>
            <div className="info">
              <p className="planet-name">{planet.name}</p>
              <p className="distance">{planet.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetsVisualization;