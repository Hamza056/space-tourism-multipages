import React, { useState } from "react";
import Classes from "./Crew.module.css";
import img1 from "../starter-code/assets/crew/image-douglas-hurley.png";
import img2 from "../starter-code/assets/crew/image-mark-shuttleworth.png";
import img3 from "../starter-code/assets/crew/image-victor-glover.png";
import img4 from "../starter-code/assets/crew/image-anousheh-ansari.png";
const Crew = () => {
  const [Doglas, setDoglas] = useState(true);
  const Doglasactive = () => {
    setDoglas(true);
    setmark(false);
    setVictor(false);
    setAnousheh(false);
  };
  const [Mark, setmark] = useState(false);
  const Markactive = () => {
    setmark(true);
    setDoglas(false);
    setVictor(false);
    setAnousheh(false);
  };
  const [victor, setVictor] = useState(false);
  const Victoractive = () => {
    setVictor(true);
    setmark(false);
    setDoglas(false);
    setAnousheh(false);
  };
  const [Anousheh, setAnousheh] = useState(false);
  const Anoushehactive = () => {
    setAnousheh(true);
    setVictor(false);
    setmark(false);
    setDoglas(false);
  };
  return (
    <div className={Classes.bg}>
      <h1>
        <span>02</span>meet your crew
      </h1>
      {Doglas ? (
        <div className={Classes.main}>
          <div className={Classes.ctx}>
            <h2>Commander</h2>
            <h1>Douglas Hurley</h1>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
            <div className={Classes.btns}>
              <button
                onClick={Doglasactive}
                className={Doglas ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Markactive}
                className={Mark ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Victoractive}
                className={victor ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Anoushehactive}
                className={Anousheh ? `${Classes.active}` : null}
              ></button>
            </div>
          </div>
          <div>{Doglas ? <img src={img1} alt="" /> : null}</div>
        </div>
      ) : Mark ? (
        <div className={Classes.main}>
          <div className={Classes.ctx}>
            <h2>Mission Specialist </h2>
            <h1>MARK SHUTTLEWORTH</h1>
            <p>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
            <div className={Classes.btns}>
              <button
                onClick={Doglasactive}
                className={Doglas ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Markactive}
                className={Mark ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Victoractive}
                className={victor ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Anoushehactive}
                className={Anousheh ? `${Classes.active}` : null}
              ></button>
            </div>
          </div>
          <div>
            {Doglas ? (
              <img src={img1} alt="" />
            ) : Mark ? (
              <img src={img2} />
            ) : null}
          </div>
        </div>
      ) : victor ? (
        <div className={Classes.main}>
          <div className={Classes.ctx}>
            <h2>PILOT </h2>
            <h1>Victor Glover</h1>
            <p>
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
            <div className={Classes.btns}>
              <button
                onClick={Doglasactive}
                className={Doglas ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Markactive}
                className={Mark ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Victoractive}
                className={victor ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Anoushehactive}
                className={Anousheh ? `${Classes.active}` : null}
              ></button>
            </div>
          </div>
          <div>
            {Doglas ? (
              <img src={img1} alt="" />
            ) : Mark ? (
              <img src={img2} />
            ) : victor ? (
              <img src={img3} />
            ) : null}
          </div>
        </div>
      ) : Anousheh ? (
        <div className={Classes.main}>
          <div className={Classes.ctx}>
            <h2>Flight Engineer </h2>
            <h1>Anousheh Ansari</h1>
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
            <div className={Classes.btns}>
              <button
                onClick={Doglasactive}
                className={Doglas ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Markactive}
                className={Mark ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Victoractive}
                className={victor ? `${Classes.active}` : null}
              ></button>
              <button
                onClick={Anoushehactive}
                className={Anousheh ? `${Classes.active}` : null}
              ></button>
            </div>
          </div>
          <div>
            {Doglas ? (
              <img src={img1} alt="" />
            ) : Mark ? (
              <img src={img2} />
            ) : victor ? (
              <img src={img3} />
            ) : Anousheh ? (
              <img src={img4} />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Crew;
