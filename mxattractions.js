const resultName = document.querySelector("#results-name");
const resultImg = document.querySelector("#results-img");
const resultText = document.querySelector("#results-text");

const mxattractions = [
  {
    name: "Mexico City",
    img: "https://cdn.britannica.com/08/95008-050-1BA29F61/Central-Mexico-City.jpg",
    desc: "Mexico City is the nation’s capital. Vibrant, multifaceted and always on the move. It is the political, economic and cultural core of the Mexican Republic."
  },
  {
    name: "Cancun",
    img: "https://media.istockphoto.com/photos/cancun-beach-coast-with-sunsets-picture-id1286528283?b=1&k=20&m=1286528283&s=170667a&w=0&h=5Anw37mzNoBmnPbkuupQ3Dnw2dj-No4Fr4KEUH3KxmU=",
    desc: "With its gorgeous turquoise seas, powdery white-sand beaches, and vibrant coral reefs, it’s no surprise that Cancun is one of Mexico’s most popular resort areas."
  },
  {
    name: "Puerto Vallarta",
    img: "https://tourscanner.com/blog/wp-content/uploads/2021/07/things-to-do-in-Puerto-Vallarta.jpg",
    desc: "Puerto Vallarta is defined by the natural charm of its beaches embraced by the Sierra Madre mountains; the essence of its culture, gastronomy and traditions; and the warmth and hospitality of being welcomed like a friend."
  },
  {
  name: "Chichén Itzá",
    img: "https://static1.evcdn.net/images/reduction/1243559_w-850_h-400_q-100_m-crop.jpg",
    desc: "The centuries-old ruins of Chichen Itza undoubtedly are one of the most visited archeological sites and tourist attractions in Mexico. While the crowds can be daunting in peak season, the mysterious Mayan pyramids rarely fail to awe even the most experienced of travelers."
  },
  {
    name: "San Juan Teotihuacán",
    img: "https://www.gob.mx/cms/uploads/article/main_image/87421/Teotihuaca_n-Zona-Arqueolo_gica-vista-web.jpg",
    desc: "San Juan Teotihuacán has many popular attractions, including Pyramid of the Sun, Pyramid of the Moon, la Calzada de los Muertos, making it well worth a visit."
  }
];

const doRoll = () => {
  let mxattraction = mxattractions[Math.floor(Math.random() * mxattractions.length)];
  resultName.textContent = mxattraction.name;
  resultImg.src = mxattraction.img;
  resultText.textContent = mxattraction.desc;
} 

