"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  location: string;
  avatar: string;
  rating: number;
}

interface InfiniteMovingCardsProps {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };

  const handleInteractionStart = () => {
    if (pauseOnHover && scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = "paused";
      setIsPaused(true);
    }
  };

  const handleInteractionEnd = () => {
    if (pauseOnHover && scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = "running";
      setIsPaused(false);
    }
  };

  const togglePause = () => {
    if (scrollerRef.current) {
      if (isPaused) {
        scrollerRef.current.style.animationPlayState = "running";
      } else {
        scrollerRef.current.style.animationPlayState = "paused";
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-6 py-6 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        }`}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-3xl border border-slate-600/50 flex-shrink-0 px-6 py-6 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
            }}
            key={idx}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={togglePause}
            onClick={togglePause}
          >
            <blockquote className="h-full flex flex-col">
              <div className="text-blue-400/30 text-4xl font-serif leading-none mb-3">
                "
              </div>

              <p className="relative z-20 text-sm leading-relaxed text-gray-100 font-normal mb-4 flex-grow">
                {item.quote}
              </p>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs text-gray-400">
                  ({item.rating}.0)
                </span>
              </div>

              <div className="relative z-20 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm mr-3 shadow-lg">
                  {item.avatar}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white leading-tight">
                    {item.name}
                  </span>
                  <span className="text-xs text-blue-300 leading-tight">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-500 leading-tight flex items-center mt-0.5">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-1"></span>
                    {item.location}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .animate-scroll {
          animation: scroll var(--animation-duration, 50s)
            var(--animation-direction, forwards) linear infinite;
        }
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.75rem));
          }
        }
        .scroller {
          --slate-800: #1e293b;
          --slate-900: #0f172a;
        }
      `}</style>
    </div>
  );
};
const EnhancedTestimonialsDemo: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Furfarol has been instrumental in upgrading our school infrastructure. Their commitment to quality construction and timely delivery has made them our trusted partner.",
      name: "St. Francis Secondary School",
      title: "School Administration Board",
      location: "Likuyani Sub-County",
      avatar: "SF",
      rating: 5,
    },
    {
      quote:
        "The construction materials supplied by Furfarol are of exceptional quality. Their team's professionalism exceeded our expectations in our dormitory project.",
      name: "Eshikulu Boys Secondary",
      title: "Board of Management",
      location: "Likuyani Sub-County",
      avatar: "EB",
      rating: 5,
    },
    {
      quote:
        "Working with Furfarol has been a game-changer for our school development projects. Their expertise helped us create better learning environments.",
      name: "Lol Keringet Secondary School",
      title: "Principal's Office",
      location: "Trans Nzoia County",
      avatar: "LK",
      rating: 5,
    },
    {
      quote:
        "Furfarol's commitment to safety and environmental concerns during our construction was remarkable. They delivered high-quality work within budget.",
      name: "Emanyinya Secondary School",
      title: "Project Implementation Committee",
      location: "Vihiga County",
      avatar: "EM",
      rating: 5,
    },
    {
      quote:
        "The team demonstrated exceptional technical quality in renovating our classrooms. Their understanding of community needs made the project seamless.",
      name: "Kapsumbeywet Primary School",
      title: "Head Teacher & Staff",
      location: "Uasin Gishu County",
      avatar: "KP",
      rating: 5,
    },
    {
      quote:
        "From supplies to construction, Furfarol has consistently delivered excellence. Their vision for quality infrastructure aligns with our educational goals.",
      name: "Mobet Primary & Secondary Schools",
      title: "Joint School Committee",
      location: "Uasin Gishu County",
      avatar: "MB",
      rating: 5,
    },
    {
      quote:
        "Furfarol's reliability in material supply and construction services has made them our go-to contractor. Their efficiency speaks volumes about their commitment.",
      name: "St. Monica Secondary School",
      title: "Administration Team",
      location: "Likuyani Sub-County",
      avatar: "SM",
      rating: 5,
    },
    {
      quote:
        "The construction of our new facilities has transformed our learning environment. Their skilled workforce exceeded our expectations completely.",
      name: "Nangili Primary School",
      title: "Parent-Teacher Association",
      location: "Likuyani Sub-County",
      avatar: "NP",
      rating: 5,
    },
    {
      quote:
        "Furfarol's comprehensive approach to construction has made them invaluable partners. Their commitment to long-term value creation is evident in every project.",
      name: "Soysambu Primary School",
      title: "School Management Board",
      location: "Likuyani Sub-County",
      avatar: "SP",
      rating: 5,
    },
    {
      quote:
        "The quality of infrastructure provided has significantly improved our school's capacity. Their professionalism and technical expertise are unmatched.",
      name: "St. Veronica Girls Secondary School",
      title: "Principal & Teaching Staff",
      location: "Likuyani Sub-County",
      avatar: "SV",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:80px_80px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />

      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 text-center mb-16 px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-6 border border-blue-500/20">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm text-blue-300 font-medium">
            5-Star Rated Service
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          What Our
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Partners{" "}
          </span>
          Say
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Discover testimonials from schools and institutions we've proudly
          served across
          <span className="text-blue-300 font-semibold">
            {" "}
            Western Kenya and North Rift Region
          </span>
          . Every project reflects our commitment to educational excellence.
        </p>

        <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>50+ Projects Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>100% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>5+ Years Experience</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="mb-12"
        />
      </div>
    </div>
  );
};

export default EnhancedTestimonialsDemo;
