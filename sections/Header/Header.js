import "./Header.scss";
import { Navigation } from "../../components/Navigation";
import { SectionTitle } from "../../components/SectionTitle";
import { Button } from "../../components/Button/Button";
import headerImage from "./images/Image.png";

export function Header () {
    return (
        <header className="header" >
            <Navigation/>
            <SectionTitle mode="large" title="Your Supercharged Design Workflow." subtitle="We've been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."/>
            <div className="header-btns">
                <Button mode="primary">Get Started</Button>
                <Button mode="secondary">Contact US</Button>
            </div>
            <img className="header-image" src={headerImage}></img>
        </header>
    )   
}   