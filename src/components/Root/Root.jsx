import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header/>
            <div className="mb-6">
                 <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;