/* eslint-disable jsx-a11y/anchor-is-valid */

interface Props {
  setSelected: (type: string) => void;
  selected: string;
  setDisplayDetails: (value: boolean) => void;
  setSearchItem: (value: string) => void;
}

const NavBar: React.FC<Props> = ({ 
  setSelected, 
  selected, 
  setDisplayDetails, 
  setSearchItem 
}) => {
  return (
    <>
      <div className="alert-container">
      <img 
        className="background-image" 
        src="https://media.timeout.com/images/105863223/750/422/image.jpg" alt="background" 
      />
      <nav>
        <div>
          <h4>Starwars</h4>
        </div>
        </nav>
      </div>
      <nav className="sticky">
        <div id="navbar">
          <ul 
            onClick={() => {
              setDisplayDetails(false)
              setSearchItem('');
            }}>
            <li 
              onClick={() => setSelected('films')} 
              className={`${selected === 'films' && `active-li`}`}>
                <a className={`${selected === 'films' && `active-a`}`}>
                Films
              </a>
            </li>
            <li 
              onClick={() => setSelected('people')} 
              className={`${selected === 'people' && `active-li`}`}>
                <a className={`${selected === 'people' && `active-a`}`}>
                People
              </a>
            </li>
            <li 
              onClick={() => setSelected('planets')} 
              className={`${selected === 'planets' && `active-li`}`}>
                <a className={`${selected === 'planets' && `active-a`}`}>
                  Planets
                </a>
              </li>
            <li 
              onClick={() => setSelected('species')} 
              className={`${selected === 'species' && `active-li`}`}>
                <a className={`${selected === 'species' && `active-a`}`}>
                  Species
                </a>
            </li>
            <li 
              onClick={() => setSelected('starships')} 
              className={`${selected === 'starships' && `active-li`}`}>
                <a className={`${selected === 'starships' && `active-a`}`}>
              Starships
              </a>
            </li>
            <li 
              onClick={() => setSelected('vehicles')} 
              className={`${selected === 'vehicles' && `active-li`}`}>
                <a className={`${selected === 'vehicles' && `active-a`}`}>
                  Vehicles
                </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

}

export default NavBar;

