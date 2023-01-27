import {
  GiConvergenceTarget,
  GiMailedFist,
  GiSlashedShield,
  GiRun,
} from "react-icons/gi";
import avatar from "./img/avatar.png";
import fight from "./img/fight.png";
import def from "./img/def.png";
import run from "./img/run.png";

export function App() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h2 className="text-xl">TailwindCSS</h2>
            <ul className="flex items-center">
              <li>
                <GiConvergenceTarget className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-sky-300 to-blue-400 text-white px-4 py-2 rounded-md ml-4"
                  href="https://youtu.be/k-Pi5ZMxHWY?t=1998"
                >
                  Suprise
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-sky-500 font-medium md:text-6xl">
              Hello There
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              A long time ago, in a galaxy far, far away...
            </h3>
            <p className="text-md pt-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              It is a period of civil war. Rebel
              <br />
              spaceships, striking from a hidden
              <br />
              base, have won their first victory
              <br />
              against the evil Galactic Empire.
              <br />
              <br />
              During the battle, Rebel spies managed
              <br />
              to steal secret plans to the Empire's
              <br />
              ultimate weapon, the Death Star, an
              <br />
              armored space station with enough
              <br />
              power to destroy an entire planet.
              <br />
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 pb-10 text-gray-600 cursor-pointer">
            <GiMailedFist className="hover:text-red-700" />
            <GiSlashedShield className="hover:text-green-700" />
            <GiRun className="hover:text-blue-400" />
          </div>
          <div
            className="
          relative 
          mx-auto 
          bg-gradient-to-b 
          from-sky-200 
          to-blue-600
          hover:from-red-200
          hover:to-red-600
          rounded-full 
          w-80 
          h-80
          md:w-96
          md:h-96
          shadow-2xl"
          >
            <img src={avatar} className="" />
          </div>
        </section>
        <section className="">
          <div>
            <h3 className="text-3xl py-1">Oh Jeepers my Pickems o7</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              ANYTHING CSGO, CS:GO, COUNTER-STRIKE, COUNTER-STRIKE 2,{" "}
              <span className="text-sky-800">CS2</span>, CS:2, COUNTER STRIKE,
              COUNTER STRIKE 2 OR WHATEVER YOU WANNA CALL IT.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="max-w-lg text-center shadow-lg p-10 rounded-xl my-10">
              <img className="mx-auto" src={fight} width="100" />
              <h3 className="text-lg font-medium pt-8 pb-2">Fight!</h3>
              <p className="py-2">
                It is a period of civil war. Rebel
                <br />
                spaceships, striking from a hidden
              </p>
              <h4 className="py-4 text-sky-600">h4Text</h4>
              <p>Blabla</p>
            </div>
            <div className="max-w-lg text-center shadow-lg p-10 rounded-xl my-10">
              <img className="mx-auto" src={def} width="100" />
              <h3 className="text-lg font-medium pt-8 pb-2">Deff!</h3>
              <p className="py-2">
                It is a period of civil war. Rebel
                <br />
                spaceships, striking from a hidden
              </p>
              <h4 className="py-4 text-sky-600">h4Text</h4>
              <p>Blabla</p>
            </div>
            <div className="max-w-lg text-center shadow-lg p-10 rounded-xl my-10">
              <img className="mx-auto" src={run} width="100" />
              <h3 className="text-lg font-medium pt-8 pb-2">Run!</h3>
              <p className="py-2">
                It is a period of civil war. Rebel
                <br />
                spaceships, striking from a hidden
              </p>
              <h4 className="py-4 text-sky-600">h4Text</h4>
              <p>Blabla</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
