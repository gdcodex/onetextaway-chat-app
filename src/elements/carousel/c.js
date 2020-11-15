import React, { useState, useEffect, useCallback } from "react";

import "./carousel.css";

const Carousel = ({ Irray }) => {
  const [current, setcurrent] = useState(100);
  const next = useCallback(() => {
    setcurrent((c) => (c === 300 ? 0 : c + 100));
  }, [Irray.length]);
  const goTo = (i) => {
    setcurrent((i)*100);
  };
  let x;
  useEffect(() => {
    x = setTimeout(() => {
      next();
    }, 3000);
  });
  if (!Array.isArray(Irray) || Irray.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="carousel-container">
        <div
          id="slider"
          style={{ transform: `translateX(-${current}vw)`,transitionDuration:`${current===0?"0s":"0.5s"}` }}
          className="carousel-slider"
        >
          {Irray.map((e, i) => 
            <>
              <img
                key={"c-" + i}
                src={e}
                className={`carousel-image ${current===i*100?"active":""}`}
                id={"pic" + i}
              />
            </>
          )}
        </div>
        <div className="indicator">
          <span
            className={`${current === 0 ? "iac" : ""}`}
            onClick={() => {
              clearTimeout(x);
              goTo(0);
            }}
          >
            A
          </span>
          <span
            className={`${current === 100 ? "iac" : ""}`}
            onClick={() => {
              clearTimeout(x);
              goTo(1);
            }}
          >
            B
          </span>
          <span
            className={`${current === 200 ? "iac" : ""}`}
            onClick={() => {
              clearTimeout(x);
              goTo(2);
            }}
          >
            C
          </span>
          <span
            className={`${current === 300 ? "iac" : ""}`}
            onClick={() => {
              clearTimeout(x);
              goTo(3);
            }}
          >
            D
          </span>
        </div>
      </section>
    </>
  );
};
export default Carousel;
