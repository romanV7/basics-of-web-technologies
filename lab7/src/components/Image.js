import React from "react";

function addImage() {
  let img = document.getElementById("img");
  img.innerHTML += `<img
        alt="Київ"
        src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/d9/VCH_%D0%92%D0%B5%D1%80%D1%85_%D0%A0%D0%B0%D0%B4%D0%B0_CHUPRINA_%C2%A9.JPG/270px-VCH_%D0%92%D0%B5%D1%80%D1%85_%D0%A0%D0%B0%D0%B4%D0%B0_CHUPRINA_%C2%A9.JPG"
        width="750"
        height="350"
        id="image"
    />
`;
}

function deleteImage() {
  let img = document.getElementById("img");
  img.innerHTML = "<p></p>";
}

function biggerImage() {
  let myImg = document.getElementById("image");
  let currWidth = myImg.clientWidth;
  let currHeight = myImg.clientHeight;
  if (currWidth >= 1000) {
    alert("You have reached the maximum!");
  } else {
    myImg.style.width = currWidth + 20 + "px";
    myImg.style.height = currHeight + 20 + "px";
  }
}

function smallerImage() {
  let myImg2 = document.getElementById("image");
  let currWidth2 = myImg2.clientWidth;
  let currHeight2 = myImg2.clientHeight;
  if (currHeight2 <= 160) {
    alert("You have reached the minimum!");
  } else {
    myImg2.style.width = currWidth2 - 20 + "px";
    myImg2.style.height = currHeight2 - 20 + "px";
  }
}

function Image() {
  return (
    <div>
      <div id="img"></div>
      <p>
        <button onClick={addImage}>Додати</button>
        <button onClick={biggerImage}>Збільшити</button>
        <button onClick={smallerImage}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </p>
    </div>
  );
}
export default Image;
