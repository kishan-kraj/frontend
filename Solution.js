import React from "react";
import abc from './abc';



class App extends React.Component {

  render() {

    return (
      <div className="main">

        <div class="a">
          <div className="b">
            <p>Quantity: {abc[0].Quantity + abc[1].Quantity + abc[2].Quantity}</p>
            <p>Avg Cost: {abc[0].AvgCost + abc[1].AvgCost + abc[2].AvgCost}</p>
            <p>Invested Amount: {abc[0].Invested_amount + abc[1].Invested_amount + abc[2].Invested_amount}</p>
          </div>
          <div className="c">
            <p>Market Vaue: {(abc[0].Price + abc[1].Price + abc[2].Price) * (abc[0].Quantity + abc[1].Quantity + abc[2].Quantity)}</p>
            <p>percent of profit: {abc[0].portfolio_value + abc[1].portfolio_value + abc[2].portfolio_value}</p>
            <div class="progress">
              <div class="progress-bar bg-success" style={{ width: "50.73%" }}>50.73%</div>
            </div>
          </div>
          <div className="d">
            <p>Unrealized pL: {abc[0].unrealizred_PnL + abc[1].unrealizred_PnL + abc[2].unrealizred_PnL}</p>
            <p>Return:{abc[0].return + abc[1].return + abc[2].return}</p>
            <div class="progress">
              <div class="progress-bar" style={{ width: "16.48%" }}>16.48%</div>
            </div>
          </div>
          <div className="e">
            <button type="button" class="btn btn-outline-danger">Buy</button><br /> <br />
            <button type="button" class="btn btn-outline-danger">Sell</button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="x">
          <div className="f">
            <p>Quantity: {abc[3].Quantity + abc[4].Quantity + abc[5].Quantity}</p>
            <p>Avg Cost: {abc[3].AvgCost + abc[4].AvgCost + abc[5].AvgCost}</p>
            <p>Invested Amount: {abc[3].Invested_amount + abc[4].Invested_amount + abc[5].Invested_amount}</p>
          </div>
          <div className="g">
            <p>Market Vaue: {(abc[3].Price + abc[4].Price + abc[5].Price) * (abc[3].Quantity + abc[4].Quantity + abc[5].Quantity)}</p>
            <p>percent of profit: {abc[3].portfolio_value + abc[4].portfolio_value + abc[5].portfolio_value}</p>
            <div class="progress">
              <div class="progress-bar bg-success" style={{ width: "47%" }}>47%</div>
            </div>
          </div>
          <div className="h">
            <p>Unrealized pL: {abc[3].unrealizred_PnL + abc[4].unrealizred_PnL + abc[5].unrealizred_PnL}</p>
            <p>Return:{abc[3].return + abc[4].return + abc[5].return}</p>
            <div class="progress">
              <div class="progress-bar bg-danger" style={{ width: "17%" }}>17%</div>
            </div>
          </div>
          <div className="i">
            <button type="button" class="btn btn-outline-danger">Buy</button><br /> <br />
            <button type="button" class="btn btn-outline-danger">Sell</button>
          </div>
        </div>
      </div>
    )
  }

}

export default App;


