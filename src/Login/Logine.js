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
                </div>
            </div>
        </>
    );
};

export default logine;
