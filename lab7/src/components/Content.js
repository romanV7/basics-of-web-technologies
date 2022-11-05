import React from "react";

let click = 0;
function changeColor() {
  if (click % 2 === 0) {
    let el1 = document.getElementById("birth_place");
    el1.style.background = "purple";
    el1.style.color = "white";
    click++;
  } else {
    let el1 = document.getElementById("birth_place");
    el1.style.background = "red";
    el1.style.color = "black";
    click++;
  }
}

let click2 = 0;
function changeColor2() {
  if (click2 % 2 === 0) {
    let el2 = document.querySelector("#education");
    el2.style.background = "blue";
    el2.style.color = "white";
    click2++;
  } else {
    let el2 = document.querySelector("#education");
    el2.style.background = "green";
    el2.style.color = "black";
    click2++;
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <p id="birth_place" onClick={changeColor}>
          Місце народження: 13 лютого 2002 року, м. Суми.
        </p>
        <p id="education" onClick={changeColor2}>
          Освіта: Загально-освiтня школа номер 1, смт. Вороніж
        </p>

        <p>Хоббi:</p>
        <ul>
          <li>Cпорт</li>
          <li>Прогулки из собакой</li>
          <li>Плавання</li>
        </ul>

        <p>Улюбленні фільми:</p>
        <ol>
          <li>1+1</li>
          <li>Гарри Поттер</li>
          <li>СТБ</li>
        </ol>

        <p>
          Київ – столиця України, розташована на річці Дніпро. Місто відоме
          пам'ятками релігійної архітектури та історичними музеями.
          Києво-Печерська лавра XI століття – це монастир та центр паломництва.
          На його території височіють кілька церкв, увінчаних золотими куполами.
          Цей архітектурний комплекс відомий своїми підземними ходами, що ведуть
          до усипальниць православних ченців та колекцією золотих предметів
          скіфських часів.
        </p>

        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B5%D0%B2">
          <img
            alt="Київ"
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/d9/VCH_%D0%92%D0%B5%D1%80%D1%85_%D0%A0%D0%B0%D0%B4%D0%B0_CHUPRINA_%C2%A9.JPG/270px-VCH_%D0%92%D0%B5%D1%80%D1%85_%D0%A0%D0%B0%D0%B4%D0%B0_CHUPRINA_%C2%A9.JPG"
            width="750"
            height="350"
          />
        </a>
      </div>
    );
  }
}
export default Content;
