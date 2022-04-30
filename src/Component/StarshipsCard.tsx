import { StarshipsDate } from '../common/types';

interface Props {
  selected: String;
  data: StarshipsDate[];
  setSelectedData: (data: any) => void;
  setDisplayDetails: (item: boolean) => void;
}

const Card: React.FC<Props> = ({ selected, data, setSelectedData, setDisplayDetails  }) => (
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
        <div className="card" id={`${value.hyperdrive_rating}-${index}`}>
          <img className="cover-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="back" />
          <div className="inner-content">
            <h5>{value.name}</h5>
            <p>{value.cargo_capacity}</p>
            <p>{value.cost_in_credits}</p>
            <p>{value.hyperdrive_rating}</p>
            <button className="button" onClick={() => {
              setSelectedData(value)
              setDisplayDetails(true)
              }}>Open
            </button>
          </div>
        </div> 
      ))
    }
    </div>
  </div>
)

export default Card;
