// https://codepen.io/Radrei/pen/yNgegR

import React from "react";
import "./DS.css";
import Top from "../../assets/Top.png";
import Bottom from "../../assets/Bottom.png";
import Game from "../Game/Game";


export default function DS() {
    return (
        <div id="container">
            <div id="body">
                <div id="cam-mic-holder">
                    <div id="camera">
                        <div id="mic">
                        </div>
                    </div>
                </div>

                <div id="left-speaker">
                    <div className="speaker-hole" id="top-left-hole">
                    </div>

                    <div className="speaker-hole" id="middle-left-hole">
                    </div>

                    <div className="speaker-hole" id="left-left-hole">
                    </div>

                    <div className="speaker-hole" id="right-left-hole">
                    </div>

                    <div className="speaker-hole" id="bottom-left-hole">
                    </div>

                </div>

                <div id="top-screen">
                    <div className="logo">
                        <img src={Top}
                             alt="Luigi Dealer"></img>
                    </div>
                </div>

                <div id="right-speaker">
                    <div className="speaker-hole" id="top-right-hole">
                    </div>

                    <div className="speaker-hole" id="middle-right-hole">
                    </div>

                    <div className="speaker-hole" id="left-right-hole">
                    </div>

                    <div className="speaker-hole" id="right-right-hole">
                    </div>

                    <div className="speaker-hole" id="bottom-right-hole">
                    </div>
                </div>

                <div id="hinge">
                    <div id="hinge-light">
                    </div>
                </div>

                <div id="circle-pad-holder">
                    <div id="circle-pad">
                    </div>
                </div>

                <div id="d-pad">
                </div>

                <div id="bottom-screen-holder">
                    <div id="bottom-screen">
                        <Game/>
                        <div className="bg">
                            <img src={Bottom} alt="New Nintendo 3DS Logo" id="3ds-logo"/>
                        </div>
                    </div>
                    <div id="home-btn"></div>
                </div>


                <div id="c-stick">
                </div>

                <div id="color-button-holder">
                    <div id="blue-btn">
                    </div>

                    <div id="green-btn">
                    </div>

                    <div id="red-btn">
                    </div>

                    <div id="yellow-btn">
                    </div>
                </div>

                <div id="start-btn">
                </div>

                <div id="select-btn">
                </div>

                <div id="lights-holder">
                    <div id="light-1">
                    </div>

                    <div id="light-2">
                    </div>

                    <div id="light-3">
                    </div>
                </div>

            </div>
        </div>
    );
}