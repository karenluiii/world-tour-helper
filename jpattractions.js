const resultName = document.querySelector("#results-name");
const resultImg = document.querySelector("#results-img");
const resultText = document.querySelector("#results-text");

const jpattractions = [
  {
    name: "Nagoya",
    img: "https://media.istockphoto.com/id/475555734/photo/japanese-city-by-night-nagoya.jpg?s=612x612&w=0&k=20&c=P_hiReLsPkXLqjF7nITSfkS3UZh6JDpsJd9BET97XZg=",
    desc: "Nagoya is a fascinating city that blends industrial innovation with rich historical sites, such as the impressive Nagoya Castle and Atsuta Shrine. It’s known for its unique regional cuisine, including hitsumabushi (grilled eel) and miso-based dishes. As a major transportation hub, Nagoya offers easy access to nearby cultural and natural attractions, making it a great stop for travelers exploring Japan."
  },
  {
    name: "Osaka",
    img: "https://www.japan-guide.com/g18/4000_top.jpg",
    desc: "Osaka is a vibrant city known for its lively atmosphere, friendly locals, and exceptional street food scene, particularly in districts like Dotonbori. It offers a mix of historical landmarks, such as Osaka Castle, and modern attractions like Universal Studios Japan."
  },
  {
    name: "Mount Fuji",
    img: "https://img.freepik.com/free-photo/autumn-season-mountain-fuji-kawaguchiko-lake-japan_335224-95.jpg",
    desc: "Mount Fuji, Japan's iconic and tallest peak, offers breathtaking natural beauty and is a symbol of national pride. Visitors can hike its trails for a rewarding climb or enjoy its majestic views from nearby locations like the scenic Fuji Five Lakes. Its cultural significance, stunning scenery, and outdoor adventure opportunities make Mount Fuji a top destination for nature lovers and adventurers."
  },
  {
    name: "Tokyo",
    img: "https://t3.ftcdn.net/jpg/01/33/10/82/360_F_133108246_dmJvGcDnWaWNqTJN3uGJFq7gXL0lCHDg.jpg",
    desc: "Visitors can explore historic temples, serene gardens, and vibrant cultural sites alongside futuristic skyscrapers, high-tech shopping districts, and world-class cuisine. Its efficient public transport, safety, and diverse attractions make it a top choice for travelers seeking a unique urban experience."
  },
  {
    name: "Kyoto",
    img: "https://media.istockphoto.com/id/902966276/photo/kyoto-japan-in-spring.jpg?s=612x612&w=0&k=20&c=BKgo2TEXikd7oaZdFJ2o9VrKmG5NhNswI5YBXvhOwWA=",
    desc: "Kyoto is renowned for its rich cultural heritage, offering visitors a glimpse into Japan's traditional past with its historic temples, peaceful Zen gardens, and well-preserved shrines. Famous for its stunning seasonal landscapes, including cherry blossoms and autumn foliage, Kyoto provides a tranquil and picturesque experience."
  }
];

const doRoll = () => {
  let jpattraction = jpattractions[Math.floor(Math.random() * jpattractions.length)];
  resultName.textContent = jpattraction.name;
  resultImg.src = jpattraction.img;
  resultText.textContent = jpattraction.desc;
} 

