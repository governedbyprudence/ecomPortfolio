import { CustomNavbar } from "../components/navbar";
import Hero from "../components/Hero";
import OfferBanner from "../components/offer";
export const HomePage=()=>{
    return (
        <div>
        <CustomNavbar/>
        <Hero/>
        <OfferBanner/>
        </div>
    );
}

export default HomePage;
