import Elem from "../view_components/Elem";

export default function TicTacToe(props){
    return(
        <div className="jatek">
        <h2>Tic-Tac-Toe</h2>
        <div className="jatekter">
            <Elem></Elem>
            <Elem></Elem>
            <Elem></Elem>
            <Elem></Elem>
            <Elem></Elem>
            <Elem></Elem>
            <Elem></Elem>
            <Elem></Elem>
        </div>
        </div>
    )
}