import Service from "./components/Service";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ViewsHotels from "./components/PopularHotels";

export default function Home() {
  return (
    <div className="mx-[4rem]">
    <Navbar/>
    <Landing/>
    <ViewsHotels/>
    <Service/>
    </div>
  )
}
