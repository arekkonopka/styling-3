import { GiAirplaneDeparture } from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <GiAirplaneDeparture className="navbar__icon" />
        <p className="navbar__name">Zabdos</p>
      </div>
      <div className="navbar__wrapper">
        <p className="navbar__flight-status">Flight Status</p>
        <button className="navbar__check">Check In</button>
        <div className="navbar__avatar"></div>
        <button className="navbar__burger-menu">
          <span className="navbar__burger-menu-line"></span>
          <span className="navbar__burger-menu-line"></span>
          <span className="navbar__burger-menu-line"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
