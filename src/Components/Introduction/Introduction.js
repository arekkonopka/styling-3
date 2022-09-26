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
          <p className="introduction__description">fly with us to</p>
          <div className="introduction__tab-wrapper">
            <Tab isActive number="01" />
            <Tab number="02" />
            <Tab number="03" />
          </div>
          <div className="introduction__content-wrapper">
            <h1 className="introduction__content-header">Bangkok</h1>
            <h2 className="introduction__content-sub-header">
              A new door to Paradise for just $15000
            </h2>
            <div className="introduction__info">
              <p className="introduction__info-paragraph">
                Book now till 25 Oct 2019
              </p>
              <p className="introduction__info-paragraph">
                Travel from 25 Oct 2019 to 25 Dec 2019
              </p>
            </div>
            <a
              className="introduction__anchor"
              href={`${window.location}#searchbar`}
            >
              <p className="introduction__anchor-paragraph">Let's Go</p>
              <AiOutlineArrowRight className="introduction__anchor-icon" />
            </a>
          </div>
        </div>
        <Searchbar />
      </section>
    </section>
  )
}

export default Introduction
