import './index.css'

const ShowGreetings = props => {
  const {languageDetails, updateButton, ActiveTab} = props

  const {id, imageUrl, buttonText, imageAltText} = languageDetails
  const activateBtn = ActiveTab ? 'active-btn' : ''

  const sendActiveId = () => {
    updateButton(id, imageUrl, imageAltText)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activateBtn}`}
        onClick={sendActiveId}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ShowGreetings
