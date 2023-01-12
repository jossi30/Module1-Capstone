/* mobile menu */
function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

/* speakers section */
const speakers = [
  {
    id: 1,
    name: 'Florentino Perez',
    title: 'President of Real Madrid CF',
    description: 'Florentino Pérez Rodríguez is a Spanish businessman, civil engineer, former politician, and the current president of Real Madrid as well as Chairman and CEO of Grupo ACS, a civil engineering company',
    image: 'img/perez.jpg',
  },
  {
    id: 2,
    name: 'Mark Cuban',
    title: 'Majority owner of Dallas Mavericks',
    description: 'Mark Cuban is an American billionaire entrepreneur, He is the owner of the Dallas Mavericks professional basketball team of the National Basketball Association (NBA) and the co-owner of 2929 Entertainment',
    image: 'img/cuban1.jpg',
  },
  {
    id: 3,
    name: 'Dana White',
    title: 'President of Ultimate Fighting Championship',
    description: 'Dana Frederick White Jr. is an American businessman who serves as president of the Ultimate Fighting Championship, a global mixed martial arts organization.',
    image: 'img/Dana-White.png',
  },
  {
    id: 4,
    name: 'Jerry Jones',
    title: 'Owner, President, and GM of the Dallas Cowboys',
    description: 'Jerral Wayne Jones is an American businessman who has been the owner, president, and general manager of the Dallas Cowboys of the National Football League since February 1989.',
    image: 'img/jones.jpg',
  },
  {
    id: 5,
    name: 'Masai Ujiri',
    title: 'President of the International Olympic Committee',
    description: 'Masai Ujiri is a British-born, Nigerian-Canadian professional basketball executive and former player and is the president of basketball operations of the Toronto Raptors in the National Basketball Association.',
    image: 'img/Ujiri.jpg',
  },
  {
    id: 6,
    name: 'Thomas Bach',
    title: 'President of the International Olympic Committee',
    description: 'Thomas Bach OLY is a German lawyer, former Olympic foil fencer and Olympic gold medalist, serving as the ninth and current president of the International Olympic Committee since 10 September 2013.',
    image: 'img/thomas-bach.jpg',
  },
];

const speakerContainer = document.getElementById('speakers');

function createSpeakerHtml(speaker) {
  const speakerItem = document.createElement('li');
  speakerItem.classList.add('speaker-item');

  const html = `
    <div class="image-wrapper">
      <img class="speaker-img" src=${speaker.image} alt="Speaker">
    </div>
    <div class="speaker-info">
      <h3 class="speaker-name">${speaker.name}</h3>
      <span class="speaker-title">${speaker.title}</span>
      <div class="speaker-divder"></div>
      <p class="speaker-description">${speaker.description}</p>
    </div>
  `;
  speakerItem.innerHTML = html;
  speakerContainer.appendChild(speakerItem);
}

speakers.forEach((speaker) => createSpeakerHtml(speaker));
closeNav.addEventListener('click');
openNav.addEventListener('click');