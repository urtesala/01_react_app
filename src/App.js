import './App.css';

import house2 from './house2.jpg';
import house5 from './house5.jpg';

const card1 = (
  <div className='card'>
    <h4 className='card__title'> house 1</h4>
    <img className='card__img' src={house2} alt='namas' />
  </div>
);
const card2 = (
  <div className='card'>
    <h4 className='card__title'> house 2</h4>
    <img className='card__img' src={house5} alt='namas2' />
  </div>
);

// react componentas

function HousesGrid() {
  return (
    <div className='houseGrid'>
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
    </div>
  );
}

const teamItem1 = (
  <div className='teamItem'>
    <img src='/img/team1.jpg' alt='foto' />
    <h3 className='team__title'>Jane Doe</h3>
    <p className='team__occ'>Owner</p>
    <p className='team__desc'>
      Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
      pellentesque elementum
    </p>
    <button>Contact</button>
  </div>
);

const teamItem2 = (
  <div className='teamItem'>
    <img src='/img/team2.jpg' alt='foto' />
    <h3 className='team__title'>Jules Doe</h3>
    <p className='team__occ'>Architect</p>
    <p className='team__desc'>
      Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
      pellentesque elementum
    </p>
    <button>Contact</button>
  </div>
);

const teamItem3 = (
  <div className='teamItem'>
    <img src='/img/team3.jpg' alt='foto' />
    <h3 className='team__title'>Mike Ross</h3>
    <p className='team__occ'>Architect</p>
    <p className='team__desc'>
      Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
      pellentesque elementum
    </p>
    <button>Contact</button>
  </div>
);

const teamItem4 = (
  <div className='teamItem'>
    <img src='/img/team4.jpg' alt='foto' />
    <h3 className='team__title'>Dan Star</h3>
    <p className='team__occ'>Architect</p>
    <p className='team__desc'>
      Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
      pellentesque elementum
    </p>
    <button>Contact</button>
  </div>
);

function TeamGrid() {
  return (
    <div className='team'>
      {teamItem1}
      {teamItem2}
      {teamItem3}
      {teamItem4}
    </div>
  );
}

function App() {
  const name = 'James';
  return (
    <div className='App'>
      <h1 className='mainTitle'>
        Hello {name}! {55 + 432}
      </h1>
      <h2>Houses</h2>
      <HousesGrid />
      <TeamGrid />
    </div>
  );
}

export default App;
