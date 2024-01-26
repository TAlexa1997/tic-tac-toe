import Elem from "../view_components/Elem";
import TictactoeModel from "../modell/TictactoeModel";
import "./tictactoe.css";
import { useState ,useEffect} from "react";

export default function TicTacToe(props) {
  const [tictactoeModel,setModel] = useState(new TictactoeModel());
  //const list=tictactoeModel.getList();
  const [list, setList] = useState(tictactoeModel.getList());
  const [aktualisJatekos, setAktualisJatekos] = useState(tictactoeModel.getAktualisJatekos());
  const [szam, setSzam] = useState(0);
  function novel() {
    setSzam(szam + 1);
  }
  function kattintas(id) {
    tictactoeModel.setAllapot(id);
    setList(tictactoeModel.getList());
    setAktualisJatekos(tictactoeModel.getAktualisJatekos());
  }

  useEffect(() => {
    setModel(new TictactoeModel());
  }, []);

  return (
    <div className="jatek">
      <div className="pelda">
        <h3>State használati példa</h3>
        <button onClick={novel}>Növel</button>
        <p>{szam}</p>
      </div>

      <h2>Tic-Tac-Toe</h2>
      <div className="jatekter">
        {list.map((elem, index) => {
          return (
            <Elem
              kattintas={kattintas}
              ertek={elem}
              key={index}
              index={index}
            />
          );
        })}
      </div>
      <p>A következő játékos: {aktualisJatekos}</p>
    </div>
  );
}