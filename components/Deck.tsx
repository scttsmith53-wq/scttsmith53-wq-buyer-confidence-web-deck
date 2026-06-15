"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, StickyNote, X } from "lucide-react";
import { imageBriefs, slides, type Card, type Slide } from "@/data/slides";

function imageStyle(key?: string) {
  if (!key) return {};
  if (key.includes(".")) return { backgroundImage: `url(/assets/${key})` };
  return {};
}

function Visual({ image, className = "" }: { image?: string; className?: string }) {
  const brief = image ? imageBriefs[image] || image : "Image placeholder";
  return (
    <div className={`visual ${className}`} style={imageStyle(image)}>
      {!image?.includes(".") && <span>{brief}</span>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="slideFooter">
      <span>Scott</span><span>•</span><span>NMLS #2244351</span><span>•</span>
      <span>Citywide Home Loans NMLS #2611</span><span>•</span><span>Equal Housing Lender</span><span>•</span>
      <span>Smith Approves Me</span>
    </footer>
  );
}

function CardView({ card, large = false }: { card: Card; large?: boolean }) {
  return (
    <article className={`infoCard ${large ? "largeCard" : ""}`}>
      <Visual image={card.image} />
      <div className="infoCardBody">
        {card.number && <div className="cardNumber">{card.number}</div>}
        <h3>{card.title}</h3>
        {card.subtitle && <p>{card.subtitle}</p>}
      </div>
    </article>
  );
}

function renderSlide(slide: Slide) {
  switch (slide.type) {
    case "title":
      return <section className="slide dark titleSlide"><div><h1>{slide.title}</h1><div className="goldRule" /><p className="script">{slide.subtitle}</p><p className="support">{slide.kicker}</p></div><div><Visual image={slide.image} className="circleVisual" /><p className="buyConfidence">Buy With Confidence</p></div><Footer /></section>;
    case "portraits":
      return <section className="slide light"><div className="slideHeader"><h2>{slide.title}</h2><p className="chatPrompt">{slide.prompt}</p></div><div className="grid four">{slide.cards.map((card) => <CardView key={card.title} card={card} />)}</div><p className="closingLine">{slide.closing}</p><Footer /></section>;
    case "threeGoal":
      return <section className="slide light"><div className="slideHeader"><h2>{slide.title}</h2></div><div className="grid three">{slide.cards.map((card) => <CardView key={card.title} card={card} large />)}</div><Footer /></section>;
    case "overview":
      return <section className="slide dark"><div className="slideHeader"><h2>{slide.title}</h2></div><div className="grid five">{slide.cards.map((card) => <CardView key={card.number} card={card} />)}</div><Footer /></section>;
    case "divider":
      return <section className="slide splitDivider"><div className="dividerCopy"><p className="partLabel">{slide.part}</p><h1>{slide.title}</h1><div className="goldRule" /><p>{slide.subtitle}</p></div>{slide.image && <Visual image={slide.image} className="dividerVisual" />}<Footer /></section>;
    case "split":
      return <section className="slide light splitSlide"><Visual image={slide.imageLeft} className="largeVisual" /><div className="contentPanel"><Visual image={slide.imageRight} className="wideVisual" /><h2>{slide.title}</h2><ul>{slide.bullets.map((item) => <li key={item}>{item}</li>)}</ul></div><Footer /></section>;
    case "story":
      return <section className="slide light storySlide"><div><h2>{slide.title}</h2><div className="goldRule" /><p>{slide.body}</p>{slide.callout && <p className="goldText">{slide.callout}</p>}</div><Visual image={slide.image} className="largeVisual" /><Footer /></section>;
    case "symbol":
      return <section className="slide light symbolSlide"><div><h2>{slide.title}</h2><div className="goldRule" /><p>{slide.body}</p><p className="goldText">{slide.callout}</p></div><Visual image={slide.image} className="largeVisual" /><Footer /></section>;
    case "cards3":
      return <section className="slide light"><div className="slideHeader"><h2>{slide.title}</h2></div><div className="grid three">{slide.cards.map((card) => <CardView key={card.title} card={card} large />)}</div>{slide.bottomLine && <p className="closingLine">{slide.bottomLine}</p>}<Footer /></section>;
    case "cards4":
      return <section className="slide light"><div className="slideHeader"><h2>{slide.title}</h2></div><div className="grid four">{slide.cards.map((card) => <CardView key={card.title} card={card} />)}</div>{slide.bottomLine && <p className="closingLine">{slide.bottomLine}</p>}<Footer /></section>;
    case "scorecard":
      return <section className="slide light scorecardSlide"><div><h2>{slide.title}</h2><div className="goldRule" /><h3>{slide.headline}</h3><p>{slide.body}</p></div><Visual image={slide.image} className="largeVisual" /><Footer /></section>;
    case "nextStep":
      return <section className="slide light nextStepSlide"><div><h2>{slide.title}</h2><div className="goldRule" /><p>{slide.body}</p><div className="nextItems">{slide.items.map((item) => <div key={item.title}><strong>{item.title}</strong><span>{item.body}</span></div>)}</div></div><Visual image={slide.image} className="largeVisual" /><Footer /></section>;
    case "qa":
      return <section className="slide light qaSlide"><Visual image={slide.image} className="largeVisual" /><div><h1>{slide.title}</h1><div className="goldRule" /><p>{slide.body}</p></div><Footer /></section>;
  }
}

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const slide = slides[index];
  const currentSlide = useMemo(() => renderSlide(slide), [slide]);

  function next() { setIndex((value) => Math.min(value + 1, slides.length - 1)); }
  function previous() { setIndex((value) => Math.max(value - 1, 0)); }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === " ") next();
      if (event.key === "ArrowLeft") previous();
      if (event.key.toLowerCase() === "n") setNotesOpen((open) => !open);
      if (event.key.toLowerCase() === "f") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
      if (event.key === "Escape") setNotesOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="deckShell">
      {currentSlide}
      <nav className="deckNav"><button onClick={previous} aria-label="Previous slide"><ChevronLeft /></button><span>{index + 1} / {slides.length}</span><button onClick={next} aria-label="Next slide"><ChevronRight /></button></nav>
      <div className="topBar"><button onClick={() => setNotesOpen(true)}><StickyNote size={16} /> Notes</button><button onClick={() => { if (!document.fullscreenElement) document.documentElement.requestFullscreen(); else document.exitFullscreen(); }}><Maximize size={16} /> Fullscreen</button><a href="/api/logout">Logout</a></div>
      {notesOpen && <aside className="notesPanel"><button className="closeButton" onClick={() => setNotesOpen(false)}><X /></button><p className="eyebrow">Speaker Notes</p><h3>{slide.title}</h3><p>{slide.speakerNotes}</p></aside>}
    </main>
  );
}
