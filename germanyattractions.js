const resultName = document.querySelector("#results-name");
const resultImg = document.querySelector("#results-img");
const resultText = document.querySelector("#results-text");

const germanyattractions = [
  {
    name: "Munich",
    img: "https://thumbs.dreamstime.com/b/munich-germany-aerial-image-christmas-market-christmas-decoration-sunset-35728168.jpg",
    desc: "Munich, Bavaria’s capital, is home to centuries-old buildings and numerous museums. The city is known for its annual Oktoberfest celebration and its beer halls, including the famed Hofbräuhaus, founded in 1589."
  },
  {
    name: "Berlin",
    img: "https://media.istockphoto.com/id/503874284/photo/berlin-skyline-with-spree-river-at-sunset-germany.jpg?s=612x612&w=0&k=20&c=gnrw-SQQq9Niao93SU4djAgGXi-5LRBNkSRiwwX96Tk=",
    desc: "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks."
  },
  {
    name: "Neuschwanstein",
    img: "https://cdn.britannica.com/11/179711-138-F5C2AEAB/Overview-Neuschwanstein-Castle-Fussen-Germany.jpg?w=800&h=450&c=crop",
    desc: "Neuschwanstein Castle is a 19th-century historicist palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany."
  },
  {
    name: "Cologne Cathedral",
    img: "https://www.aesu.com/wp-content/uploads/2020/03/europe-4272297_640.jpg",
    desc: "Cologne Cathedral is a Catholic cathedral in Cologne, North Rhine-Westphalia. It is the seat of the Archbishop of Cologne and of the administration of the Archdiocese of Cologne. It is a renowned monument of German Catholicism and Gothic architecture and was declared a World Heritage Site in 1996."
  },
  {
    name: "Black Forest Baden-Württenberg",
    img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/8b/0d/92.jpg",
    desc: "The Black Forest is a mountainous region in southwest Germany, bordering France. Known for its dense, evergreen forests and picturesque villages, it is often associated with the Brothers Grimm fairy tales. It's renowned for its spas and the cuckoo clocks produced in the region since the 1700s."
  }
];

const doRoll = () => {
  let germanyattraction = germanyattractions[Math.floor(Math.random() * germanyattractions.length)];
  resultName.textContent = germanyattraction.name;
  resultImg.src = germanyattraction.img;
  resultText.textContent = germanyattraction.desc;
} 

