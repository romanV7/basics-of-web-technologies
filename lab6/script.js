"use strict";
document
  .querySelector("#show")
  .addEventListener("click", () => showFromFile("data.json"));
document
  .querySelector("#download")
  .addEventListener("click", () => showFromServer(5));

let cards = document.querySelector("#cards");
let status_bar = document.querySelector("#download-status");

function buildCards(profile) {
  let tag = document.createElement("div");
  tag.classList.add("card");

  let tag_inside = document.createElement("div");
  tag_inside.classList.add("profile-info");

  let img = new Image();
  img.src = profile.results[0].picture.large;
  img.alt = "profile-picture";
  img.classList.add("picture");

  let city = document.createElement("p");
  city.innerText = "City: " + profile.results[0].location.city;

  let c_latitude = document.createElement("p");
  c_latitude.innerText =
    "Coordinates latitude: " + profile.results[0].location.coordinates.latitude;
  let c_longitude = document.createElement("p");
  c_longitude.innerText =
    "Coordinates longitude: " +
    profile.results[0].location.coordinates.longitude;

  let country = document.createElement("p");
  country.innerText = "Country: " + profile.results[0].location.country;

  let postcode = document.createElement("p");
  postcode.innerText = "Postcode: " + profile.results[0].location.postcode;

  let state = document.createElement("p");
  state.innerText = "State: " + profile.results[0].location.state;

  let street_number = document.createElement("p");
  street_number.innerText =
    "Street number: " + profile.results[0].location.street.number;
  let street_name = document.createElement("p");
  street_name.innerText =
    "Street name: " + profile.results[0].location.street.name;

  let timezone_description = document.createElement("p");
  timezone_description.innerText =
    "Timezone description: " + profile.results[0].location.timezone.description;
  let timezone_offset = document.createElement("p");
  timezone_offset.innerText =
    "Timezone offset: " + profile.results[0].location.timezone.offset;

  let email = document.createElement("p");
  email.innerText = "Email: " + profile.results[0].email;

  tag.appendChild(img);

  tag_inside.appendChild(city);
  tag_inside.appendChild(c_latitude);
  tag_inside.appendChild(c_longitude);
  tag_inside.appendChild(country);
  tag_inside.appendChild(postcode);
  tag_inside.appendChild(state);
  tag_inside.appendChild(street_number);
  tag_inside.appendChild(street_name);
  tag_inside.appendChild(timezone_description);
  tag_inside.appendChild(timezone_offset);
  tag_inside.appendChild(email);

  tag.appendChild(tag_inside);

  return tag;
}

function showFromFile(file) {
  fetch(file)
    .then((response) => response.json())
    .then((json) => {
      status_bar.innerText = "Successfully fetched elements from file!";
      json.forEach((element) => {
        cards.appendChild(buildCards(element));
      });
    })
    .catch((err) => {
      status_bar.innerText = "Something went wrong: " + err;
    });
}

let apiRequestLoop = function (inp) {
  let promiseArray = [];
  for (let i = 0; i < inp; i++) {
    promiseArray.push(
      fetch("https://randomuser.me/api").then(function (response) {
        return response.json();
      })
    );
  }
  return promiseArray;
};

function showFromServer(count) {
  Promise.all(apiRequestLoop(count)).then(
    (value) => {
      status_bar.innerText =
        "Successfully downloaded elements from server! Count: " + count;
      value.forEach((element) => {
        cards.appendChild(buildCards(element));
      });
    },
    (reason) => {
      status_bar.innerText = "Something went wrong: " + reason;
    }
  );
}
