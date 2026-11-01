import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router-dom";
import {Tooltip} from "react-tooltip";

const Layout = (props) => {
    return (
        <div id="content" className={props.theme}>
            <Header />
            <Outlet />
            <Tooltip id="relic-tooltip" />
            <Footer />
        </div>
    );
};

export default Layout;