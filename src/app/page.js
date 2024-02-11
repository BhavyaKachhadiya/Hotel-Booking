import Service from "./components/Service";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ViewsHotels from "./components/PopularHotels";
import History from "./components/History";

export default function Home() {
  return (
    <div className="lg:mx-[4rem] mx-[1.5rem]">
    <Navbar/>
    <Landing/>
    <ViewsHotels/>
    <Service/>
    <History/>
    </div>
  )
}
