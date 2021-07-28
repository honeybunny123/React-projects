import './App.css';
import React from 'react';
import PlayersList from './playersList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.newPlayer = React.createRef();

    const playersArr = [
      {
        name : 'player 1',
        score : 0
      },
  
      {
        name : 'player 2',
        score : 0
      }
    ]

    this.state = {
      players : playersArr,
      totalScore : 0
    };
    
  }

  addPlayer = ()=> {
    let newName = this.newPlayer.current.value;
      
    this.setState(prevState => {
      let index = prevState.players.length;
      if(!newName) {
        newName = `player ${index + 1}`;
      }
      return {
        players: [...prevState.players, 
            {
              name: newName,
              score: 0
            }
          ]
          
      }}, ()=> {
        this.newPlayer.current.value = null;
    });    
  }

  deletePlayer = (e)=> {
    this.setState(prevState=> {
      let newplayersArr = prevState.players;
      newplayersArr.splice(Number(e.target.dataset.index), 1);
      return {
        players:  newplayersArr
      }    
    });
  }

  updateName = (e)=> {    
    this.setState(prevState => {
      let newplayersArr = prevState.players;
      newplayersArr[Number(e.target.dataset.index)].name = e.target.value;
      return {
        players:  newplayersArr
      }      
    });
  }

   decrement = (e)=> {
    this.setState(prevState=> {
      let newplayersArr = [...prevState.players];
      newplayersArr[Number(e.target.dataset.index)].score -= 1;
      return {
        players: newplayersArr,
        totalScore: prevState.totalScore - 1
      }
    })
  }

  increment = (e)=> {
    this.setState(prevState=> {
      let newplayersArr = [...prevState.players];
      newplayersArr[Number(e.target.dataset.index)].score += 1;
      return {
        players: newplayersArr,
        totalScore: prevState.totalScore + 1
      }     
    })    
  }

  reset = ()=> {
    let newplayersArr = this.state.players;
    newplayersArr.map((el)=> el.score = 0)
    this.setState({
      totalScore : 0
    })
  }

  
  render() {
    return (
      <div className="App">
        <div className="scoreboard">
          <header>
            <button onClick={this.reset}>Reset</button>
            <h2>Scoreboard</h2>
            <h3>Total: <span>{this.state.totalScore}</span></h3>
          </header>
          <main>
            <PlayersList 
            players={this.state.players} 
            decrement={this.decrement} 
            increment={this.increment} 
            deletePlayer={this.deletePlayer}
            updateName={this.updateName}
            />
          </main>
          <footer>
            <input ref={this.newPlayer}></input>
            <button onClick={this.addPlayer}>Add Player</button>
          </footer>
        </div>
      </div>
    );
  }  
}


export default App;
