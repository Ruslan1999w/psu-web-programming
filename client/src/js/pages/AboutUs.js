import React from "react";
import ReactDOM from "react-dom";
import "./comp_style/about.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <div class="title">
          <h1>ПЕНЗЕНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ 17ВА1</h1>
        </div>

        <div class="info">
          {" "}
          <p>
            {" "}
            Свободный ресурс для чтения книг.{" "}
          </p>{" "}
        </div>

        <h1>Создатели</h1>
        <div class="authors">
          <div class="author">
            <h2>Никита Шилкин</h2>
            <img src="static/img/users_photo/khalim.jpeg" alt="" />
            <div>
              <p>Some information about me</p>{" "}
            </div>
          </div>

          <div class="author">
            <h2>Руслан Плаксунов</h2>
            <img src="static/img/users_photo/ruslan.jpg" alt="" />

            <div>
              <p>Some information about me</p>{" "}
            </div>
          </div>

            <div className="author">
                <h2>Миша Ануфриев</h2>
                <img src="static/img/users_photo/ruslan.jpg" alt=""/>

                <div>
                    <p>Some information about me</p>{" "}
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
