import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://live.staticflickr.com/5497/12606475325_03fb9d694d_b.jpg",
    altText: "Air Jordan 1",
    caption: "Air Jordan 1",
    key: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1614689540269-7f9315660d59?w=800\u0026auto=format\u0026fit=crop\u0026q=60\u0026ixlib=rb-4.0.3\u0026ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMGZvcmNlJTIwMXxlbnwwfHwwfHx8MA%3D%3D",
    altText: "Air Force 1",
    caption: "Air Force 1",
    key: 2,
  },
  {
    src: "https://live.staticflickr.com/5229/5612136011_9137f234c0.jpg",
    altText: "Kobe 6",
    caption: "Kobe 6",
    key: 3,
  },
];

function Home(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption className="Carousel-text" captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
        <div className="Home-title">
            <h1>SOLEMATCH</h1>
        </div>
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
