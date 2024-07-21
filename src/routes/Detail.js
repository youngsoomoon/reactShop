import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [num, setNum] = useState("");

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("alert").style.display = "none";
    }, 2000);

    if (isNaN(num) == true) {
      alert("숫자를 입력해주세요.");
    }
  }, [num]);

  //TODO: find 함수로 변환해보기
  for (let index in props.shoes.id) {
    if (index === id) {
      return (id = index);
    }
  }

  const alertClose = (parameter) => {
    //document.getElementById("alert_input").style.display = parameter;
  };

  return (
    <div className="container">
      <YellowBtn onClick={() => setCount(count + 1)}>버튼</YellowBtn>
      <div className="alert alert-warning" id="alert">
        2초이내 구매시 할인
      </div>
      {count}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (Number(id) + 1) +
              ".jpg"
            }
            width="100%"
          />
          {/* TODO: useEffectf를 사용하여 숫자가 아닌 값이 입력됐을때  경고창 띄우기*/}
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <div class="alert-box" id="alert_input">
            <p id="name">알림창 입니다.</p>
            <button onclick={alertClose("none")}>닫기</button>
          </div>
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
