import React from "react";
import Logo from "../logo";
import './footer.css';
import Menu from "../menu";

function Footer(props) {
    return (
        <footer>
            <div className="container flex">
                <Logo/>
                <div> <Menu menuItems = {props.menuItems}/> </div>
                <div> <Menu menuItems = {props.menuItems2}/> </div>
                <div> <p>Copyright &copy;</p> </div>
            </div>
        </footer>
    );
}
export default Footer;
