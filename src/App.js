import React from 'react';

class App extends React.Component {

  // TO TEST RAILS API DATA COMING IN OKAY
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/restaurants', {
  //     method: 'GET'
  //   })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }


  render() {
    return (
      <div className="App">
        <h1>APP</h1> 
      </div>
    );
  }
}

export default App;
