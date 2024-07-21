import "./App.css";
import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import shoesData from "./shoesData";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
//import About from './routes/About.js'
import axios from "axios";

function App() {
  let [shoes] = useState(shoesData);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">InTaiL</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>메인페이지</div>
              <div className="main-bg"></div>

              <div className="container">
                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((결과) => {
                        console.log(결과.data);
                      })
                      .catch(() => {
                        console.log("실패함");
                      });
                  }}
                >
                  버튼
                </button>
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1}></Card>;
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
        onClick={() => navigate("/detail/" + (Number(props.i) - 1))}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      {/* //TODO: ajax로 불러온 데이터로 값 세팅 하기, 버튼 눌렀을때 추가 이벤트 */}
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
