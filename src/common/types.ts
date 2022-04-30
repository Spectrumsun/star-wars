export type FilmData = {
  characters: []
  created: string
  director: string
  edited: string
  episode_id: number
  opening_crawl: string
  planets: []
  producer: string
  release_date: string
  species: []
  starships: []
  title: string
  url: string
  vehicles: []
}

export type PeopleDate = {
  birth_year: string
  created: string
  edited: string
  eye_color: string
  films: []
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  species: []
  starships: []
  url: string
  vehicles: []
}

export type PlanetsDate = {
  climate: string
  created: string
  diameter: string
  edited: string
  films: []
  gravity: string
  name: string
  orbital_period: string
  population: string
  residents:[]
  rotation_period: string
  surface_water: string
  terrain: string
  url: string
}

export type SpeciesDate = {
  average_height: string
  average_lifespan: string
  classification: string
  created: string
  designation: string
  edited: string
  eye_colors: string
  hair_colors: string
  homeworld: string
  language: string
  name: string
  people: []
  films: []
  skin_colors: string
  url: string
}

export type StarshipsDate = {
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string,
  created: string,
  crew: string
  edited: string
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string,
  model: string
  name: string,
  passengers: string,
  films: []
  pilots: []
  starship_class: string
  url: string
}

export type VehiclesDate ={
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  pilots: []
  films:[]
  url: string
  vehicle_class: string
}