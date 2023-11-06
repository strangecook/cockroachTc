import React from 'react';
import image1 from "./1.jpg"
import "./Firstpage.css";
import Navigation from '../Navigation';

function Firstpage() {
    return (
        <>
            <Navigation />

            <section >
                <div className="outer">
                    <div className="inner">
                        <div
                            className="bg one"
                            style={{ backgroundImage: `url(${image1})` }}
                        >
                            <div>
                                <div className='FirstpageH' >바선생 </div>
                                <div className='FirstpageExplain'>선생님을 위한 최고의 데스크탑 앱</div>
                                <button className='FirstpageDownload'>설치하기</button>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Firstpage;
