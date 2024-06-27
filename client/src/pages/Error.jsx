import ErrorHero from "../components/404/ErrorHero";
import Footer from "../components/Footer";
import TestNav from "../components/TestNav";
import ErrorBody from "../components/404/ErrorBody";








export default function Error() {
    return(
        <>
        <TestNav />
        <ErrorHero />
        <ErrorBody />
        <Footer />
        </>
    );
}