import React from "react";
import { EightBitFood } from "../assets";
import ScrollToTop from "react-scroll-to-top";
import YouTube from "react-youtube";

const youtubeOptions = {
  width: 375,
  height: 475,
  playerVars: {
    rel: 0,
    showinfo: 0,
    controls: 1,
    autoplay: 0,
    loop: 1,
  },
};

export default function GamePage() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <div
        className={
          "arcade-container bg-black  w-screen flex flex-col justify-center align-center text-center"
        }
      >
        <h2
          className={"animate-fade-in-down text-white mx-auto -mt-10 text-6xl"}
          style={{ textShadow: "0px 0px 10px #000" }}
        >
          Lo-fi Arcade Lounge
        </h2>
      </div>
      <div
        className={
          "flex flex-col justify-center items-center text-center h-auto bg-black py-10 pb-32"
        }
        style={{ color: "limegreen" }}
      >
        <h1 className={"animate-pulse text-5xl py-10"}>
          Welcome to the Grubspace Mini Arcade
        </h1>
        <div className={"flex flex-row flex-wrap py-6 px-10 my-10"}>
          <div
            className={
              " flex flex-col justify-center items-center h-auto px-10 py-20"
            }
            style={{ width: "45vw", minWidth: 365 }}
          >
            <h5 className={"text-2xl"}>
              Step inside and see what fun food adventures you and the family
              can get into with our Lo-fi Arcade Lounge. Leap over flaming hot
              Cheetos, or blast the hungry hordes of zombie cyan clones in
              Hungry Hordes: Operation Cyan. While stopping to enjoy a game find
              your vibe with the lounge's Lo-fi music selections. Games are
              always free your quarters for another day!
            </h5>
            <h5 className={"text-3xl pt-10"}>
              The arcade is open 24/7, so come on in, have a byte, and enjoy!
            </h5>
          </div>
          <div
            className={"h-auto px-10 py-20"}
            style={{ width: "45vw", minWidth: 365 }}
          >
            <img src={EightBitFood} alt={"8 bit cake"} />
          </div>
        </div>
        <div
          className={
            "bg-black h-auto flex flex-row flex-wrap text-center justify-evenly items-center py-6 px-10 my-10"
          }
          style={{
            color: "limegreen",
            width: "95vw",
            minWidth: 375,
            border: "1px solid limegreen",
            boxShadow: "0px 0px 2rem limegreen",
          }}
        >
          <div className={"p-10"} style={{ width: "30vw", minWidth: 325 }}>
            <h4 className={"text-3xl pb-10"}>Hungry Hordes</h4>
            <p className={"text-xl"}>
              Battle the evil zombie clones of Cyan in the Colosseum of Crunch
              as the heroic Sprinkles Von Donut. Try to make your way from the
              evil colony on Donut_hole 2547 back to earth with with all of your
              sprinkles intact! Fire a barrage of sprinkles and put the evil
              zombie clones out of their misery.{" "}
            </p>
          </div>
          <iframe
            src="https://scratch.mit.edu/projects/451241949/embed"
            allowtransparency="true"
            style={{ boxShadow: "0 0 2rem limegreen", borderRadius: "25px" }}
            title={"hungry hordes"}
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className={
            "bg-black h-auto flex flex-row flex-wrap text-center justify-evenly items-center py-6 px-10 my-10"
          }
          style={{
            color: "limegreen",
            width: "95vw",
            minWidth: 375,
            border: "1px solid limegreen",
            boxShadow: "0px 0px 2rem limegreen",
          }}
        >
          <div className={"p-10"} style={{ width: "30vw", minWidth: 325 }}>
            <h4 className={"text-3xl pb-10"}>Chase H.Q.</h4>
            <p className={"text-xl"}>
              Catch the criminals in the white car and SMASH IT! <br />
              Left/Right - steer
              <br /> Z or Up - accelerate <br /> Spacebar - Change gear <br /> X
              - TURBO!
            </p>
          </div>
          <iframe
            src="https://scratch.mit.edu/projects/73029398/embed"
            title={"chase hq"}
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className={
            "bg-black h-auto flex flex-row flex-wrap text-center justify-evenly items-center py-6 px-10 my-10"
          }
          style={{
            color: "limegreen",
            width: "95vw",
            minWidth: 375,
            border: "1px solid limegreen",
            boxShadow: "0px 0px 2rem limegreen",
          }}
        >
          <div className={"p-10"} style={{ width: "30vw", minWidth: 325 }}>
            <h4 className={"text-3xl pb-10"}>Quench</h4>
            <p className={"text-xl"}>
              ..:::Welcome to Quench! FYI the fire's name is Blazi (bl-A-zz-eee)
              not (bl-ahh-zz-i)! And the raindrops are the Quenchers, who want
              to take over the world! And they hate fire! So that is whats going
              on! XD random story...or maybe its just raining:::..
            </p>
          </div>
          <iframe
            src="https://scratch.mit.edu/projects/72142756/embed"
            title={"quench"}
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className={
            "bg-black h-auto flex flex-row flex-wrap text-center justify-evenly items-center py-6 px-10 my-10"
          }
          style={{
            color: "limegreen",
            width: "95vw",
            minWidth: 375,
            border: "1px solid limegreen",
            boxShadow: "0px 0px 2rem limegreen",
          }}
        >
          <div className={"p-10"} style={{ width: "30vw", minWidth: 325 }}>
            <h4 className={"text-3xl pb-10"}>Alex's Quest</h4>
            <p className={"text-xl"}>
              Click PLAY to start from the beginning of the game. Click levels
              to skip intro. Levels are locked until you beat previous worlds.
              <br />
              --- Controls: <br />
              Arrow keys to move and jump, build up speed to destroy enemies!
            </p>
          </div>
          <iframe
            src="https://scratch.mit.edu/projects/3281531/embed"
            title={"Alex's quest"}
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className={
            "bg-black h-auto flex flex-row flex-wrap text-center justify-evenly items-center py-6 px-10 my-10"
          }
          style={{
            color: "limegreen",
            width: "95vw",
            minWidth: 375,
            border: "1px solid limegreen",
            boxShadow: "0px 0px 2rem limegreen",
          }}
        >
          <div className={"p-10"} style={{ width: "30vw", minWidth: 325 }}>
            <h4 className={"text-3xl pb-10"}>Slither.io</h4>
            <p className={"text-xl"}>
              ★ Control your snake with the mouse.
              <br />
              ★ Collect the food to grow longer.
              <br />
              ★ Don't run into other snakes!
              <br />
              ★ Click or Space to dash (if you have eaten enough)
              <br />
              Press 'L' to toggle lag mode (turns off all the effects)
              <br />
              Press 'N' to toggle player names (helps reduce lag too)
              <br />
            </p>
          </div>
          <iframe
            src="https://scratch.mit.edu/projects/108566337/embed"
            title={"slither.io"}
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className={
            "bg-black h-auto flex flex-row flex-wrap text-center justify-evenly items-center py-6 px-10 my-10"
          }
          style={{
            color: "limegreen",
            width: "95vw",
            minWidth: 375,
            border: "1px solid limegreen",
            boxShadow: "0px 0px 2rem limegreen",
          }}
        >
          <div className={"p-10"} style={{ width: "30vw", minWidth: 325 }}>
            <h4 className={"text-3xl pb-10"}>Fries Machine</h4>
            <p className={"text-xl"}>
              Make some fries!
              <br />
              click the three bottles to activate them. if you spill the
              conveyor belt, you will lose score. the more points you have, the
              faster it goes! you win when you have 25.00 points.
            </p>
          </div>
          <iframe
            src="https://scratch.mit.edu/projects/238423/embed"
            title={"fries machine"}
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className={
            "bg-black h-auto flex flex-row flex-wrap text-center justify-evenly items-center py-6 px-10 my-10"
          }
          style={{
            color: "limegreen",
            width: "95vw",
            minWidth: 375,
            border: "1px solid limegreen",
            boxShadow: "0px 0px 2rem limegreen",
          }}
        >
          <div className={"p-10"} style={{ width: "30vw", minWidth: 325 }}>
            <h4 className={"text-3xl pb-10"}>Paper Minecraft</h4>
            <p className={"text-xl"}>
              Instructions <br />
              - Keys - <br />
              B - Creative mode <br />
              Space - Survaival mode <br />
              0-9 - Change Block Type <br />
              Click - Mine or Place block <br />
              WASD or Cursor keys - Walk/Swim Left, right, up and down <br />E -
              Open Inventory, or a chest/crafting table/furnace if the cursor is
              over one when pressed. E again to close. Space - drop a single
              tile from a stack while dragging or pick up a single block if held
              when mouse clicked.
            </p>
          </div>
          <iframe
            src="https://scratch.mit.edu/projects/10761768/embed"
            title={"paper minecraft"}
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
        <div className={"flex flex-row flex-wrap justify-evenly py-10 my-20 "}>
          <div
            className={
              "flex flex-col justify-center items-center p-16 bg-black"
            }
            style={{
              width: "50vw",
              minWidth: 375,
              border: "2px solid limegreen",
            }}
          >
            <h3 className={"text-5xl my-6"}>Jukebox</h3>
            <h3 className={"text-2xl"}>
              Need some mood music while you explore your favorite recipes? Need
              the perfect vibe for your hungry tribe or romantic evening? Maybe
              it's game time! Whatever your occasion we have just the sounds to
              tantalize your senses. Explore our selection of lo-fi playlists
              and set the mood.{" "}
            </h3>
          </div>
          <div
            className={
              "flex flex-row flex-wrap justify-center mx-auto mt-6 mb-32"
            }
            style={{ width: "50vw", minWidth: 375 }}
          >
            <ul className="slides">
              <input type="radio" name="radio-btn" id="img-1" defaultChecked />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="D-ZJfscsSSs" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-10" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-2" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-2" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube
                    name={"weissman"}
                    opts={youtubeOptions}
                    videoId="Y4uFkcvpi3Y"
                  />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-1" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-3" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-3" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="235mrcqgf6Q" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-2" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-4" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-4" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="-5KAN9_CzSA" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-3" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-5" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-5" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="ipKCkYrYcnI" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-4" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-6" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-btn" id="img-6" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="VNYLHDm7mp8" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-5" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-7" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>
              {/* make three more slides */}
              <input type="radio" name="radio-btn" id="img-7" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="LxbF6I5GoBM" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-6" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-8" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-btn" id="img-8" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="LCiva1Ss3PM" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-7" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-9" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-btn" id="img-9" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="nABXRQ_4V00" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-8" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-10" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-btn" id="img-10" />
              <li className="slide-container">
                <div className="slide">
                  <YouTube opts={youtubeOptions} videoId="5qap5aO4i9A" />{" "}
                </div>
                <div className="nav">
                  <label htmlFor="img-9" className="prev">
                    &#x2039;
                  </label>
                  <label htmlFor="img-1" className="next">
                    &#x203a;
                  </label>
                </div>
              </li>

              <li className="nav-dots">
                <label
                  htmlFor="img-1"
                  className="nav-dot"
                  id="img-dot-1"
                ></label>
                <label
                  htmlFor="img-2"
                  className="nav-dot"
                  id="img-dot-2"
                ></label>
                <label
                  htmlFor="img-3"
                  className="nav-dot"
                  id="img-dot-3"
                ></label>
                <label
                  htmlFor="img-4"
                  className="nav-dot"
                  id="img-dot-4"
                ></label>
                <label
                  htmlFor="img-5"
                  className="nav-dot"
                  id="img-dot-5"
                ></label>
                <label
                  htmlFor="img-6"
                  className="nav-dot"
                  id="img-dot-6"
                ></label>
                <label
                  htmlFor="img-7"
                  className="nav-dot"
                  id="img-dot-7"
                ></label>
                <label
                  htmlFor="img-8"
                  className="nav-dot"
                  id="img-dot-8"
                ></label>
                <label
                  htmlFor="img-9"
                  className="nav-dot"
                  id="img-dot-9"
                ></label>
                <label
                  htmlFor="img-10"
                  className="nav-dot"
                  id="img-dot-10"
                ></label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
