"use strict";

const form = document.getElementById("form");
const table = document.getElementById("table");

const form_data = {
  pib: "",
  variant: "",
  phone: "",
  faculty: "",
  address: "",
  isValid: false,
};

const isPib = (pib) =>
  /^[А-Яа-яІіЇї]{3,} [А-Яа-яІіЇї]\.[А-Яа-яІіЇї]\.$/.test(pib);

const isVariant = (variant) => /^\d$|^\d\d$/.test(variant);

const isPhone = (phone) => /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phone);

const isFaculty = (faculty) => /^[А-Яа-яІіЇї]{3,4}$/.test(faculty);

const isAddress = (address) => /^м. \d+$/.test(address);

const onFormChange = (e) => {
  form_data[e.target.id] = e.target.value;
  if (e.target.classList.contains("invalid")) {
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
  }

  if (
    !isPib(e.target.value) &&
    !isVariant(e.target.value) &&
    !isPhone(e.target.value) &&
    !isFaculty(e.target.value) &&
    !isAddress(e.target.value)
  ) {
    if (
      !e.target.classList.contains("invalid") &&
      e.target.classList.contains("valid")
    ) {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
    e.target.nextElementSibling.style.display = "inline";
    form_data.isValid = false;
  } else {
    if (
      !e.target.classList.contains("valid") &&
      e.target.classList.contains("invalid")
    ) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    }
    e.target.nextElementSibling.style.display = "none";
    form_data.isValid = true;
  }
};

const onFormSubmit = (e) => {
  e.preventDefault();
  for (let i = 0; i < form.elements.length; i++) {
    if (!form.elements[i].value) {
      form_data.isValid = false;
    }
  }
  if (form_data.isValid === false) {
    alert("Форма не валідна або має пусті поля!");
    return;
  }
  let newWin = window.open("about:blank", "hello", "width=300,height=200");
  newWin.document.write(`
    ПІБ: ${form_data.pib} <br>
    Варіант: ${form_data.variant} <br>
    Телефон: ${form_data.phone} <br>
    Факультет: ${form_data.faculty} <br>
    Адреса: ${form_data.address}
    `);
};

form.addEventListener("change", onFormChange);
form.addEventListener("submit", onFormSubmit);

const createTable = () => {
  const tbody = document.createElement("tbody");

  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    tr.id = "tr" + (i + 1);

    for (let j = 0; j < 6; j++) {
      const n = i * 6 + j + 1;
      const td = document.createElement("td");
      td.innerHTML = n;
      td.id = "td" + n;

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
};

createTable();

const td7 = document.getElementById("td7");
const color = document.getElementById("color");

const elemChangeColorRandom = (elem) => {
  let text_color = getRandomColor();
  let bg_color = getRandomColor();
  while (text_color === bg_color) {
    text_color = getRandomColor();
  }
  elem.style.backgroundColor = bg_color;
  elem.style.color = text_color;
};

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const elemChangeColor = (elem) => {
  elem.style.backgroundColor = color.value;
  elem.style.color = "black";
};

const rowChangeColor = (elem) => {
  let ret = elem.parentElement.id.replace("tr", "");
  let rowCount = table.rows.length;
  for (let i = parseInt(ret); i <= rowCount; i += 2) {
    for (let j = 0, col; (col = table.rows[i - 1].cells[j]); j++) {
      col.style.backgroundColor = color.value;
      col.style.color = "black";
    }
  }
};

td7.addEventListener("mouseover", () => elemChangeColorRandom(td7));
td7.addEventListener("click", () => elemChangeColor(td7));
td7.addEventListener("dblclick", () => rowChangeColor(td7));
