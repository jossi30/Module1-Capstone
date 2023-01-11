/* mobile menu */
function openNav() {
    document.getElementById('myNav').style.height = '100%';
  }
  
  function closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }
  
  /* speakers section */
  const speaker1 = {
    name: 'Florentino Perez',
    img: ['img/perez.jpg'],
    position: 'President of Real Madrid CF',
    info: 'Florentino Pérez Rodríguez is a Spanish businessman, civil engineer, former politician, and the current president of Real Madrid as well as Chairman and CEO of Grupo ACS, a civil engineering company.',
  };
  const speaker2 = {
    name: 'Mark Cuban',
    img: ['img/cuban1.jpg'],
    position: 'Majority owner of Dallas Mavericks',
    info: 'Mark Cuban is an American billionaire entrepreneur, He is the owner of the Dallas Mavericks professional basketball team of the National Basketball Association (NBA) and the co-owner of 2929 Entertainment',
  };
  const speaker3 = {
    name: 'Dana White',
    img: ['img/Dana-White.png'],
    position: 'President of Ultimate Fighting Championship',
    info: 'Dana Frederick White Jr. is an American businessman who serves as president of the Ultimate Fighting Championship, a global mixed martial arts organization. ',
  };
  const speaker4 = {
    name: 'Jerry Jones',
    img: ['img/jones.jpg'],
    position: 'Owner, President, and GM of the Dallas Cowboys',
    info: 'Jerral Wayne Jones is an American businessman who has been the owner, president, and general manager of the Dallas Cowboys of the National Football League since February 1989.',
  };
  const speaker5 = {
    name: 'Thomas Bach',
    img: ['img/thomas-bach.jpg'],
    position: 'President of the International Olympic Committee',
    info: 'Thomas Bach OLY is a German lawyer, former Olympic foil fencer and Olympic gold medalist, serving as the ninth and current president of the International Olympic Committee since 10 September 2013.',
  };
  const speaker6 = {
    name: 'Masai Ujiri',
    img: ['img/Ujiri.jpg'],
    position: 'President of the Toronto Raptors',
    info: 'Masai Ujiri is a British-born, Nigerian-Canadian professional basketball executive and former player and is the president of basketball operations of the Toronto Raptors in the National Basketball Association.',
  };
  
  const array = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];
  
  const section = document.createElement('section');
  section.className = 'speakers';
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Featured Speakers';
  section.appendChild(h2);
  
  const div = document.createElement('div');
  div.className = 'speaker-container';
  section.appendChild(div);
  
  for (let i = 0; i < array.length; i += 1) {
    const divS = document.createElement('div');
    divS.className = 'speakerP';
    div.appendChild(divS);
  
    const divIMG = document.createElement('div');
    divIMG.className = 'img-speaker';
    divS.appendChild(divIMG);
  
    const img = document.createElement('img');
    img.src = `${array[i].img}`;
    divIMG.appendChild(img);
  
    const divInfo = document.createElement('div');
    divInfo.className = 'info-speaker';
    divS.appendChild(divInfo);
  
    const h2Info = document.createElement('h2');
    h2Info.textContent = `${array[i].name}`;
    divInfo.appendChild(h2Info);
  
    const h3Info = document.createElement('h3');
    h3Info.textContent = `${array[i].position}`;
    divInfo.appendChild(h3Info);
  
    const pInfo = document.createElement('p');
    pInfo.textContent = `${array[i].info}`;
    divInfo.appendChild(pInfo);
  }
  
  const list = document.querySelector('.speakers-section');
  
  window.addEventListener('load', () => {
    if (typeof (list) !== 'undefined' && list != null) {
      list.after(section);
    }
  });
  
  closeNav.addEventListener('click');
  openNav.addEventListener('click');