import {useState, createContext, useContext} from "react";
import Square from "./Square";

const PlayerContext = createContext()

function TicTacToe ()
 {

    const [player, setPlayer] = useState("O");

    const togglePlayer =  () => {
        setPlayer = (player == "O"  ? "X" : "O");
    }

    return (
        <PlayerContext.Provider value={{player, togglePlayer}}>
        <div>
            <TicBox/>
            <TicBox/>
            <TicBox/>
        </div>
        <div>
            <TicBox/>
            <TicBox/>
            <TicBox/>
        </div>
        <div>
            <TicBox/>
            <TicBox/>
            <TicBox/>
        </div>
        </PlayerContext.Provider>
    )

 }

 function TicBox() {

    const {player, togglePlayer} = useContext(PlayerContext)

    const [playerChar, setPlayerChar] = useState();
    const [hasMoved, setHasMoved] = useState();
 
    const onClickHandler= (event) => {
        setPlayerChar(player);
        setHasMoved("hasMoved");
        togglePlayer();

    }

    return (
        <div className="square" onClick={onClickHandler}>
            {playerChar}
        </div>
    )
 }

export default TicTacToe