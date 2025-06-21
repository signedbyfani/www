"use client";

import { ChevronRightIcon} from "@heroicons/react/20/solid";
export const ButtonGooey = () => {
  return (
    <>
      <div className="wrapper">
        <a href="mailto:imfanindra@gmail.com" className="button">
          Say hello!
          <div className="bubble">
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </div>
        </a>
      </div>

      <svg
        className="absolute hidden"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <style jsx>{`
        .wrapper {
          filter: url("#gooey");
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .button {
          background: #008CFF;
          color: #eee;
          display: inline-flex;
          font-weight: semibold;
          padding: 0 20px 0 20px;
          border-radius: 8px;
          font-size: 1.125rem;
          line-height: 1.5rem;
          height: 56px;
          align-items: center;
        }

        .bubble {
          color: #008CFF;
          z-index: -10;
          display: flex;
          background: #008CFF;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          position: absolute;
          content: "";
          border-radius: 8px;
          transition: transform 0.8s;
          transition-timing-function: bezier(0.2, 0.8, 0.2, 1.2);
          transform: translateX(80%) translateY(0%);
        }

        .button:hover .bubble {
          transform: translateX(210%) translateY(0%);
        }
      `}</style>
    </>
  );
};