const resultName = document.querySelector("#results-name");
const resultImg = document.querySelector("#results-img");
const resultText = document.querySelector("#results-text");

const caattractions = [
  {
    name: "Vancouver",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1200px-Concord_Pacific_Master_Plan_Area.jpg",
    desc: "The City of Vancouver is a coastal, seaport city on the mainland of British Columbia. Located on the western half of the Burrard Peninsula, Vancouver is bounded to the north by English Bay and the Burrard Inlet and to the south by the Fraser River."
  },
  {
    name: "Toronto",
    img: "https://images.adsttc.com/media/images/650b/778f/b136/681e/6817/1ee7/newsletter/toronto-architecture-city-guide-30-modern-and-contemporary-attractions-in-canadas-largest-city_37.jpg?1695250340",
    desc: "Toronto is Canada's largest city and a world leader in such areas as business, finance, technology, entertainment and culture. Its large population of immigrants from all over the globe has also made Toronto one of the most multicultural cities in the world."
  },
  {
    name: "Whistler",
    img: "https://assets3.thrillist.com/v1/image/2794666/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
    desc: "You'll find Whistler in the Coast Mountains of British Columbia just two hours north of Vancouver. This legendary resort is an international mountain sports mecca and a down-to-earth mountain town."
  },
  {
    name: "Victoria",
    img: "https://canadarailvacations.com/media/canada-victoria-banner-mobile.jpg",
    desc: "Victoria is a city whose British heritage and colonial past can be seen clearly in its architecture, gardens, museums, urban squares, place-names, and English-style."
  },
  {
    name: "Banff",
    img: "https://www.erikastravels.com/wp-content/uploads/2015/11/Lake-Moraine-in-Banff-Canada-1.jpg",
    desc: "Banff is a resort town and one of Canada's most popular tourist destinations. Known for its mountainous surroundings and hot springs, it is a destination for outdoor sports and features extensive hiking, biking, scrambling and skiing destinations within the area."
  }
];

const doRoll = () => {
  let caattraction = caattractions[Math.floor(Math.random() * caattractions.length)];
  resultName.textContent = caattraction.name;
  resultImg.src = caattraction.img;
  resultText.textContent = caattraction.desc;
} 

