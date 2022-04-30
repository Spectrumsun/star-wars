/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getRequest } from './common/apiCall';
import Nav from './Component/NavBar';
import FilmCard from './Component/FilmCard';
import PeopleDate from './Component/PeopleCard';
import PlanetsCard from './Component/PlanetsCard';
import SpeciesDate from './Component/SpeciesCard';
import StarshipsCard from './Component/StarshipsCard';
import VehiclesCard from './Component/VehiclesCard';
import DetailsCard from './Component/DetailsCard';

const Landing = () => {
  const [selected, setSelected] = useState<string>('films')
  const [searchItem, setSearchItem] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any>({});
  const [displayDetails, setDisplayDetails] = useState<boolean>(false);
  const { isLoading, data } = useQuery(['films', selected, searchItem], async () => await getRequest({ url: `${selected}?search=${searchItem}` }));

  const DisplayType: { [key: string]: any } = {
    films: <FilmCard 
              selected={selected} 
              data={data?.results} 
              setSelectedData={setSelectedData}
              setDisplayDetails={setDisplayDetails}
            />,
    people: <PeopleDate 
                selected={selected} 
                data={data?.results} 
                setSelectedData={setSelectedData} 
                setDisplayDetails={setDisplayDetails}
              />,
    planets: <PlanetsCard 
                selected={selected} 
                data={data?.results} 
                setSelectedData={setSelectedData}
                setDisplayDetails={setDisplayDetails}
              />,
    species: <SpeciesDate 
                selected={selected} 
                data={data?.results} 
                setSelectedData={setSelectedData}
                setDisplayDetails={setDisplayDetails}
              />,
    starships: <StarshipsCard 
                  selected={selected} 
                  data={data?.results} 
                  setSelectedData={setSelectedData}
                  setDisplayDetails={setDisplayDetails}
                />,
    vehicles: <VehiclesCard 
                selected={selected} 
                data={data?.results} 
                setSelectedData={setSelectedData}
                setDisplayDetails={setDisplayDetails}
              />
  }

  const LoadingScreen = () => (
    <div className="lds-hourglass"></div>
  )

  useEffect(() => {
    if(displayDetails) {
      const check = searchHistory.includes(searchItem);
      if(check) {
        return
      }else {
        setSearchHistory([...searchHistory, searchItem])
      }
    }
  }, [displayDetails])

  return (
    <div>
      <Nav 
        setSelected={setSelected}
        selected={selected} 
        setDisplayDetails={setDisplayDetails}
        setSearchItem={setSearchItem}
      />
      {
        !displayDetails && (
          <div className="search-wrapper">
            <input 
              title="Search" 
              value="Search" 
              type="submit" 
              className="button-search" 
            />
            <input 
              type="text" 
              className="textbox" 
              placeholder="Search" 
              value={searchItem} 
              name="searchItem" 
              onChange={(e) => setSearchItem(e.target.value)} 
            />
          </div>
        )
      }
      <section className="container">
        {
          displayDetails && (
            <button 
            className="back" 
            onClick={() => {
              setDisplayDetails(false)
              setSearchItem('')
            }}>
              Back
          </button>
          )
        }
        {
        !displayDetails && searchHistory.length !== 0 && (
          <div className="search-cover">
            <p className="search-title">Search History</p>
            {
              searchHistory.map((Search, index) => (
                <span 
                  key={index} 
                  className="search-title" 
                  onClick={() => setSearchItem(Search)}>{Search}</span>
              ))
            }
          </div>
        )
        
        }
        {
          isLoading 
          ? <LoadingScreen />
          : displayDetails ? <DetailsCard selected={selected} selectedData={selectedData} type={selected}/> 
          : DisplayType[selected]
          
        }
      </section>
    </div>
  )
};



export default Landing;
