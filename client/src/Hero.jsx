export default function Hero(){
    return(
        <section>
            <div>
                <img className="absolute top-0 left-0 w-full h-screen object-cover" src="/broom2.jpg" alt="hero" />
                <div className="absolute w-full h-full flex flex-col justify-center text-white">
                    <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                        <h1 className="font-bold text-4xl md:text-5xl drop-shadow-2xl">Glider Business Consulting & Management cc<span>.</span></h1>
                        <h2>Success Through Excellence...</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}