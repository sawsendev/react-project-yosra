import City from "./City/City";
import { ExploreCitiesTable } from "../../../Data/Data";
import "./ExploreMore.css";

const ExploreMoreLarge = ({ lotData }) => {
  const handleClick = (e, city) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({ city }).toString();

    const url = `/search-cities?${searchParams}`;
    window.location.href = url;
  };
  const cityData = lotData.data && lotData.data.cities ? lotData.data.cities : [];
  const cities = ExploreCitiesTable.map(city => {
    const countInfo = cityData.find(cityInfo => cityInfo.city_country.toLowerCase().includes(city.city.toLowerCase()));
    const count = countInfo ? countInfo.count_lots : null;

    return (
      <City
        key={city.city} // Add a unique key for each city
        src={city.src}
        city={city.city}
        count={count}
        handleClick={(e) => handleClick(e, city.city)}
      />
    );
  });
  return (
    <div className='Explore-container container'>
      <h2>Explore our cities</h2>
      <p className='mb-4'>Located in several European cities, we offer premium accommodation for you to feel at home wherever you go</p>
      <div className="city-list d-flex justify-content-center flex-nowrap">
        {cities}
      </div>

    </div>
  )
}

export default ExploreMoreLarge;
