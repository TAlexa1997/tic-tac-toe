export default class TictactoeModel {
  #list = [];
  #aktjatekos = "X";
#kovjatekos = "O";
  constructor() {
    this.#list = ["X", "O", "O", "X", "X", "O", " ", "O", "X"];
  }
  getList() {
    //listával úgy térünk vissza hogy új memóriterületbe másoljuk
    //teljesen új listát hozunk létre!
    return [...this.#list];
  }

  setAllapot(id) {
    this.#list[id]=this.#aktjatekos;

    if(this.#aktjatekos==="X"){
        this.#aktjatekos="O";
        this.#kovjatekos= "X";
    }else{
        this.#aktjatekos ="X";
        this.#kovjatekos= "O";
    }
    console.log(this.#aktjatekos)
    console.log(this.#kovjatekos)
    console.log(this.#list)
  }

  
}
