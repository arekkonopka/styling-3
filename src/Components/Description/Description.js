import { MdOutlineNotStarted } from 'react-icons/md'
import Card from '../Card'
import BarUI from '../BarUI'

const Description = () => {
  return (
    <section className="description">
      <div className="description__aside">
        <BarUI />
        <h1>The Zabdos Experience</h1>
        <p className="description__aside--paragraph">
          Whether it's your first flight or simply your latest, we work to
          anticipate your every need
        </p>
        <div className="description__wideo">
          <button>
            <MdOutlineNotStarted />
          </button>
          <p>Watch the full video now!</p>
        </div>
      </div>
      <div className="description__cards-wrapper">
        <Card paragraph="ARRIVE INSPIRED" header="Business Class" />
        <Card paragraph="EXPECT THE EXCEPTIONAL" header="Economy Class" />
        <Card
          paragraph="AWARD WINNING TECHNOLOGY"
          header="Explore the Fleet in AR"
          long
        />
      </div>
    </section>
  )
}

export default Description
