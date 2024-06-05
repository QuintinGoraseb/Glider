import IndexBody from "../components/IndexBody";
import Footer from "../components/Footer";
import SuperNav from "../components/SuperNav";
import BigHero from "../components/BigHero";


export default function IndexPage() {

   return(
      <>
         <SuperNav />
         <BigHero />
         <main className="flex-grow">
         <IndexBody />
         </main>
         <Footer />
      </>
   );
}