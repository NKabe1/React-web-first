import "./Review.scss";
import { Box } from "./Box";
import { SectionTitle } from "../../components/SectionTitle";
import { Button } from "../../components/Button/Button";
import icon1 from "./icon-images/Icon1.png";
import icon2 from "./icon-images/Icon2.png";
import icon3 from "./icon-images/Icon3.png";
import icon4 from "./icon-images/Icon4.png";
import icon5 from "./icon-images/Icon5.png";
import icon6 from "./icon-images/Icon6.png";


export function Review () {
    return (
        <div>
            <SectionTitle mode="medium" title="Our Channels Review" subtitle="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."/>
            <div className="review-container">
                <Box icon={icon1} boxTitle="Wireless" boxSubtitle="Enim nec rhoncus volutpat nullam eros sapien pharetra."/>
                <Box icon={icon2} boxTitle="Synergistic" boxSubtitle="Neque ut integer nulla tellus semper amet id scelerisque eros."/>
                <Box icon={icon3} boxTitle="Distributed" boxSubtitle="Aliquet et cras nam sed mauris laoreet bibendum et."/>
                <Box icon={icon4} boxTitle="Seamless" boxSubtitle="Lacus vulputate vel metus massa platea ut pellentesque turpis."/>
                <Box icon={icon5} boxTitle="Revolutionary" boxSubtitle="Mauris orci eget iaculis placerat euismod at urna posuere."/>
                <Box icon={icon6} boxTitle="Web-enabled" boxSubtitle="Mauris orci eget iaculis placerat euismod at urna posuere."/>
            </div>
            <div className="review-btn">
                <Button mode="primary">Reveal all channels</Button>
            </div>
        </div>
    )
}