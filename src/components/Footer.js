import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer bg-gray-800 h-48 px-6 flex flex-row flex-wrap justify-between">
      <div className="flex flex-col my-auto pl-4 ">
        <Link to="/">
          <h1 className={" mt-6 text-4xl text-white"}>Grubspace</h1>
        </Link>
        <p className={'text-white'}>3600 Kalakaua Ave, Honolulu, HI 96822</p>
        <p className={'text-white pb-4'}>Site Design By: SONVR Design</p>
      </div>
      <div className="text-white my-auto">
        <Link className={'px-3'} to={"about"}>About</Link>
        <Link className={'px-3'} to={"chef"}>Chef's Manifesto</Link>
        <Link className={'px-3'} to={"recipes"}>Recipe Box</Link>
        <Link className={'px-3'} to={"nutrition"}>Nutrition Corner</Link>
        <Link className={'px-3'} to={"cocktails"}>Wine Source</Link>
      </div>
    </footer>
  );
}
