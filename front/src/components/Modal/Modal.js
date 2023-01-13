import React from "react";
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
                <img
                  src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
              </div>
              <div>
                <div>asdasd</div>
                <div>asdad</div>
              </div>
            </div>
            <div className="footer">asd</div>
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
