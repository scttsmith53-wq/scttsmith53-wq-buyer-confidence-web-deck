"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, Download } from "lucide-react";

const TOTAL_SLIDES = 22;

const slides = Array.from({ length: TOTAL_SLIDES }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");

  return {
    number: index + 1,
    src: `/slides/slide-${num}.png`,
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

  const isFirstSlide = slide.number === 1;
  const isLastSlide = slide.number === slides.length;
  const shouldHideBakedFooter = slide.number >= 2 && slide.number <= 21;
  const isSlide8 = slide.number === 8;
  const isSlide16 = slide.number === 16;

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
          <span>
            Slide {slide.number} of {slides.length}
          </span>
        </div>

        <nav>
          <a href="/downloads/BuyWithConfidence_Webinar_TextEdits_CashLeverage_Final.pptx">
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

          {shouldHideBakedFooter && <div className="middleFooterMask" />}

          {isSlide8 && (
            <div className="slideFixOverlay slide8Fix">
              <div className="slideTextCard slide8Card">
                <div className="slideFixTitle">What This Means for You</div>
                <div className="slideFixBody">
                  <p>The first move isn’t about qualifying.</p>
                  <p>It’s about not ruling yourself out before you ever look at your options.</p>
                </div>
              </div>
            </div>
          )}

          {isSlide16 && (
            <div className="slideFixOverlay slide16Fix">
              <div className="slideTextCard slide16Card">
                <div className="slide16Emoji">⏳</div>
                <div className="slideFixTitle">
                  The smartest purchase isn’t always
                  <br />
                  the one getting the most attention.
                </div>
                <div className="slideFixBody small">Patience is one of the most powerful tools you have.</div>
              </div>
            </div>
          )}

          {isFirstSlide && (
            <div className="slideOverlay firstSlideFooter">
              <div className="footerMainLine">
                Scott Smith • NMLS #2244351 • Citywide Home Loans NMLS #2611 • HomeSmart Realty • Equal Housing Lender
              </div>
              <div className="footerDisclosureLine">
                This presentation is for educational purposes only and is not a loan application, approval, pre-approval, or commitment to lend. All loans are subject to credit approval, property review, underwriting, and program eligibility.
              </div>
            </div>
          )}

          {isLastSlide && (
            <div className="slideOverlay lastSlideCompliance">
              <div className="complianceTitle">Important Disclosure</div>
              <div className="complianceBody">
                This presentation is provided for educational purposes only and should not be considered a loan application, approval, pre-approval, or commitment to lend. Loan terms, program availability, and eligibility are subject to change without notice. All loans are subject to credit approval, income and asset verification, property review, underwriting requirements, and program guidelines. Down payment assistance and other specialty programs may have additional qualifications and are not available to all borrowers. Equal Housing Lender.
              </div>
              <div className="complianceSignature">
                <div>Scott Smith • NMLS #2244351</div>
                <div>Citywide Home Loans • NMLS #2611</div>
                <div>HomeSmart Realty</div>
              </div>
            </div>
          )}
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
          <div className="progressText">Use arrow keys or spacebar to move through the deck.</div>
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
