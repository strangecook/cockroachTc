import React from 'react';
import image3 from "./3.jpg"
import "./Thirdpage.css";

function Thirdpage() {
    return (
        <>
            <section >
                <div className="outer">
                    <div className="inner">
                        <div
                            className="bg one"
                            style={{ backgroundImage: `url(${image3})` }} // 배경이미지변경
                        >
                            <div>
                                <div className='Thirdpage' >바선생 주요서비스 </div>
                                <div className='FirstpageExplain'>선생님을 위한 최고의 데스크탑 앱</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Thirdpage;
