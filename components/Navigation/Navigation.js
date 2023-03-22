import "./Navigation.scss";
import { NavigationLink } from "./components/NavigationLink";
import { Button } from "../Button/Button";
import logo from "./images/Lookscout.png";

export function Navigation () {
    return (
        <div className="nav">
            <div className="navigation" > 
                <img src={logo}></img>
                <ul className="navigation__list" >
                    <li className="navigation__list--item"><a>Home</a></li>
                    <li className="navigation__list--item"><a>Our Products</a></li>
                    <li className="navigation__list--item">
                        <select className="select">
                            <option>Resources</option>
                            <option>Other</option>
                            <option>Other...</option>
                        </select>
                    </li>
                    <li className="navigation__list--item"><a>Contacts</a></li>
                </ul>
            </div>
            <div className="btns">
                <Button mode="text">Sign Up</Button>
                <Button mode="primary">Log in</Button>
            </div>
        </div> 
    );
}