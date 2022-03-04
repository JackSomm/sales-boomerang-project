import React from "react";
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: null,
      colors: [],
      isLoaded: false,
      error: null
    }
  }

  handleClick(item) {
    let favorite = this.state.colors.find(color => {
      return color.id.toString() === item.target.id
    });
    let newColors = this.state.colors.filter((color) => {
      return color.id.toString() !== item.target.id
    });

    if (this.state.favoriteColor !== null) {
      this.setState(state => ({ 
        favoriteColor: favorite,
        colors: [...newColors, state.favoriteColor]
      }));
    } else {
      this.setState({ 
        favoriteColor: favorite,
        colors: newColors
      });
    }
  }

  componentDidMount() {
    fetch("/home")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ isLoaded: true, colors: result })
      }, (error) => {
        this.setState({ isLoaded: true, error: error })
      });
  }
  

  render() {
    return (
      <div className="App">
        {this.state.favoriteColor ? (
          <div className={(this.state.favoriteColor.color === "yellow") ?
                          "favorite-color yellow" : "favorite-color"}
                style={{ backgroundColor: this.state.favoriteColor.hexcode }}>
            <h2>Your favorite color is { this.state.favoriteColor.color }!</h2>
          </div>
        ) : <div className="favorite-color"></div>}

        <h1>Select a color!</h1>

        <ul className="colors">
          {this.state.colors.map((color) => (
            <li className="colors__color"
                id={color.id} 
                key={color.id} 
                style={{ backgroundColor: color.hexcode }}
                onClick={this.handleClick.bind(this)}>
            </li>
          ))}
        </ul>
    </div>
    );
    }
}

