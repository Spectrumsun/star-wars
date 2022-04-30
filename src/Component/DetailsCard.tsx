interface Props {
  selected: String;
  selectedData: any;
  type: string;
}

const DetailsCard: React.FC<Props> = ({ type, selectedData }) => (
  <div className="modal-content">
    <img 
      className="modal-background"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" 
      alt="side"
    />
    {
      type === 'films' && (
        <div className="modal-details">
        <h3>{selectedData?.title}</h3>
        <p><span>Date: </span> {selectedData?.director}</p>
        <p><span>Edited: </span>{selectedData?.edited}</p>
        <p><span>Episode_id: </span>{selectedData?.episode_id}</p>
        <p><span>Producer: </span>{selectedData?.producer}</p>
        <p><span>Release date: </span>{selectedData?.release_date}</p>
        <p><span>URL: </span>{selectedData?.url}</p>
        <p><span></span>{selectedData?.opening_crawl}</p>
      </div>
      )
    }
    {
      type === 'people' && (
        <div className="modal-details">
        <h3>{selectedData?.name}</h3>
        <p><span>Birth year: </span> {selectedData?.birth_year}</p>
        <p><span>Edited: </span>{selectedData?.edited}</p>
        <p><span>Eye color: </span>{selectedData?.eye_color}</p>
        <p><span>Gender: </span>{selectedData?.gender}</p>
        <p><span>Hair_color: </span>{selectedData?.hair_color}</p>
        <p><span>height: </span>{selectedData?.height}</p>
        <p><span>Homeworld: </span>{selectedData?.homeworld}</p>
        <p><span>Mass: </span>{selectedData?.mass}</p>
        <p><span>Skin_color: </span>{selectedData?.skin_color}</p>
        <p><span>Url: </span>{selectedData?.url}</p>
      </div>
      )
    }
    {
      type === 'planets' && (
        <div className="modal-details">
        <h3>{selectedData?.name}</h3>
        <p><span>Climate: </span> {selectedData?.climate}</p>
        <p><span>Diameter: </span>{selectedData?.diameter}</p>
        <p><span>Edited: </span>{selectedData?.edited}</p>
        <p><span>Gravity: </span>{selectedData?.gravity}</p>
        <p><span>Rotation period: </span>{selectedData?.rotation_period}</p>
        <p><span>Surface_water: </span>{selectedData?.surface_water}</p>
        <p><span>Terrain: </span>{selectedData?.terrain}</p>
        <p><span>URL: </span>{selectedData?.url}</p>
      </div>
      )
    }
    {
      type === 'species' && (
        <div className="modal-details">
        <h3>{selectedData?.name}</h3>
        <p><span>Average height: </span> {selectedData?.average_height}</p>
        <p><span>Average lifespan: </span>{selectedData?.average_lifespan}</p>
        <p><span>Classification: </span>{selectedData?.classification}</p>
        <p><span>Designation: </span>{selectedData?.designation}</p>
        <p><span>Edited: </span>{selectedData?.edited}</p>
        <p><span>Eye colors: </span>{selectedData?.eye_colors}</p>
        <p><span>Hair colors: </span>{selectedData?.hair_colors}</p>
        <p><span>Homeworld: </span>{selectedData?.homeworld}</p>
        <p><span>Language: </span>{selectedData?.language}</p>
        <p><span>Skin colors: </span>{selectedData?.skin_colors}</p>
        <p><span>URL: </span>{selectedData?.url}</p>
      </div>
      )
    }
    {
      type === 'starships' && (
        <div className="modal-details">
        <h3>{selectedData?.name}</h3>
        <p><span>MGLT: </span> {selectedData?.MGLT}</p>
        <p><span>Cargo capacity: </span>{selectedData?.cargo_capacity}</p>
        <p><span>Consumables: </span>{selectedData?.consumables}</p>
        <p><span>Cost in credits: </span>{selectedData?.cost_in_credits}</p>
        <p><span>Crew: </span>{selectedData?.crew}</p>
        <p><span>Edited: </span>{selectedData?.edited}</p>
        <p><span>Hyperdrive rating: </span>{selectedData?.hyperdrive_rating}</p>
        <p><span>Length: </span>{selectedData?.length}</p>
        <p><span>Manufacturer: </span>{selectedData?.manufacturer}</p>
        <p><span>Max atmosphering speed: </span>{selectedData?.max_atmosphering_speed}</p>
        <p><span>Model: </span>{selectedData?.model}</p>
        <p><span>Passengers: </span>{selectedData?.passengers}</p>
        <p><span>Starship class: </span>{selectedData?.starship_class}</p>
        <p><span>URL: </span>{selectedData?.url}</p>
      </div>
      )
    }
    {
      type === 'vehicles' && (
        <div className="modal-details">
        <h3>{selectedData?.name}</h3>
        <p><span>Cargo capacity: </span> {selectedData?.cargo_capacity}</p>
        <p><span>Consumables: </span>{selectedData?.consumables}</p>
        <p><span>Cost in credits: </span>{selectedData?.cost_in_credits}</p>
        <p><span>Crew: </span>{selectedData?.crew}</p>
        <p><span>Edited: </span>{selectedData?.edited}</p>
        <p><span>Length: </span>{selectedData?.length}</p>
        <p><span>Manufacturer: </span>{selectedData?.manufacturer}</p>
        <p><span>Max atmosphering speed: </span>{selectedData?.max_atmosphering_speed}</p>
        <p><span>Passengers: </span>{selectedData?.passengers}</p>
        <p><span>Vehicle class: </span>{selectedData?.vehicle_class}</p>
        <p><span>URL: </span>{selectedData?.url}</p>
      </div>
      )
    }
  </div>
);

export default DetailsCard;
