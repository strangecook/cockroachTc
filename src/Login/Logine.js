import React from 'react';
import Navigation from '../Navigation';
import "./logine.css";
import logo from "./cockroach.png";

function logine() {
    return (
        <>
            <Navigation />
            <div className="contentsWrap">
                <div className="loginWindow">
                    <img src={logo} alt="" id="instaLogo" />
                    <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" className="inlineToBlock">
                    </input>
                    <input type="password" placeholder="비밀번호" className="inlineToBlock">
                    </input>
                    <input type="password" placeholder="비밀번호 확인" className="inlineToBlock">
                    </input>
                    <input type="password" placeholder="이름" className="inlineToBlock">
                    </input>
                    <input type="password" placeholder="이메일" className="inlineToBlock">
                    </input>
                    <input type="password" placeholder="닉네임" className="inlineToBlock">
                    </input>
                    <button className="inlineToBlock ordinaryLogin unactivatedLoginColor">회원가입</button>

                    {/* <div className="horinzonAndOrWrap">
                        <hr className="leftnHr" />
                        <div className="or">n또는</div>
                        <hr className="righntHr" />
                    </div> */}

                    {/* <a href="#" className="nonenunderline">
                        <button className="inlineToBlock facebookLogin">
                            {/* <img src="img/facebook.png" alt="" className="facenbookIcon">
                            Facebook으로 로그인
                        </button>
                    </a> */}

                </div>
                {/* <div className="havenAccount">
                    <p>계정이 없으신가요?
                        <a href="#" className="nonenunderline">가입하기</a>
                    </p>
                </div> */}
            </div>
        </>
    );
};

export default logine;
