
const PlayersList = (props)=> {

  return(
    <ul>{
      props.players.map((player, index)=> {
        return (
          <li key={index}>
            <input value={player.name} onChange={props.updateName} data-index={index}/>
            <button className="delete" onClick={props.deletePlayer} data-index={index}></button>
            <div className="score">
              <button onClick={props.decrement} data-index={index}>-</button>
              <span>{player.score}</span>
              <button onClick={props.increment} data-index={index}>+</button>
            </div>
          </li>
        )
      })}
    </ul>
    
  )
  
}

export default PlayersList;