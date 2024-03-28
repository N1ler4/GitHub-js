// https://api.github.com/users/otabek005/repos
"use strict";

// --------------------------------------- Variables ----------------------------------------------------------------
const user_imgg = $("#user_imgg");
const baseUrl = "https://api.github.com/users/N1ler4";
const aside = $("#aside");
const read = $("#readme");
const h1prof = $("#h1prof");

// --------------------------------------- Functions ----------------------------------------------------------------
async function RenderAboutProfile(data) {
  const about = await getDocData(data.url);
  const followers = await getDocData(data.followers_url);
  const following = await getDocData("https://api.github.com/users/N1ler4/following");
  user_imgg[0].innerHTML = ` <img src="${data.avatar_url}" alt="img">`;
  read[0].innerHTML = `${about.name.toLowerCase()}/README.md`
  h1prof[0].innerHTML = `Hi there, i’m ${about.name} 😃`
  aside[0].innerHTML = `
            <div id="user_profil">
                <img class="user_img" src="${data.avatar_url}" alt="user_profil">
            </div>
            <h3>${about.name}</h3>
            <h4>${data.login}</h4>
            <button>Edit profile</button>
            <p>${about.bio}</p>
            <ul>
                <li>
                    <i class='bx bxs-user' ></i>
                    <p><span>${followers.length}</span> followers <span>${following.length}</span> following</p>
                </li>
                <li>
                    <i class='bx bx-location-plus' ></i>
                    <p>${about.company}</p>
                </li>
                <li>
                    <i class='bx bx-link-alt' ></i>
                    <p>${about.location}</p>
                </li>
            </ul>
            <h2>Achievements</h2>
            <div class="achiv_img">
                <img src="./aseets/images/Achievements.png" alt="Achievements">
                <img src="./aseets/images/pull shark.png" alt="pull shark">
            </div>
            <span class="beta">Beta</span>
            <span class="feedback">Send feedback</span>
            <a href="#">Block or Report</a>

    `;
  
}

async function getData(func) {
  const response = await fetch(baseUrl);
  const data = await response.json();
  func(data);
}

async function getDocData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data
};

// --------------------------------------- Events ----------------------------------------------------------------

// ------------------------------------- Callbacks ----------------------------------------------------------------
getData(RenderAboutProfile);

