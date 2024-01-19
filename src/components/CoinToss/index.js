// Write your code here
import {Component} from 'react'

import './index.css'

const headImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    tossImageResult: headImageUrl,
  }

  onClickCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {head, tail} = this.state
    let tossImage = ''
    let latestHeadCount = head
    let latestTailCount = tail
    if (tossResult === 0) {
      tossImage = headImageUrl
      latestHeadCount += 1
    } else {
      tossImage = tailImageUrl
      latestTailCount += 1
    }
    this.setState({
      tossImageResult: tossImage,
      head: latestHeadCount,
      tail: latestTailCount,
    })
  }

  render() {
    const {head, tail, tossImageResult} = this.state
    const total = head + tail

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-text">Coin Toss Game</h1>
          <p className="para-text">Heads (or) Tails</p>
          <img src={tossImageResult} className="coin-image" alt="toss result" />
          <div className="toss-card">
            <button
              className="toss-btn"
              type="button"
              onClick={this.onClickCoinToss}
            >
              Toss Coin
            </button>
          </div>
          <div className="toss-container">
            <p className="toss-text">Total: {total}</p>
            <p className="toss-text">Heads: {head}</p>
            <p className="toss-text">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
