import Elem from "../view_components/Elem";
import tictactoe from "../pages/tictactoe.css";
import TictactoeModel from "../modell/TictactoeModel";
import { useState } from "react";

export default function TicTacToe(props){
    const tictactoeModel=new TictactoeModel();
    //const list=tictactoeModel.getList();
    const [list,setList]=useState(tictactoeModel.getList());
    const[szam,setSzam]=useState(0);
    function novel(){
        setSzam(szam+1)
    }
    function kattintas(id){
        console.log(id);
        tictactoeModel.setAllapot(id);
        //újra lekérjük a lista értékét
       setList(tictactoeModel.getList())
    }
    return(
        <div className="jatek">
            <div className="pelda">
                <h3>State használati példa</h3>
            <button onClick={novel}>Növel</button>
            <p>{szam}</p>
            </div>
            
        <h2>Tic-Tac-Toe</h2>
        <div className="jatekter">
            {
                list.map((elem,index)=>{return(<Elem kattintas={kattintas} ertek={elem} key={index} index={index}/>)}
                )
            }
        </div>
     <p>A következő játékos: {}</p>
        </div>
    )
}