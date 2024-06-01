import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header/>
            <div className=" mb-3 lg:max-w-5xl mx-auto">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;