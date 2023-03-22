import "./Box.scss";
import { Button } from "../../../components/Button/Button";
import { BoxTitleSubtitle } from "./BoxTitleSubtitle";
import icon1 from "../icon-images/Icon1.png";


export function Box({icon, boxTitle, boxSubtitle}) {
    return (
        <div className="box">
            <div className="box-upper">
                <img src={icon}></img>
                <Button mode="secondary">Show more</Button>
            </div>
            <BoxTitleSubtitle boxTitle={boxTitle} boxSubtitle={boxSubtitle}/>
        </div>
    )
}