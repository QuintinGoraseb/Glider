import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";


export default function Layout() {
    return(
        <div className="">
            <TopBar />
            <Header />
            <Hero />
            <Outlet />
            <Footer />
        </div>
    );
}