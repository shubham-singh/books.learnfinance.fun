import { useEffect, useState } from "react";
import { carouselData } from "./carousel-data";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index % carouselData.length) + 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "56.25vh" }}>
      <img
        style={{ objectFit: "cover", width: "100vw", height: "56.25vh" }}
        src={require(carouselData[index].src)}
        alt="carousel"
      />
    </div>
  );
};

export default Carousel;
