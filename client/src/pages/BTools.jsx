import Back2Top from "../components/Back2Top";
import Footer from "../components/Footer";
import GHero from "../components/BTools/GHero";
import GHubBody from "../components/BTools/GHubBody";
import SuperNav from "../components/SuperNav";




export default function BTools() {
    return(
        <>
        <SuperNav />
        <GHero />
        <GHubBody />
        <Back2Top />
        <Footer />
        </>
    );
}