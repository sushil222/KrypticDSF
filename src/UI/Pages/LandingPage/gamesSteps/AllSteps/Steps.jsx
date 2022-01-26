import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootballBall, faBasketballBall, faBaseballBall, faHockeyPuck, faGolfBall, faCar, faFutbol, faBomb, faFistRaised } from "@fortawesome/free-solid-svg-icons";
import './Steps.css';
const Steps = () => {

    return (
        <>
            <div className="jss620 jss234 jss217 jss621">
                <div className="jss621 jss225 jss220 jss217 ">
                    <h2 className="jss624">Start Playing in 3 Easy Steps</h2>
                </div>
                <div className="jss238 jss217">
                    <div className="jss218 jss254">
                        <div className="jss757">
                            <div className="jss217 jss220 jss758">
                                <h5>
                                    Choose any
                                    <br />
                                    Sport you like
                                </h5>
                                <div className="jss217 jss225 jss759">
                                    <div className="jss217 jss238 jss234">
                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faFootballBall} />
                                            </div>
                                        </div>

                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faBasketballBall} />
                                            </div>
                                        </div>

                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faHockeyPuck} />
                                            </div>
                                        </div>

                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faGolfBall} />
                                            </div>
                                        </div>

                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faCar} />
                                            </div>
                                        </div>

                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faFutbol} />
                                            </div>
                                        </div>

                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faBomb} />
                                            </div>
                                        </div>

                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faFistRaised} />
                                            </div>
                                        </div>

                                        <div className="jss218 jss246 jss760">
                                            <div className="jss761">
                                                <FontAwesomeIcon className="sport_Icon" icon={faBaseballBall} />
                                            </div>
                                        </div>




                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jss218 jss254">


                        <div className="jss757">
                            <div className="jss217 jss220 jss758">
                                <h5>
                                    Pick any
                                    <br />
                                    Game and Contest
                                </h5>
                                <div className="jss217 jss225 ">
                                    <div className="jss217 jss238 jss234">
                                        <div className="jss218 jss760 contest_one">
                                            <div className=" btn_dsgn">
                                                <a className="jss557 pick_btn" href="">Game & Contest 1</a>
                                            </div>
                                        </div>

                                        <div className="jss218 jss760 contest_one">
                                            <div className="  btn_dsgn">
                                                <a className="jss557 pick_btn" href="">Game & Contest 2</a>
                                            </div>
                                        </div>

                                        <div className="jss218 jss760 contest_one">
                                            <div className="  btn_dsgn">
                                                <a className="jss557 pick_btn" href="">Game & Contest 3</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="jss218 jss254">

                        <div className="jss757">
                            <div className="jss217 jss220 jss758">
                                <h5>
                                    Choose More or Less
                                    <br />
                                    for each player listed
                                </h5>
                                <div className="jss217 jss225 jss759">
                                    <div className="jss217 jss238 jss234">
                                        

         




                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="sport_btn">
                    <a className="jss557" href="">SIGN UP AND PLAY NOW</a>
                </div>

            </div>
        </>
    )
}

export default Steps;