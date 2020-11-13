import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'red',
  secondary: 'green',
}

const Button = styled.button`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: black;
  padding: 7px 10px;
`

const Header = styled.header`
   display: block;
   background-color: #282c34;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
   #title {
     position: relative;
     bottom: 200px;
   }
   #title:hover {
     color: red;
   }
  #pizza-time {
    text-decoration: underline;
  }
  #pizza-time:hover{
    color: red;
  }
 `

function Home(props) {
  return (
  <div>
    <Header>
      <h1 id="title">Welcome to Lambda Eats</h1>
    </Header>
  </div>
  )
}
function Pizza(props) {
  return (
    <Header>
    <div className="App">
      <h1 id="pizza-time">It's Pizza Time!!!</h1>
      <h2>Choice of Size</h2>
      <select>
        <option value="1">Small</option>
        <option value="2">Medium</option>
        <option value="3">Large</option>
        <option value="4">Extra Large</option>
        <option value="5">Jumbo Size</option>
      </select>

      <h2>Choice of Sauce</h2>
      <label>
        Original Red
        <input type="radio" value="ogred" />
      </label>

      <label>
        Garlic Ranch
        <input type="radio" value="granch" />
      </label>

      <label>
        BBQ Sauce
        <input type="radio" value="bbq" />
      </label>

      <label>
        Spinach Alfredo
        <input type="radio" value="salfredo" />
      </label>

      <h2>Add Toppings</h2>
      <label>
        Pepperoni
        <input type="checkbox" value="pepperoni" />
      </label>

      <label>
        Sausage
        <input type="checkbox" value="sausage" />
      </label>

      <label>
        Canadian Bacon
        <input type="checkbox" value="cbacon" />
      </label>

      <label>
        Spicy Italian Sausage
        <input type="checkbox" value="spicesausage" />
      </label>

      <label>
        Grilled Chicken
        <input type="checkbox" value="gchicken" />
      </label>

      <Button>Submit</Button>
  </div>
  </Header>
  )
}


const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza Time</Link>

        <Route exact path='/' component={Home} />
        <Route path='/pizza' component={Pizza} />

      </BrowserRouter>
    </ThemeProvider>
    </>
  );
};
export default App;
