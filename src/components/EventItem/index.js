import './index.css'

const EvenItem = props => {
  const {itemDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = itemDetails

  const eventImgClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="img-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImgClassName} />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EvenItem
