const resultName = document.querySelector("#results-name");
const resultImg = document.querySelector("#results-img");
const resultText = document.querySelector("#results-text");

const chnattractions = [
  {
    name: "Yunnan",
    img: "https://images.chinahighlights.com/allpicture/2019/09/577a60a31a6342e39b41aefa.webp",
    // desc: "Capital of South Korea"
  },
  {
    name: "Zhangjiajie",
    img: "https://images.chinahighlights.com/allpicture/2017/02/4a6cac8cfdb34229a77ee770.webp",
    // desc: "Province of South Korea"
  },
  {
    name: "Xiamen",
    img: "https://images.chinahighlights.com/allpicture/2019/09/18d7d50f23034c918065bdd5.webp",
    // desc: "City in South Korea"
  },
  {
  name: "Beijing",
    img: "https://images.chinahighlights.com/allpicture/2017/02/6c1f7ed146fe44f3a66d5e89.webp",
    // desc: "Address: South Korea, Gangwon-do, Sokcho-si, Seoraksan-ro, 833 KR"
  },
  {
  name: "Shanghai, Suzhou and Hangzhou",
    img: "https://images.chinahighlights.com/allpicture/2017/02/90d2c6b90f3d4030bb1cf83a.webp",
    // desc: "City in South Korea"
  }
];

const doRoll = () => {
  let chnattraction = chnattractions[Math.floor(Math.random() * chnattractions.length)];
  resultName.textContent = chnattraction.name;
  resultImg.src = chnattraction.img;
  resultText.textContent = chnattraction.desc;
} 

