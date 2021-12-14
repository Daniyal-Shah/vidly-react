import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'
import React, { Component } from 'react';
import prCom from './components/practive';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //Lifecyclye hook -1
  //Before component rendering
  constructor()
  {
    super();
    console.log("App- Constructor");
  }

  //Lifecyclye hook -3
  //After component rendering
  componentDidMount()
  {
    console.log("App- Mounted");
  }

  handleReset = () => {};

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement=(counter)=>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    console.log("Handler Delete", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    // console.log(counters);
  };

  //Lifecyclye hook -2
  //when rendering component
  render() { 
    console.log("App- Rendered");
    return (
      <div>
        <NavBar totalCounters={this.state.counters.filter(c=> c.value>0).length}/>
        <main className="d-flex justify-content-center ">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement}
          onDelete={this.handleDelete} onDecrement={this.handleDecrement} />
        </main>
      </div>
      );
  }
}
 
export default App;









// function App() {
//   return (
//     <div>
//     <NavBar/>
//     <main className="container d-flex justify-content-center ">
//     <Counters/>
//     </main>

//     </div>
//   );
// }
// export default App;