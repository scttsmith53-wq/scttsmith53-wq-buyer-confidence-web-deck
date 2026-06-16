"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, Download } from "lucide-react";

const TOTAL_SLIDES = 22;

const slides = Array.from({ length: TOTAL_SLIDES }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return {
    number: index + 1,
    src: `/slides/slide-${num}.jpg`,
    alt: `Buyer Confidence Webinar slide ${index + 1}`
  };
});

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const progressWidth = useMemo(
    () => `${((index + 1) / slides.length) * 100}%`,
    [index]
  );

  function next() {
    setIndex((value) => Math.min(value + 1, slides.length - 1));
  }

  function previous() {
    setIndex((value) => Math.max(value - 1, 0));
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        next();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      }
      if (event.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="deckPage">
      <div className="topBar">
        <div>
          <strong>Buyer Confidence Webinar</strong>
          <span>Slide {slide.number} of {slides.length}</span>
        </div>

        <nav>
          <a href="/downloads/BuyWithConfidence_Webinar_Reworded_Aligned_Final_v3.pptx">
            <Download size={16} />
            PPT
          </a>

          <button onClick={toggleFullscreen}>
            <Maximize size={16} />
            Fullscreen
          </button>
        </nav>
      </div>

      <section className="slideStage">
        <button className="sideButton left" onClick={previous} aria-label="Previous slide">
          <ChevronLeft size={34} />
        </button>

        <div className="slideCanvas">
          <img src={slide.src} alt={slide.alt} className="slideImage" />
        </div>

        <button className="sideButton right" onClick={next} aria-label="Next slide">
          <ChevronRight size={34} />
        </button>
      </section>

      <div className="bottomControls">
        <button onClick={previous}>
          <ChevronLeft size={20} />
          Previous
        </button>

        <div className="progressWrap">
          <div className="progressText">
            Use arrow keys or spacebar to move through the deck.
          </div>
          <div className="progressTrack">
            <div className="progressFill" style={{ width: progressWidth }} />
          </div>
        </div>

        <button onClick={next}>
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
}
