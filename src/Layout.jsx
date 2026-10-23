import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = (props) => {
    return (
        <div id="content" className={props.theme}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;