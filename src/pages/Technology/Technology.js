import React, { useState } from "react";
import Classes from "./Technology.module.css";
import img1 from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import img1s from "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
import img2s from "../starter-code/assets/technology/image-spaceport-landscape.jpg";
import img2 from "../starter-code/assets/technology/image-spaceport-portrait.jpg";
import img3s from "../starter-code/assets/technology/image-space-capsule-landscape.jpg";
import img3 from "../starter-code/assets/technology/image-space-capsule-portrait.jpg";
const Technology = () => {
  const [vehicle, setVehical] = useState(true);
  const Vehicleactive = () => {
    setVehical(true);
    setspaceport(false);
    setcapsole(false);
  };
  const [Spaceport, setspaceport] = useState(false);
  const spaceportactive = () => {
    setVehical(false);
    setspaceport(true);
    setcapsole(false);
  };
  const [capsole, setcapsole] = useState(false);
  const capsoleactive = () => {
    setVehical(false);
    setspaceport(false);
    setcapsole(true);
  };
  return (
    <div className={Classes.bg}>
      <h1>
        <span>03</span> SPACE LAUNCH 101
      </h1>
      {vehicle ? (
        <div className={Classes.main}>
          <div className={Classes.btn}>
            <button
              onClick={Vehicleactive}
              className={vehicle ? `${Classes.active}` : null}
            >
              1
            </button>
            <button
              onClick={spaceportactive}
              className={Spaceport ? `${Classes.active}` : null}
            >
              2
            </button>
            <button
              onClick={capsoleactive}
              className={capsole ? `${Classes.active}` : null}
            >
              3
            </button>
          </div>
          <div className={Classes.ctx}>
            <p>THE TERMINOLOGY…</p>
            <h1>LAUNCH VEHICLE</h1>
            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
          <div className={Classes.image}>
            <img className={Classes.imgdesk} src={img1} alt="" />
            <img className={Classes.imgmbl} src={img1s} alt="" />
          </div>
        </div>
      ) : Spaceport ? (
        <div className={Classes.main}>
          <div className={Classes.btn}>
            <button
              onClick={Vehicleactive}
              className={vehicle ? `${Classes.active}` : null}
            >
              1
            </button>
            <button
              onClick={spaceportactive}
              className={Spaceport ? `${Classes.active}` : null}
            >
              2
            </button>
            <button
              onClick={capsoleactive}
              className={capsole ? `${Classes.active}` : null}
            >
              3
            </button>
          </div>
          <div className={Classes.ctx}>
            <p>THE TERMINOLOGY…</p>
            <h1>SPACEPORT</h1>
            <p>
              A spaceport or cosmodrome is a site for launching (or receiving)
              spacecraft, by analogy to the seaport for ships or airport for
              aircraft. Based in the famous Cape Canaveral, our spaceport is
              ideally situated to take advantage of the Earth’s rotation for
              launch.
            </p>
          </div>
          <div className={Classes.image}>
            <img className={Classes.imgdesk} src={img2} alt="" />
            <img className={Classes.imgmbl} src={img2s} alt="" />
          </div>
        </div>
      ) : capsole ? (
        <div className={Classes.main}>
          <div className={Classes.btn}>
            <button
              onClick={Vehicleactive}
              className={vehicle ? `${Classes.active}` : null}
            >
              1
            </button>
            <button
              onClick={spaceportactive}
              className={Spaceport ? `${Classes.active}` : null}
            >
              2
            </button>
            <button
              onClick={capsoleactive}
              className={capsole ? `${Classes.active}` : null}
            >
              3
            </button>
          </div>
          <div className={Classes.ctx}>
            <p>THE TERMINOLOGY…</p>
            <h1>SPACE CAPSULE</h1>
            <p>
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </p>
          </div>
          <div className={Classes.image}>
            <img className={Classes.imgdesk} src={img3} alt="" />
            <img className={Classes.imgmbl} src={img3s} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Technology;
