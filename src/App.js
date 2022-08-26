import './App.css';
import React from 'react';
// import { useEffect, useState } from 'react';

// function App() {
//   const [state, setState] = useState('');

//   useEffect(() => {
//     console.log('useEffect => ', state)

//   }, [state])

//   const p1 = async () => {
//     setState('');
//     await new Promise((solve, reject) => {
//       setTimeout(() => solve(1), 1500);
//     });
//     setState('jadiii')
//   }

//   const p2 = async () => {
//     await p1();
//     p3(1, 2, 3);
//   }

//   const p3 = async (a, b, c) => {
//     console.log('p3 => ', { a, b, c });
//     p4(a, b, c);
//   }

//   const p4 = async (a, b, c) => {
//     setTimeout(() => {
//       console.log('p4 => ', { a, b, c }, state)
//     }, 1000);

//   }

//   return (
//     <div>
//       <button onClick={p2}>simulate</button>
//       <div>{state}</div>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: ''
    }
  }

  p1 = async () => {
    this.setState({ datas: '' });
    await new Promise((solve, reject) => {
      setTimeout(() => solve(1), 1500);
    });
    this.setState({ datas: 'jadiii' });
  }

  p2 = async () => {
    await this.p1();
    this.p3(1, 2, 3);
  }

  p3 = async (a, b, c) => {
    console.log('p3 => ', { a, b, c });
    this.p4(a, b, c);
  }

  p4 = async (a, b, c) => {
    setTimeout(() => {
      console.log('p4 => ', { a, b, c }, this.state.datas)
    }, 1000);
  }

  render() {
    return <div>
      <button onClick={this.p2}>simulate</button>
      <div>{this.state.datas}</div>
    </div>;
  }
}

export default App;
