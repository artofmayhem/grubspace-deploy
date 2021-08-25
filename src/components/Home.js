// always used for gsap
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, TimelineLite } from "gsap";



export default function Home() {
  //set up variables to handle animation
  let app = useRef(null);
  let copy = useRef(null);

  //instantiate the timeline
  const timeline = new TimelineLite();

  

  useEffect(() => {
    //set up variables
    // ref={el => app = el} //set ref to app
    const copyElement1 = copy.firstElementChild;
    const copyElement2 = copy.lastElementChild;

    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    timeline.from(copyElement1, 1.5, {
      scaleX: 0,
      ease: Power3.easeOut,
      onComplete: () => {
        TweenMax.to(copyElement1, 2, {
          scaleX: 1,
          ease: Power3.easeOut,
        });
      },
    });
    timeline.from(copyElement2, 1.5, {
      scaleX: 0,
      ease: Power3.easeOut,
      onComplete: () => {
        TweenMax.to(copyElement2, 1, {
          scaleX: 1,
          ease: Power3.easeOut,
        });
      },
    });

    //make sure to console log to ensure it is working
    console.log("1: app", app, "2: copy", copy);
    console.log(
      "1: copyElement1",
      copyElement1,
      "2: copyElement2",
      copyElement2
    );
  }, []); // eslint-disable-line

  return (
      <div className="hero" ref={(el) => (app = el)}>
        <div
          className={
            "home h-screen w-screen flex flex-col justify-center align-center"
          }
          ref={(el) => (copy = el)}
        >
          <div className={"flex flex-col justify-center align-center"}>
            <span className={"text-white mx-auto mt-24 text-6xl"}>Grubspace</span>
            <h3 className={"text-white my-8 mx-auto text-2xl"}>
              Choose from thousands of recipes
            </h3>
          </div>
          <div className="flex flex-col justify-center align-center">
            <Link
              className={"text-yellow-500 my-8 mx-auto text-2xl"}
              to={"recipes"}
            >
              <h2>Get started today</h2>
            </Link>
            <p className={"text-gray-500 my-8 mx-auto text-2xl"}>
              Powered by Spoonacular
            </p>
          </div>
        </div>
        
    </div>
  );
}

// import React from 'react';
// import { Slide } from 'react-slideshow-image';

// const slideImages = [
//   'images/slide_2.jpg',
//   'images/slide_3.jpg',
//   'images/slide_4.jpg'
// ];

// const Slideshow = () => {
//     return (
//       <div>
//         <Slide easing="ease">
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//               <span>Slide 3</span>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     )
// };

// export default Slideshow;
