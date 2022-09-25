import {
  AiOutlineCalendar,
  AiOutlineShopping,
  AiOutlineCoffee,
  AiOutlineThunderbolt,
  AiFillCar,
} from 'react-icons/ai'
import { GiKnifeFork } from 'react-icons/gi'

import Service from '../Service/Service'

const Services = () => {
  return (
    <section className="services">
      <div className="services__header-wrapper">
        <h1 className="services__header">Complement Your Jurney</h1>
        <p className="services__paragraph">
          Explore the additional services we offer to make your journey even
          more memorable
        </p>
      </div>
      <div className="services__wrapper">
        <Service icon={<AiOutlineCalendar />} title="Manage Booking" active />
        <Service icon={<AiOutlineShopping />} title="Excess baggage" />
        <Service icon={<AiOutlineCoffee />} title="Paid Lounge Access" />
        <Service icon={<GiKnifeFork />} title="Oryx Aiport Hotel" />
        <Service icon={<AiOutlineThunderbolt />} title="Al Maha Services" />
        <Service icon={<AiFillCar />} title="Car Rentals" />
      </div>
    </section>
  )
}

export default Services
