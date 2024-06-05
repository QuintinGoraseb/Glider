


export default function Footer() {


    return(
        <footer className="bg-gray-800 p-4">
            <hr
            className="mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-25 dark:opacity-100 z-10"/>
            <p className="text-center text-primary">Copyright &copy; {new Date().getFullYear()} | Glider Human Capital Business Consultants<br/>Powered By: SOFTLogiQ</p>
        </footer>
    );
}