import { ImAirplane } from 'react-icons/im'

const Searchbar = () => {
  return (
    <div className="searchbar" id="searchbar">
      <ImAirplane />
      <div className="searchbar__content">
        <div className="searchbar__airports">
          <p>Departure airport</p>
          <select name="places">
            <option value="Mumbai">Mumbai (BOM)</option>
            <option value="Aalborg">Aalborg (AAL)</option>
          </select>
        </div>
        <div className="searchbar__airports">
          <p>Departure airport</p>
          <select name="places">
            <option value="Aalborg">Aalborg (AAL)</option>
            <option value="Mumbai">Mumbai (BOM)</option>
          </select>
        </div>
      </div>
      <button className="searchbar__button">Search</button>
    </div>
  )
}

export default Searchbar
