import React from "react";
import style from "./all-icons.scss";

export default function AllIcons() {
  return (
    <div>
      <section>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233.05 233.05">
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="4"
                height="4"
              >
                <path
                  d="M-1,1 l2,-2
               M0,4 l4,-4
               M3,5 l2,-2"
                ></path>
              </pattern>
            </defs>
            <title>animation</title>
            <path
              className={`${style.orangered}`}
              d="M187 110.786l13.41 10.563-6.912 8.774-13.41-10.563zM39.415 113.403l13.41 10.563-6.913 8.774-13.41-10.563z"
            />
            <circle
              className={`${style.orange} ${style.eye}`}
              cx="116.53"
              cy="123.07"
              r="40.5"
            />
            <circle
              className={`${style.purple} ${style.d3} ${style.eye}`}
              cx="117.68"
              cy="123.07"
              r="18"
            />
            <circle
              className={`${style.eye} ${style.pattern} ${style.d} ${style.d4}`}
              cx="116.53"
              cy="123.07"
              r="16.67"
            />
            <circle
              className={`${style.eye} ${style.white} ${style.d2}`}
              cx="135.68"
              cy="102.93"
              r="7.33"
            />
            <path
              className={`${style.eye} ${style.thic} ${style.d}`}
              d="M116.53 168.32a90.46 90.46 0 0 0 78.39-45.25 90.53 90.53 0 0 0-156.78 0 90.46 90.46 0 0 0 78.39 45.25z"
            />
            <circle
              className={`${style.eye} ${style.white}`}
              cx="124.53"
              cy="122.23"
              r="5.55"
            />
            <path
              className={`${style.d} ${style.lash} ${style.animated} ${style.infinite} ${style.flipInX}`}
              d="M23.97 95.53l14.12 11.12M33.29 87.63l10.24 9.45M110.66 57.15v13.66M95.42 58.33l3.67 13.65M66.75 67.15l9.67 12.38M45.04 79.53l9.49 9.15M55.21 72.44l7.7 10.77M82.42 60.43l3.33 11.55M209.09 95.53l-13.81 11.12M199.97 87.63l-10 9.45M124.53 57.37v13.66M139.34 59.33l-3.58 13.65M164.74 64.84l-9.45 12.38M188.49 79.53l-9.27 9.15M174.8 73.34l-7.52 10.77M149.04 62.43l-3.26 11.55"
            />
          </svg>
        </div>
   
      {/* <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 233.05 233.05"
          ></defs>
          <title>autodidact</title>
          <path
            className={`${}`}"orange juice infinite"
            d="M46.17 195.4h26.19v26.19H46.17z"
          />
          <path
            className={`${}`}"orange juice animated  infinite"
            d="M46.17 195.4h26.19v26.19H46.17z"
          />
          <path
            className={`${}`}"d juice animated infinite"
            d="M69.23 219.43h-19.7l-2.16-38.08h26.19l-4.33 38.08"
          />
          <path
            className={`${}`}"d straw"
            d="M55.06 152.99h5.41v42.41h-5.41zm15.284-23.7l3.993 2.788-14.028 20.086-3.996-2.788zM55.06 150.27l5.26 1.9m-5.26-.46l5.76.81"
          />
          <g></g>
          <path
            className={`${}`}"d pattern"
            d="M137.79 123.86c-2.46 1.89-7.13 8.1-5.25 10.57l44.72 29.72a5.66 5.66 0 0 0 7.91 1.05 5.66 5.66 0 0 0 1.05-7.91l-33.32-37.17c-1.9-2.45-12.65 1.88-15.11 3.74z"
          />
          <rect
            className={`${}`}"orange animated fadeOutDown infinite d2"
            x="53"
            y="125"
            width="12.5"
            height="42"
            rx="6.25"
            ry="6.25"
          />
          <rect
            className={`${}`}"orange animated fadeOutDown infinite"
            x="45"
            y="85"
            width="12.5"
            height="42"
            rx="6.25"
            ry="6.25"
          />
          <circle className={`${}`}"purple brain" cx="60.73" cy="118.85" r="10.16" />
          <g className={`${}`}"brain">
            <path
              className={`${}`}"purple"
              d="M188.83 38.75a13.11 13.11 0 0 0-18.3-5.2 13.1 13.1 0 0 0-8.1-7.24c-.31-.1-.63-.18-.94-.26a13 13 0 0 0-7-5.19q-.61-.19-1.23-.32a13.11 13.11 0 0 0-16.69-3.88 13.32 13.32 0 0 0-1.91 1.22c-6-1.12-17.67-.83-20.08 4.82a13.2 13.2 0 0 0-11.3 5.66 13.06 13.06 0 0 0-6.66 1.5c-3.11 1.63-11 4.65-12 8l-.19.61c-4.88-.2-8.09 8.19-10.52 12.46a13.05 13.05 0 0 0-6.79 1.49C64.06 54 60.34 55 59.28 58.3l-12.81 9.29-.07.21a13 13 0 0 0-.26 6.8 13.14 13.14 0 0 0-1.25 2.72l-.22.64-.49-.17-.18-.07c-6.91-2.15-4.6 7.56-6.75 14.47A13.16 13.16 0 0 0 43 107.4a13.15 13.15 0 0 0 9 13.56l3.76 6.78.21.07a13.16 13.16 0 0 0 15.52-6.39 13 13 0 0 0 1.52-.18 13.19 13.19 0 0 0 2.76 1.22 13 13 0 0 0 10-.91 13.32 13.32 0 0 0 1.45-.88 13.36 13.36 0 0 0 .81 1.87c1.4 2.67 9.1-7.4 11.82-6.21a13.2 13.2 0 0 0 1.33 3.9 13 13 0 0 0 7.71 6.44c.31.1 10.55 6.69 10.87 6.76 1.66 2.48 17.07-1.28 20-.38 3.34 1 13.82-4.86 16.93-6.49l.21-.11c3.24.91 3.11 10.18 6.11 8.6h.06a13 13 0 0 0 6.88.17c1-.25.08 1.89 1 1.39a13.27 13.27 0 0 0 2.78-1.94 13.18 13.18 0 0 0 13-5.48 13.16 13.16 0 0 0 13.1-9.21l2-33.25a13.15 13.15 0 0 0-4.73-14.47l.12-.36.07-.21a13.15 13.15 0 0 0-6.52-15.59 13.25 13.25 0 0 0-.85-2.21l-.25-4.89.07-.21a13 13 0 0 0-.91-10.04z"
            />{" "}
            <path
              className={`${}`}"purple "
              d="M188.83 38.75a13.11 13.11 0 0 0-18.3-5.2 13.1 13.1 0 0 0-8.1-7.24c-.31-.1-.63-.18-.94-.26a13 13 0 0 0-7-5.19q-.61-.19-1.23-.32a13.11 13.11 0 0 0-16.69-3.88 13.32 13.32 0 0 0-1.91 1.22c-6-1.12-17.67-.83-20.08 4.82a13.2 13.2 0 0 0-11.3 5.66 13.06 13.06 0 0 0-6.66 1.5c-3.11 1.63-11 4.65-12 8l-.19.61c-4.88-.2-8.09 8.19-10.52 12.46a13.05 13.05 0 0 0-6.79 1.49C64.06 54 60.34 55 59.28 58.3l-12.81 9.29-.07.21a13 13 0 0 0-.26 6.8 13.14 13.14 0 0 0-1.25 2.72l-.22.64-.49-.17-.18-.07c-6.91-2.15-4.6 7.56-6.75 14.47A13.16 13.16 0 0 0 43 107.4a13.15 13.15 0 0 0 9 13.56l3.76 6.78.21.07a13.16 13.16 0 0 0 15.52-6.39 13 13 0 0 0 1.52-.18 13.19 13.19 0 0 0 2.76 1.22 13 13 0 0 0 10-.91 13.32 13.32 0 0 0 1.45-.88 13.36 13.36 0 0 0 .81 1.87c1.4 2.67 9.1-7.4 11.82-6.21a13.2 13.2 0 0 0 1.33 3.9 13 13 0 0 0 7.71 6.44c.31.1 10.55 6.69 10.87 6.76 1.66 2.48 17.07-1.28 20-.38 3.34 1 13.82-4.86 16.93-6.49l.21-.11c3.24.91 3.11 10.18 6.11 8.6h.06a13 13 0 0 0 6.88.17c1-.25.08 1.89 1 1.39a13.27 13.27 0 0 0 2.78-1.94 13.18 13.18 0 0 0 13-5.48 13.16 13.16 0 0 0 13.1-9.21l2-33.25a13.15 13.15 0 0 0-4.73-14.47l.12-.36.07-.21a13.15 13.15 0 0 0-6.52-15.59 13.25 13.25 0 0 0-.85-2.21l-.25-4.89.07-.21a13 13 0 0 0-.91-10.04z"
            />
            <path
              className={`${}`}"d "
              d="M188.83 38.75a13.11 13.11 0 0 0-18.3-5.2 13.1 13.1 0 0 0-8.1-7.24c-.31-.1-.63-.18-.94-.26a13 13 0 0 0-7-5.19q-.61-.19-1.23-.32a13.11 13.11 0 0 0-16.69-3.88 13.32 13.32 0 0 0-1.91 1.22c-6-1.12-17.67-.83-20.08 4.82a13.2 13.2 0 0 0-11.3 5.66 13.06 -26.94 0 0 0-6.66 1.5c-3.11 1.63-11 4.65-12 8l-.19.61c-4.88-.2-8.09 8.19-10.52 12.46a13.05 13.05 0 0 0-6.79 1.49C64.06 54 60.34 55 59.28 58.3l-12.81 9.29-.07.21a13 13 0 0 0-.26 6.8 13.14 13.14 0 0 0-1.25 2.72l-.22.64-.49-.17-.18-.07c-6.91-2.15-4.6 7.56-6.75 14.47A13.16 13.16 0 0 0 43 107.4a13.15 13.15 0 0 0 9 13.56l3.76 6.78.21.07a13.16 13.16 0 0 0 15.52-6.39 13 13 0 0 0 1.52-.18 13.19 13.19 0 0 0 2.76 1.22 13 13 0 0 0 10-.91 13.32 13.32 0 0 0 1.45-.88 13.36 13.36 0 0 0 .81 1.87c1.4 2.67 9.1-7.4 11.82-6.21a13.2 13.2 0 0 0 1.33 3.9 13 13 0 0 0 7.71 6.44c.31.1 10.55 6.69 10.87 6.76 1.66 2.48 17.07-1.28 20-.38 3.34 1 13.82-4.86 16.93-6.49l.21-.11c3.24.91 3.11 10.18 6.11 8.6h.06a13 13 0 0 0 6.88.17c1-.25.08 1.89 1 1.39a13.27 13.27 0 0 0 2.78-1.94 13.18 13.18 0 0 0 13-5.48 13.16 13.16 0 0 0 13.1-9.21l2-33.25a13.15 13.15 0 0 0-4.73-14.47l.12-.36.07-.21a13.15 13.15 0 0 0-6.52-15.59 13.25 13.25 0 0 0-.85-2.21l-.25-4.89.07-.21a13 13 0 0 0-.91-10.04z"
            />
            <path
              className={`${}`}"braind d "
              d="M152.32 124s1.95-33.79 31.07-41 15.37-3.11 15.37-3.11"
            />
            <path className={`${}`}"braind d " d="M162.65 108.19a137 137 0 0 1 29.78-2" />
            <path
              className={`${}`}"braind d  thic"
              d="M154.85 54.16c-.92.45-2.68 21.09-27.84 27.68S71.87 94.47 70 102.17s-3.42 12.55.54 13.29a28.71 28.71 0 0 1 5.89 1.6"
            />
            <path
              className={`${}`}"braind  thic"
              d="M88.35 48.64s-6.36 14.55-2 18.28m42.84 25.37s-6.36 14.55-2 18.28"
            />
            <path
              className={`${}`}"braind  thic"
              d="M176.14 46.18A17.33 17.33 0 1 1 143 35.88m-23.2 25.66a17.33 17.33 0 0 1 21.7-11.4M46 100.39A17.33 17.33 0 0 1 67.67 89m-1.2-17.41c8.67-4.06 20.44 1.37 24.5 10m90.96-2.99A17.33 17.33 0 0 1 159 70m3.87 41.76a17.33 17.33 0 0 1-22.95-8.62m-16.74-62.66a17.33 17.33 0 0 1-22.95-8.62m1.28 82.88c3.37-9 23.11-16.66 32.08-13.29"
            />
          </g>{" "}
        </svg>
      </div>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233.05 233.05">
          <g className={`${}`}"hand">
            <rect
              className={`${}`}"orangered animated fadeOutDown infinite d2"
              x="161.03"
              y="137.47"
              width="12.5"
              height="42"
              rx="6.25"
              ry="6.25"
            />
            <rect
              className={`${}`}"orangered animated fadeOutDown infinite"
              x="146.53"
              y="113.99"
              width="12.5"
              height="42"
              rx="6.25"
              ry="6.25"
            />
            <path
              className={`${}`}"orangered"
              d="M166.04 73.03l48.838 38.47-38.472 48.838-48.837-38.472z"
            />
            <path
              className={`${}`}"d animated swing infinite"
              d="M95.74 42.3l-8.48-6.94a7.19 7.19 0 0 0-3-2.53 7.27 7.27 0 0 0-7 .57 7.13 7.13 0 0 0-3.36 4.7l-11.36 25L36.17 73a7.28 7.28 0 0 0-4.24 9.35 7.28 7.28 0 0 0 9.35 4.24l12.79-4.8L64.5 77.9v.59l-18.66 7A7.26 7.26 0 0 0 50.9 99.1l12.79-4.8 2.73-1 .06.2-11 4.13a7.28 7.28 0 0 0-4.25 9.37 7.28 7.28 0 0 0 9.35 4.24l12.79-4.8.34-.13a39.36 39.36 0 1 0 22-64z"
            />
            <path
              className={`${}`}"purple animated swing infinite"
              d="M73.1 116.46l32-75.27a8.85 8.85 0 0 0-4.67-11.57 8.85 8.85 0 0 0-11.57 4.67l-32 75.27-4 24.58z"
            />
            <path
              className={`${}`}"d animated swing infinite"
              d="M103.92 67.85s-21 1.4-27.35 5.38S67.2 80.91 71 86.1s11.95 3 11.95 3l23.77-1.11 11.16 19.91"
            />
            <path
              className={`${}`}"d  animated swing infinite"
              d="M193.15 138.81a32.73 32.73 0 0 1-46.15 0l-24.7-24.7a32.73 32.73 0 0 1 0-46.15 32.73 32.73 0 0 1 46.15 0l24.7 24.7a32.73 32.73 0 0 1 0 46.15z"
            />
            <rect
              className={`${}`}"pattern animated swing infinite"
              x="137.49"
              y="83.15"
              width="65.27"
              height="65.27"
              rx="32.64"
              ry="32.64"
              transform="rotate(-45 170.13 115.78)"
            />
          </g>
          <path
            className={`${}`}"d draw"
            d="M54.2 134.52a45.13 45.13 0 0 0-7.2 8.61c-2 3.09-3.48 6.518-3.38 9.91a8.76 8.76 0 0 0 1.38 4.52 12.44 12.44 0 0 0 3.45 3.44 32.57 32.57 0 0 0 9.72 4.16c7 1.91 14.54 2.58 22 3s15 .4 22.1.07l13.22-.58-10.7 8.45c-4.43 3.5-8.78 7.12-13 10.5s-9.19 6.54-14 9.54-9.65 5.9-14.64 5.88 170 0 0 1-15.41 7.55l-.58-.81a170.87 "
          />
        </svg>
      </div>
      <div> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233.05 233.05">
          <defs></defs>
          <path className={`${}`}"d draw pattern" d="M39.04 187.19h120.9v24.4H39.04z" />
          <rect
            className={`${}`}"orangered animated fadeOutDown infinite d2"
            x="45"
            y="137.47"
            width="12.5"
            height="42"
            rx="6.25"
            ry="6.25"
          />
          <rect
            className={`${}`}"orangered animated fadeOutDown infinite"
            x="83"
            y="113.99"
            width="12.5"
            height="42"
            rx="6.25"
            ry="6.25"
          />
          <path
            className={`${}`}"orangered animated pulse infinite d3"
            d="M128.95 61.66a37.72 37.72 0 0 0-26.67 11A37.84 37.84 0 0 0 37.76 99.5c0 20.42 48.93 61.81 59.35 93.92 35.87-19.1 69.68-73.5 69.68-93.92a37.84 37.84 0 0 0-37.84-37.84z"
          />
          <path
            className={`${}`}"d animated pulse infinite"
            d="M130.23 66.78a37.72 37.72 0 0 0-26.67 11A37.84 37.84 0 0 0 39 104.62c0 20.38 49 61.81 59.39 93.92 35.87-19.1 69.68-73.5 69.68-93.92a37.84 37.84 0 0 0-37.84-37.84z"
          />
          <rect
            className={`${}`}"purple animated rubberBand infinite patch"
            x="88.7"
            y="83.71"
            width="51.04"
            height="51.04"
            rx="11.62"
            ry="11.62"
          />
          <path
            className={`${}`}"d animated swing infinite"
            d="M97.29 21.46v13.65M85.05 24.63l3.66 13.66m-35.33-6.83l9.67 12.38m-17.36-6.19l7.69 10.76m18.67-21.68l3.33 11.56m35.78-16.61v13.65m11.81-10.7l-3.59 13.66m34.53-6.83l-9.45 12.38m16.96-6.19l-7.51 10.76m-18.24-21.68l-3.26 11.56m54.61 22.28l-12.78 4.81m5.5-15.15l-11.48 8.24m23.44 15.15l-12.78 4.81m14.18 7.29l-14.04 1.45m18.54 29.91l-14.91-4.48m11.77 13.7l-12.73-3.25m13.87-24.7l-11.95 1.02"
          />
          <path
            className={`${}`}"d animated rubberBand infinite patch"
            d="M80.27 91.14h16.67m-16.67 5.33h16.67m-16.67 5.33h16.67m-16.67 5.34h16.67m-16.67 5.33h16.67m-16.67 5.33h16.67m-16.67 5.34h16.67m32-46.86v14.86m-5.33-14.86v14.86m-5.34-14.86v14.86m-5.33-14.86v14.86m-5.33-14.86v14.86m-5.34-14.86v14.86m-5.33-14.86v14.86m55.28 34.09h-16.66m16.66-5.33h-16.66m16.66-5.34h-16.66m16.66-5.33h-16.66m16.66-5.33h-16.66m16.66-5.34h-16.66m16.66-5.33h-16.66m-32 46.86v-14.86m5.33 14.86v-14.86m5.33 14.86v-14.86m5.34 14.86v-14.86m5.33 14.86v-14.86m5.33 14.86v-14.86m5.34 14.86v-14.86"
          />
        </svg> 
      </div>*/}
      </section>
    </div>
  );
}
