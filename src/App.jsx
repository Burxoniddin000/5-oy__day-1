import "./app.scss";
import rasm from "./Path.svg"
import './main.scss'
import search from './search.svg'
import grmaniya from './Germany.png'

function App() {
  return (
    <>
      <header className='container sitx__header'>
        <div>
          <h1 className="haeader__taxt">
            Where in the world?
          </h1>
        </div>
        <div className="header__img">
          <img src={rasm} alt="img" />
          <p className="header__darc">Dark Mode</p>
        </div>
      </header>

      <main className="main">
        <div className="container">
        <section className="main__section">
          <div className="main__inner">
            <img src={search} alt="sarch" />
            <input type="text" className="main__input" />
          </div>
          <div className="main__select">
          <select className="input__select" name="cars" id="cars">
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="ame">Filter by Region</option>
            </select>
          </div>
        </section>
        <section>
          <ul className="main__ul">
            <li className="item">
              <img src={grmaniya} alt="" />
              <div className="item__div">
              <h2 className="item__name">Germany</h2>
              <p className="item__populat">Population: 81,770,900</p>
              <p className="item__populat">Region: Europe</p>
              <p className="item__populat">Capital: Berlin</p>
              </div>
            </li>
            <li className="item">
              <img src={grmaniya} alt="" />
              <div className="item__div">
              <h2 className="item__name">Germany</h2>
              <p className="item__populat">Population: 81,770,900</p>
              <p className="item__populat">Region: Europe</p>
              <p className="item__populat">Capital: Berlin</p>
              </div>
            </li>
            <li className="item">
              <img src={grmaniya} alt="" />
              <div className="item__div">
              <h2 className="item__name">Germany</h2>
              <p className="item__populat">Population: 81,770,900</p>
              <p className="item__populat">Region: Europe</p>
              <p className="item__populat">Capital: Berlin</p>
              </div>
            </li>
            <li className="item">
              <img src={grmaniya} alt="" />
              <div className="item__div">
              <h2 className="item__name">Germany</h2>
              <p className="item__populat">Population: 81,770,900</p>
              <p className="item__populat">Region: Europe</p>
              <p className="item__populat">Capital: Berlin</p>
              </div>
            </li>
            <li className="item">
              <img src={grmaniya} alt="" />
              <div className="item__div">
              <h2 className="item__name">Germany</h2>
              <p className="item__populat">Population: 81,770,900</p>
              <p className="item__populat">Region: Europe</p>
              <p className="item__populat">Capital: Berlin</p>
              </div>
            </li>
            <li className="item">
              <img src={grmaniya} alt="" />
              <div className="item__div">
              <h2 className="item__name">Germany</h2>
              <p className="item__populat">Population: 81,770,900</p>
              <p className="item__populat">Region: Europe</p>
              <p className="item__populat">Capital: Berlin</p>
              </div>
            </li>
            <li className="item">
              <img src={grmaniya} alt="" />
              <div className="item__div">
              <h2 className="item__name">Germany</h2>
              <p className="item__populat">Population: 81,770,900</p>
              <p className="item__populat">Region: Europe</p>
              <p className="item__populat">Capital: Berlin</p>
              </div>
            </li>
              <li className="item">
                <img src={grmaniya} alt="" />
                <div className="item__div">
                <h2 className="item__name">Germany</h2>
                <p className="item__populat">Population: 81,770,900</p>
                <p className="item__populat">Region: Europe</p>
                <p className="item__populat">Capital: Berlin</p>
                </div>
              </li>
          </ul>
        </section>
        </div>
      </main>
    </>
  );
}

export default App;
