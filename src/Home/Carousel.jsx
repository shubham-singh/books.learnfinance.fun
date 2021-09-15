import { useEffect, useState } from "react";
import { carouselData } from "./carousel-data";
import { ReactComponent as LeftIcon } from "../assets/icons/LeftIcon.svg";
import { ReactComponent as RightIcon } from "../assets/icons/RightIcon.svg";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index) => (index + 1) % carouselData.length);
  };

  const previous = () => {
    setIndex((index) => (index === 0 ? 1 : (index - 1) % carouselData.length));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % carouselData.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div
      style={{
        width: "100vw",
        height: "56.25vh",
        position: "relative",
        transition: "all 0.5s ease-out"
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "56.25vh"
        }}
        src={carouselData[index].src}
        alt="carousel"
      />
      <LeftIcon
        className="pointer"
        style={{ position: "absolute", left: "3%", top: "50%" }}
        onClick={previous}
      />
      <RightIcon
        className="pointer"
        style={{ position: "absolute", right: "3%", top: "50%" }}
        onClick={next}
      />
      <a href={carouselData[index].link} target="blank">
        <button className="btn btn-classic shadow carousel-button">
          {carouselData[index].buttonText}
        </button>
      </a>
    </div>
  );
};

export default Carousel;
