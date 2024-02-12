import Service from "./components/Service";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ViewsHotels from "./components/PopularHotels";
import History from "./components/History";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Map from "./components/Map";

export default function Home() {
  return (
    <div className="lg:mx-[4rem] mx-[1.5rem]">
    <Navbar/>
    <Landing/>
    <ViewsHotels/>
    <Service/>
    <History/>
    <Testimonial/>
    <Map/>
    <Footer/>
    </div>
  )
}
