import Image from "next/image";
import Service from "./components/Service";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <div className="mx-[1.5rem]">
    <Navbar/>
    <Landing/>
    <Service/>
    </div>
  )
}
