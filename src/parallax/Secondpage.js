import React from 'react';
import image2 from "./2.jpg"
import "./Secondpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFilePdf,
    faUserGraduate,
    faNewspaper,
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
                                <div className='SecondiconCover'>
                                    <div className='icontainer'>
                                        <FontAwesomeIcon
                                            icon={faFilePdf}
                                            size="3x"
                                        ></FontAwesomeIcon>
                                        <div className='icontitle' >편리한 문제 추가</div>
                                        <div className='iconExplain'> 한글, PDF 드래그를 통해 문제 은행에 ​손쉽게 문제 추가 </div>
                                    </div>
                                    <div className='icontainer'>
                                        <FontAwesomeIcon
                                            icon={faUserGraduate}
                                            size="3x"
                                        ></FontAwesomeIcon>
                                        <div className='icontitle'>​학생 앱과의 연동</div>
                                        <div className='iconExplain'> 자사에서 개발한 학생 앱 연동을 통해 과제 부여, 학생 데이터 추적, AI 분석 등 서비스를 누리세요 </div>
                                    </div>
                                    <div className='icontainer'>
                                        <FontAwesomeIcon
                                            icon={faNewspaper}
                                            size="3x"
                                        ></FontAwesomeIcon>
                                        <div className='icontitle'>내 맘대로 시험지 생성</div>
                                        <div className='iconExplain'> 기존의 폴더식 저장에 해시태그별 저장을 추가하여 원하는 카테고리별 시험지 생성 </div>
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
