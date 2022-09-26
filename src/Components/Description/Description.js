import { MdOutlineNotStarted } from 'react-icons/md'
import Card from '../Card'

const Description = () => {
  return (
    <section className="description">
      <div className="description__aside">
        <h1 className="description__header">The Zabdos Experience</h1>
        <p className="description__paragraph">
          Whether it's your first flight or simply your latest, we work to
          anticipate your every need
        </p>
        <button className="description__video">
          <MdOutlineNotStarted className="description__video-icon" />
          <p className="description__video-paragraph">
            Watch the full video now!
          </p>
        </button>
      </div>
      <div className="description__cards-wrapper">
        <Card paragraph="ARRIVE INSPIRED" header="Business Class" />
        <Card paragraph="EXPECT THE EXCEPTIONAL" header="Economy Class" />
        <Card
          paragraph="AWARD WINNING TECHNOLOGY"
          header="Explore the Fleet in AR"
          islong
        />
      </div>
    </section>
  )
}

export default Description
