import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header/>
            <div className="mb-6 lg:max-w-5xl h-[80vh] mx-auto">
                 <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;