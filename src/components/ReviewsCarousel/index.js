// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickedBackward = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickedForward = () => {
    const {index} = this.state
    if (index !== 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const displayProfile = reviewsList[index]
    const {imgUrl, username, companyName, description} = displayProfile

    return (
      <div className="app-container">
        <div className="display-container">
          <h1 className="heading">Reviews</h1>
          <img alt={username} className="profile-icon" src={imgUrl} />
          <div className="arrow-container">
            <div className="button-container">
              <button
                type="button"
                className="button-class"
                onClick={this.onClickedBackward}
                testid="leftArrow"
              >
                <img
                  className="arrow-image"
                  alt="left arrow"
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                />
              </button>
            </div>
            <p className="username-para">{username}</p>
            <div className="button-container">
              <button
                type="button"
                className="button-class"
                onClick={this.onClickedForward}
                testid="rightArrow"
              >
                <img
                  className="arrow-image"
                  alt="right arrow"
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                />
              </button>
            </div>
          </div>
          <p>{companyName}</p>
          <p className="para-description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
