import React from "react";
import "./mainCard.css";

const mainCard = (props) => {

    /* Color text progression */
    const isProgressing = props.isProgressing;
    let cssProgression;
    let cssBorderTop;

    if (isProgressing === "Yes") {
        cssProgression = "color : green"
    } else {
        cssProgression = "color : red"
    }
    /* Color border-top */
    switch (props.network) {
        case "facebook":
            cssBorderTop = {borderTop: '4px solid var(--facebook-blue)'};
            break;
        case "twitter":
            cssBorderTop = {borderTop: '4px solid var(--twitter-blue)'};
            break
        case "youtube":
            cssBorderTop = {borderTop: '4px solid var(--youtube)'};
            break;
        default:
            cssBorderTop = {
                borderTop: '4px solid hsl(37, 97%, 70%)',
                borderImage: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 1 stretch',
            };
    }

    return (
        <div className={props.darkTheme ? "container-card" : "container-card-light"} style={cssBorderTop}>
            <div className="social">
                <img src={props.iconSocial} alt='icon'/>
                <span className={props.darkTheme ? "text-span" : "text-span-light"}>{props.account}</span>
            </div>
            <div className="stats">
                <h2 className={props.darkTheme ? "number-followers" : "number-followers-light"}>{props.followers}</h2>
                <p className="subtitle-followers">{props.typeFollowers}</p>
                <div className="progression-followers">
                    <img src={props.upOrDown} alt="updown"/>
                    <span className={cssProgression}>{props.progression} Today</span>
                </div>
            </div>
        </div>
    )
};

export default mainCard;

