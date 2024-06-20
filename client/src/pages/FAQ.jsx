import Back2Top from "../components/Back2Top";
import FHero from "../components/FAQ/FHero";
import FaqBody from "../components/FAQ/FaqBody";
import Footer from "../components/Footer";
import SuperNav from "../components/SuperNav";




export default function FAQ() {
    return(
        <>
        <SuperNav />
        <FHero />
        <FaqBody />
        <Back2Top />
        <Footer />
        </>
    );
}