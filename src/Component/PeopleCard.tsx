import { PeopleDate } from '../common/types';

interface Props {
  selected: String;
  data: PeopleDate[];
  setSelectedData: (data: any) => void;
  setDisplayDetails: (item: boolean) => void;
}

const Card: React.FC<Props> = ({ 
  selected, 
  data,
  setSelectedData, 
  setDisplayDetails,
}) => (
  <div className="card-body">
    {
      data.length !== 0 && (<h3>{selected}</h3>)
    }
    {
      data.length === 0 && (<h3>No Data</h3>)
    }
  <div className="event-item">
    {
      data.map((value, index) => (
        <div className="card" id={`${value.birth_year}-${index}`}>
          <img className="cover-image" src="https://www.denofgeek.com/wp-content/uploads/2022/04/Lego-Star-Wars.jpg?resize=768%2C432" alt="back" />
          <div className="inner-content">
            <h5>{value.name}</h5>
            <p>{value.gender}</p>
            <button className="button" onClick={() => {
              setSelectedData(value)
              setDisplayDetails(true)
              }}>Open</button>
          </div>
        </div> 
      ))
    }
    </div>
  </div>
)

export default Card;
