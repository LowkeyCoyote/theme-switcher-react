import React, {Component} from "react";
import "./dashboard.css"
import twitterIcon from "../../assets/images/icon-twitter.svg"
import facebookIcon from "../../assets/images/icon-facebook.svg"
import instagramIcon from "../../assets/images/icon-instagram.svg"
import youtubeIcon from "../../assets/images/icon-youtube.svg"
import upIcon from "../../assets/images/icon-up.svg"
import downIcon from "../../assets/images/icon-down.svg"
import MainCard from "../../components/mainCard/mainCard";
import OverviewCard from "../../components/overviewCard/overviewCard";

class Dashboard extends Component {

    state = {
        darkTheme: true
    }

    handleSwitchTheme = () => {
        this.setState(state => ({
            darkTheme: !state.darkTheme
        }));
        this.handleBackGroundColor(this.state.darkTheme)
    }

    handleBackGroundColor(darkTheme) {
        if (darkTheme) {
            document.body.style.backgroundColor = "white"
            document.body.style.transition = "background-color 0.3s ease-in-out"
        } else {
            document.body.style.backgroundColor = "var(--dark-blue-bg)"
            document.body.style.transition = "background-color 0.3s ease-in-out"
        }
    }

    render() {
        return (

            <div className="dashboard-container">
                <div className={this.state.darkTheme ? "secondary-bg" : "secondary-bg-light"}/>
                <header>
                    <div className="row-header">
                        <div className="titles">
                            <h1 className={this.state.darkTheme ? "main-title" : "main-title-light"}>Social Media
                                Dashboard</h1>
                            <p className={this.state.darkTheme ? "subtitle" : "subtitle-light"}>Total Followers:
                                23,004</p>
                        </div>
                        <div className="theme-switcher">
                            <span className={this.state.darkTheme ? "subtitle" : "subtitle-light"}>Dark Mode</span>
                            <div onClick={this.handleSwitchTheme}
                                 className={this.state.darkTheme ? "switch-out" : "switch-out-light"}>
                                <div className={this.state.darkTheme ? "switch-in" : "switch-in-light"}/>
                            </div>
                        </div>
                    </div>
                </header>


                <section className="dashboard-grid">
                    <MainCard
                        network="facebook"
                        iconSocial={facebookIcon}
                        account="@nathanf"
                        followers="1987"
                        typeFollowers="FOLLOWERS"
                        isProgressing="Yes"
                        upOrDown={upIcon}
                        progression="12"
                        darkTheme={this.state.darkTheme}
                    />
                    <MainCard
                        network="twitter"
                        iconSocial={twitterIcon}
                        account="@nathanf"
                        followers="1044"
                        typeFollowers="FOLLOWERS"
                        isProgressing="Yes"
                        upOrDown={upIcon}
                        progression="99"
                        darkTheme={this.state.darkTheme}
                    />
                    <MainCard
                        network="instagram"
                        iconSocial={instagramIcon}
                        account="@realnathanf"
                        followers="11K"
                        typeFollowers="FOLLOWERS"
                        isProgressing="Yes"
                        upOrDown={upIcon}
                        progression="1099"
                        darkTheme={this.state.darkTheme}
                    />
                    <MainCard
                        network="youtube"
                        iconSocial={youtubeIcon}
                        account="Nathan F."
                        followers="8239"
                        typeFollowers="SUBSCRIBERS"
                        isProgressing="No"
                        upOrDown={downIcon}
                        progression="144"
                        darkTheme={this.state.darkTheme}
                    />
                </section>
                <h2 className={this.state.darkTheme ? "overview-title" : "overview-title-light"}>OverView - Today</h2>
                <section className="overview-grid">
                    <OverviewCard
                        type="Page Views"
                        iconSocial={facebookIcon}
                        numberType="87"
                        isProgressing="Yes"
                        upOrDown={upIcon}
                        pourcentage="3"
                        darkTheme={this.state.darkTheme}
                    />
                    <OverviewCard
                        type="Likes"
                        iconSocial={facebookIcon}
                        numberType="52"
                        isProgressing="No"
                        upOrDown={downIcon}
                        pourcentage="2"
                        darkTheme={this.state.darkTheme}
                    />
                    <OverviewCard
                        type="Likes"
                        iconSocial={instagramIcon}
                        numberType="5462"
                        isProgressing="Yes"
                        upOrDown={upIcon}
                        pourcentage="2257"
                        darkTheme={this.state.darkTheme}
                    />
                    <OverviewCard
                        type="Profile Views"
                        iconSocial={instagramIcon}
                        numberType="52K"
                        isProgressing="Yes"
                        upOrDown={upIcon}
                        pourcentage="1375"
                        darkTheme={this.state.darkTheme}
                    />
                    <OverviewCard
                        type="Retweets"
                        iconSocial={twitterIcon}
                        numberType="117"
                        isProgressing="Yes"
                        upOrDown={upIcon}
                        pourcentage="303"
                        darkTheme={this.state.darkTheme}
                    />
                    <OverviewCard
                        type="Likes"
                        iconSocial={twitterIcon}
                        numberType="507"
                        isProgressing="Yes"
                        upOrDown={upIcon}
                        pourcentage="553"
                        darkTheme={this.state.darkTheme}
                    />
                    <OverviewCard
                        type="Likes"
                        iconSocial={youtubeIcon}
                        numberType="107"
                        isProgressing="No"
                        upOrDown={downIcon}
                        pourcentage="19"
                        darkTheme={this.state.darkTheme}
                    />

                    <OverviewCard
                        type="Total Views"
                        iconSocial={youtubeIcon}
                        numberType="1407"
                        isProgressing="No"
                        upOrDown={downIcon}
                        pourcentage="12"
                        darkTheme={this.state.darkTheme}
                    />
                </section>

            </div>
        );
    }
}

export default Dashboard;
