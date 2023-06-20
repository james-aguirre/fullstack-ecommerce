import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

export default function Carousel() {
  const [activeIndex, setIndex] = useState(0);
  const images = [
    {
      id: 0,
      src: 'https://prod.assets.earlygamecdn.com/images/Valorant-Spectrum-Skin-Collection.jpg?mtime=1635261340',
    },
    {
      id: 1,
      src: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  function handleNextClick() {
    setIndex((activeIndex + 1) % images.length);
  }
  function handlePreviousClick() {
    setIndex((activeIndex - 1 + images.length) % images.length);
  }
  return (
    <>
      <div className="carousel-container">
        <PrevButton onCustomClick={handlePreviousClick} />
        <div className="carousel-image-container">
          <img
            src={images[activeIndex].src}
            className="carousel-image"
            alt="pokemon"
          />
        </div>
        <NextButton onCustomClick={handleNextClick} />
      </div>
    </>
  );
}

function NextButton({ onCustomClick }) {
  return (
    <div className="carousel-control">
      <FaChevronRight onClick={onCustomClick} />
    </div>
  );
}

function PrevButton({ onCustomClick }) {
  return (
    <div className="carousel-control">
      <FaChevronLeft onClick={onCustomClick} />
    </div>
  );
}
