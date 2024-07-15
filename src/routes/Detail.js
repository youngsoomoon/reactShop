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

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("alert").style.display = "none";
    }, 2000);
  });

  //TODO: find 함수로 변환해보기
  for (let index in props.shoes.id) {
    if (index === id) {
      return (id = index);
    }
  }

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
          <input></input>
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
