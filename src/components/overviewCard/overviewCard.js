import React from "react";
import "./overviewCard.css";

const overviewCard = (props) => {

    const isProgressing = props.isProgressing;
    let cssProgression;

    if (isProgressing === "Yes") {
        cssProgression = "color : green"
    } else {
        cssProgression = "color : red"
    }

    return (
        <div className={props.darkTheme ? "container-overview-card" : "container-overview-card-light"}>
            <div className="row">
                <h3 className={props.darkTheme ? "text-span" : "text-span-light"}>{props.type}</h3>
                <img src={props.iconSocial} alt="icon"/>
            </div>
            <div className="row">
                <h3 className={props.darkTheme ? "number-action" : "number-action-light"}>{props.numberType}</h3>
                <div className="progression-type">
                    <img src={props.upOrDown} alt="updown"/>
                    <span className={cssProgression}>{props.pourcentage}%</span>
                </div>
            </div>
        </div>
    )

};

export default overviewCard;

