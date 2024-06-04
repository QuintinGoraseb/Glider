import { Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import TopBar from "./TopBar";

export default function Layout() {
    return(
        <div className="">
            <TopBar />
            <Header />
            <Hero />
            <Outlet />
        </div>
    );
}