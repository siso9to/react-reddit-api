import React from "react";
import fetch from "isomorphic-fetch"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  fetchReddit() {
    return fetch("https://www.reddit.com/r/newsokur/.json")
      .then(response => response.json())
      .then(json => {
        let items = json.data.children.map(item => {
          return item.data
        })
        this.setState({items})
      })
  }

  componentWillMount() {
    this.fetchReddit()
  }

  render() {
    return (
      <div>
        <h1>Reddit ニュー速R</h1>
        <ul>
          {this.state.items.map((item) => {
            return <li key={item.permalink}><a href={`https://www.reddit.com${item.permalink}`}>{item.title}</a></li>
          })}
        </ul>
      </div>
    )
  }
}


