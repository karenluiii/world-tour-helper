const resultName = document.querySelector("#results-name");
const resultImg = document.querySelector("#results-img");
const resultText = document.querySelector("#results-text");

const koreaattractions = [
  {
    name: "Seoul",
    img: "https://www.touropia.com/gfx/d/best-places-to-visit-in-south-korea/seoul.jpg",
    desc: "Capital of South Korea"
  },
  {
    name: "Jeju Island",
    img: "https://www.touropia.com/gfx/d/best-places-to-visit-in-south-korea/jeju_island.jpg",
    desc: "Province of South Korea"
  },
  {
    name: "Andong",
    img: "https://static.trip101.com/paragraph_media/pictures/002/214/078/large/800px-Korea-Andong-Dosan_Seowon_3025-06.JPG?1599634950",
    desc: "City in South Korea"
  },
  {
  name: "Seoraksan National Park",
    img: "https://thumbs.dreamstime.com/b/mountain-buddhist-temple-seoraksan-national-park-south-korea-landscape-50261782.jpg",
    desc: "Address: South Korea, Gangwon-do, Sokcho-si, Seoraksan-ro, 833 KR"
  },
  {
  name: "Busan",
    img: "https://media.timeout.com/images/105746183/750/422/image.jpg",
    desc: "City in South Korea"
  }
];

const doRoll = () => {
  let koreaattraction = koreaattractions[Math.floor(Math.random() * koreaattractions.length)];
  resultName.textContent = koreaattraction.name;
  resultImg.src = koreaattraction.img;
  resultText.textContent = koreaattraction.desc;
} 

