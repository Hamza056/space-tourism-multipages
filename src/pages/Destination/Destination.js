import React, { useState } from "react";
import Classes from "./Destination.module.css";
import img1 from "../starter-code/assets//destination/Bitmap.svg";
import img2 from "../starter-code/assets//destination/Bitmap1.svg";
import img3 from "../starter-code/assets/destination/Bitmap2.svg";
import img4 from "../starter-code/assets/destination/Bitmap4.svg";
// import destinations from "../starter-code/data.json";
const Destination = () => {
  //   const [planets] = useState(destinations);
  //   const [Value, setValue] = useState(0);
  //   const { name, images, description, distance, travel } =
  //     planets.destinations[Value];

  const [Moon, setMoon] = useState(true);
  const Moonactive = () => {
    setMoon(true);
    setMars(false);
    setEuropa(false);
    setTitan(false);
  };
  const [Mars, setMars] = useState(false);
  const Marsactive = () => {
    setMars(true);
    setMoon(false);
    setEuropa(false);
    setTitan(false);
  };
  const [europa, setEuropa] = useState(false);
  const EuropaActive = () => {
    setEuropa(true);
    setMars(false);
    setMoon(false);
    setTitan(false);
  };
  const [titan, setTitan] = useState(false);
  const titanActive = () => {
    setTitan(true);
    setEuropa(false);
    setMars(false);
    setMoon(false);
  };
  return (
    <div className={Classes.Maindes}>
      <section>
        <h1>
          {" "}
          <span>01</span> pick your destination
        </h1>
        <div className={Classes.contain}>
          <div className={Classes.img}>
            {Moon ? (
              <img className={Classes.rotate} src={img1} alt="" />
            ) : Mars ? (
              <img className={Classes.rotate} src={img2} alt="" />
            ) : europa ? (
              <img className={Classes.rotate} src={img3} alt="" />
            ) : titan ? (
              <img className={Classes.rotate} src={img4} alt="" />
            ) : null}
          </div>
          <div className={Classes.description}>
            <ul>
              <li
                className={Moon ? `${Classes.border}` : null}
                onClick={Moonactive}
              >
                Moon
              </li>
              <li
                className={Mars ? `${Classes.border}` : null}
                onClick={Marsactive}
              >
                Mars
              </li>
              <li
                className={europa ? `${Classes.border}` : null}
                onClick={EuropaActive}
              >
                europa
              </li>
              <li
                className={titan ? `${Classes.border}` : null}
                onClick={titanActive}
              >
                titan
              </li>
            </ul>

            {Moon ? (
              <div className={Classes.planet}>
                <h1>Moon</h1>
                <p>
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <div className={Classes.line}></div>
                <div className={Classes.about}>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h3>225 MIL. km</h3>
                  </div>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h3> 3 days</h3>
                  </div>
                </div>
              </div>
            ) : Mars ? (
              <div className={Classes.planet}>
                <h1>Mars</h1>
                <p>
                  Don’t forget to pack your hiking boots. You’ll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It’s two and a half times the size of Everest!
                </p>
                <div className={Classes.line}></div>
                <div className={Classes.about}>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h3>225 MIL. km</h3>
                  </div>
                  <div>
                    <p>Est. travel time</p>
                    <h3>9 months</h3>
                  </div>
                </div>
              </div>
            ) : europa ? (
              <div className={Classes.planet}>
                <h1>europa</h1>
                <p>
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin.
                </p>
                <div className={Classes.line}></div>
                <div className={Classes.about}>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h3>628 MIL. km</h3>
                  </div>
                  <div>
                    <p>Est. travel time</p>
                    <h3>3 years</h3>
                  </div>
                </div>
              </div>
            ) : titan ? (
              <div className={Classes.planet}>
                <h1>TITAN</h1>
                <p>
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </p>
                <div className={Classes.line}></div>
                <div className={Classes.about}>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <h3>1.6 BIL. km</h3>
                  </div>
                  <div>
                    <p>Est. travel time</p>
                    <h3>7 years</h3>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
