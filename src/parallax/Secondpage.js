import React from 'react';
import image2 from "./2.jpg"
import "./Secondpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faCalendarCheck,
    faSadCry,
} from "@fortawesome/free-solid-svg-icons";

function Secondpage() {
    return (
        <>
            <section >
                <div className="outer">
                    <div className="inner">
                        <div
                            className="bg one"
                            style={{ backgroundImage: `url(${image2})` }} // 배경이미지변경
                        >
                            <div>
                                <div className='SecondpageH' >바선생 주요서비스 </div>
                                <div className='secondiconCover'>
                                    <div className='icontainer'>
                                        <FontAwesomeIcon
                                            className="homeIcon"
                                            icon={faHome}
                                            size="3x"
                                        ></FontAwesomeIcon>
                                    </div>
                                    <div className='icontainer'>
                                        <FontAwesomeIcon
                                            className="homeIcon"
                                            icon={faHome}
                                            size="3x"
                                        ></FontAwesomeIcon>
                                    </div>
                                    <div className='icontainer'>
                                        <FontAwesomeIcon
                                            className="homeIcon"
                                            icon={faHome}
                                            size="3x"
                                        ></FontAwesomeIcon>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Secondpage;
