import BigHero from "../components/Index/BigHero";
import IndexBody from "../components/Index/IndexBody";
import Footer from "../components/Footer";
import Back2Top from "../components/Back2Top";
import TestNav from "../components/TestNav";


export default function IndexPage() {

   return(
      <>
         <TestNav />
         <BigHero />
         <IndexBody />
         <Back2Top />
         <Footer />
      </>
   );
}