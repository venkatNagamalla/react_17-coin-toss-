import {Component} from 'react'

import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, coinImg: headsImg}

  onCoinToss = () => {
    const {headsCount, tailsCount} = this.state
    const num = Math.floor(Math.random() * 2)
    let tossImg = ''
    let heads = headsCount
    let tails = tailsCount
    if (num === 0) {
      tossImg = headsImg
      heads += 1
    } else {
      tossImg = tailsImg
      tails += 1
    }
    this.setState({headsCount: heads, tailsCount: tails, coinImg: tossImg})
  }

  render() {
    const {coinImg, headsCount, tailsCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="coin-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="coin-img" src={coinImg} alt="toss result" />
          <button type="button" className="toss-btn" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <ul className="list-container">
            <li>
              <p className="list-element">Total: {headsCount + tailsCount}</p>
            </li>
            <li>
              <p className="list-element">Heads: {headsCount}</p>
            </li>
            <li>
              <p className="list-element">Tails: {tailsCount}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
