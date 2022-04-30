import { PlanetsDate } from '../common/types';

interface Props {
  selected: String;
  data: PlanetsDate[];
  setSelectedData: (data: any) => void;
  setDisplayDetails: (item: boolean) => void;
}

const Card: React.FC<Props> = ({ 
  selected, 
  data, 
  setSelectedData, 
  setDisplayDetails 
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
        <div className="card" id={`${value.diameter}-${index}`}>
          <img className="cover-image" src="https://media.timeout.com/images/105863223/750/422/image.jpg" alt="back" />
          <div className="inner-content">
            <h5>{value.name}</h5>
            <p>{value.population}</p>
            <p>{value.rotation_period}</p>
            <p>{value.terrain}</p>
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
