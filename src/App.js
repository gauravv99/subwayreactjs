import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import images1 from "./images1.svg";

class App extends Component {
  state = {
    fields: {}
  };

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  handleChange(event) {
    this.setState({
      siz: event.target.value
    });
  }

  handleChange1(event) {
    this.setState({
      btype: event.target.value
    });
  }

  handleChange2(event) {
    this.setState({
      ctype: event.target.value
    });
  }

  handleChange3(event) {
    this.setState({
      stype: event.target.value
    });
  }

  handleChange4(event) {
    this.setState({
      numb: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    alert(`You chose ${this.state.numb} ${this.state.siz} ${this.state.btype} burger with ${this.state.ctype} cheese and ${this.state.stype} sauce.`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"><center>
          <img src={images1} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Subway!</h1></center>
        </header>
        
        <form onSubmit={this.handleSubmit}>
          <a className= "polaroid">
            <img src = "https://s3.ap-south-1.amazonaws.com/mumbai.urbanpiper.com/media/bizmedia/2018/03/26/Achari_Paneer_Burger_1_COMPRESSED.jpg" />
          </a>
          <p>Select a burger size:</p>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    id="l"
                    name="group"
                    value="small"
                    price= {10}
                    onChange={this.handleChange}
                  />
                  Small ($10)
                </label>
              </li>
              
              <li>
                <label>
                  <input
                    type="radio"
                    id="c"
                    name="group"
                    value="medium"
                    price= {20}
                    onChange={this.handleChange}
                  />
                  Medium ($20)
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    id="r"
                    name="group"
                    value="large"
                    price= {30}
                    onChange={this.handleChange}
                  />
                  Large ($30)
                </label>
              </li>
            </ul>

          <p>Select the type of burger:</p>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    id="l1"
                    name="group1"
                    value="bacon"
                    price= {10}
                    onChange={this.handleChange1}
                  />
                  Bacon ($10)
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    id="c1"
                    name="group1"
                    value="taco"
                    price= {20}
                    onChange={this.handleChange1}
                  />
                  Taco ($20)
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    id="r1"
                    name="group1"
                    value="chicken"
                    price= {30}
                    onChange={this.handleChange1}
                  />
                  Chicken ($30)
                </label>
              </li>
            </ul>
            <a className= "polaroid">
              <img src = "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/chavrie-goat-cheese-stuffed-turkey--2.jpg" />
            </a>
          <p>Select a type of Cheese:</p>
      
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    id="l2"
                    name="group2"
                    value="mozzarella"
                    price= {5}
                    onChange={this.handleChange2}
                  />
                  Mozzarella ($5)
                </label>
              </li>
        
              <li>
                <label>
                  <input
                    type="radio"
                    id="c2"
                    name="group2"
                    value="brie"
                    price= {3}
                    onChange={this.handleChange2}
                  />
                  Brie ($3)
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    id="r2"
                    name="group2"
                    value="gorgonzola"
                    price= {2}
                    onChange={this.handleChange2}
                  />
                  Gorgonzola ($2)
                </label>
              </li>
            </ul>
            
          <p>Select the type of sauce:</p>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    id="l3"
                    name="group3"
                    value="tomate"
                    price= {1}
                    onChange={this.handleChange3}
                  />
                  Tomate ($1)
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    id="c3"
                    name="group3"
                    value="hollandaise"
                    price= {1}
                    onChange={this.handleChange3}
                  />
                  Hollandaise ($1)
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    id="r3"
                    name="group3"
                    value="espagnole"
                    price= {2}
                    onChange={this.handleChange3}
                  />
                  Espagnole ($2)
                </label>
              </li>
            </ul>
            <a className= "polaroid">
              <img src = "http://assets.burgers.mrhyde.com/app/uploads/2017/06/03152946/best-burger-joints-in-london-4-256x256.jpg" />
            </a>
            <p>Select the number of burger:</p>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    id="l4"
                    name="group4"
                    value="1"
                    price= {1}
                    onChange={this.handleChange4}
                  />
                  1
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    id="c4"
                    name="group4"
                    value="2"
                    price= {2}
                    onChange={this.handleChange4}
                  />
                  2
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    id="r4"
                    name="group4"
                    value="3"
                    price= {3}
                    onChange={this.handleChange4}
                  />
                  3
                </label>
              </li>
            </ul>
            <button type="submit">Make your choice</button>


        </form>
        <br />
        <br />
        <p><center>
          <Form onChange={fields => this.onChange(fields)} /> </center>
        </p>
      </div>
    );
  }
}

export default App;