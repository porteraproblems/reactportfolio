import React, { Component } from "react";

export default class About extends Component {

    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="" alt="" />
                    </div>
                    <div className="nine columnes main-col">
                        <h2>About Me</h2>
                        <p>
                            {
                                resumeData.aboutme
                            }
                        </p>

                        <div className="row">
                            <div className="colimns contact-details">
                                <h2>Contact</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span>

                                    <br></br>

                                    <span>{resumeData.address}</span>

                                    <br></br>

                                    <span>{resumeData.website}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}