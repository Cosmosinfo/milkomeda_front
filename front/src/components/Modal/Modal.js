import React from "react";
import Icon from "../../assets/icon/lubbless_poster.png";
import "./Modal.css";

export default function Modal(props) {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div className="container">
              <div className="image">
                <img src={Icon} alt="" />
              </div>
              <div className="name">
                <div>Lubbless</div>
                <div className="name_type">Synth POP, EDM</div>
              </div>
            </div>
            <div className="footer">Synth POP과 EDM을 전문적으로 하며 현재 주요 활동 영역은 일본과 한국이다.</div>
          </main>
          {/* <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer> */}
        </section>
      ) : null}
    </div>
  );
}
