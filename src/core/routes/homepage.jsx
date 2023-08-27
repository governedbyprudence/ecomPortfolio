import { CustomNavbar } from "../components/navbar";
import Hero from "../components/Hero";
import OfferBanner from "../components/offer";
import Testimonials from "../components/testimonials";
export const HomePage=()=>{
    return (
        <div>
        <CustomNavbar/>
        <Hero/>
        <OfferBanner/>
        <Testimonials/>
        </div>
    );
}

export default HomePage;
