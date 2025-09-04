import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const ottHubRef = useRef(null);
  const raktadutRef = useRef(null);
  const zerodhaRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [ottHubRef.current, raktadutRef.current, zerodhaRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* OTT Hub */}
          <div ref={ottHubRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://github.com/explorerushi/OTT-HUB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/ott-hub.png" alt="OTT Hub App Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://github.com/explorerushi/OTT-HUB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  All Your Favorite OTT Subscriptions in One Place – OTT Hub
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                A MERN stack platform to buy, sell, and manage OTT subscriptions,
                featuring a seller’s marketplace and secure admin panel.
              </p>
            </div>
          </div>

          {/* Other projects */}
          <div className="project-list-wrapper overflow-hidden">
            {/* Raktadut */}
            <div className="project" ref={raktadutRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://raktduth.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/raktaduth.png"
                    alt="Raktadut – Blood Donation Management System"
                  />
                </a>
              </div>
              <h2>
                <a
                  href="https://raktduth.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raktdoot – Blood Donation Management System
                </a>
              </h2>
              <p className="text-white-50 md:text-lg">
              </p>
            </div>

            {/* Zerodha Clone */}
            <div className="project" ref={zerodhaRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://zerodha-frontend-3y57.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/zerodha.png"
                    alt="Zerodha Clone Stock Trading App"
                  />
                </a>
              </div>
              <h2>
                <a
                  href="https://zerodha-frontend-3y57.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zerodha Clone – Stock Trading Platform
                </a>
              </h2>
              <p className="text-white-50 md:text-lg">
                A stock trading clone built with MERN + Firebase, featuring live
                market data, portfolio tracking, and a simulated trading
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
