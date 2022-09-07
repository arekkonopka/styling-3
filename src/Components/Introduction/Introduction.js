import { AiOutlineArrowRight } from 'react-icons/ai'

import Navbar from '../Navbar'
import Searchbar from '../Searchbar'
import Tab from '../Tab'

const Introduction = () => {
  return (
    <section className="introduction">
      <Navbar />
      <section className="introduction__wrapper">
        <div className="introduction__slider">
          <p className="introduction__slider--description">FLY WITH US TO</p>
          <div className="introduction__slider__tab-wrapper">
            <span></span>
            <Tab active number="01" />
            <Tab number="02" />
            <Tab number="03" />
          </div>
          <div className="introduction__content">
            <h1 className="introduction__content--header">Bangkok</h1>
            <h2 className="introduction__content--sub-header">
              A new door to Paradise for just $15000
            </h2>
            <div className="introduction__content--wrapper">
              <p>Book now till 25 Oct 2019</p>
              <p>Travel from 25 Oct 2019 to 25 Dec 2019</p>
            </div>
            <a
              className="introduction__content--anchor"
              href={`${window.location}#searchbar`}
            >
              <p>Let's Go</p>
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <Searchbar />
        {/* <div className="introduction__shadow"></div> */}
      </section>
    </section>
  )
}

export default Introduction
