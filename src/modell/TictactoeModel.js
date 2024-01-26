export default class TictactoeModel {
  #list = [];
  #aktjatekos;
  constructor() {
    this.#aktjatekos = "X";
    this.#list = Array(9).fill(" "); // 9 üres mező inicializálása
  }
  getList() {
    //listával úgy térünk vissza hogy új memóriterületbe másoljuk
    //teljesen új listát hozunk létre!
    return [...this.#list];
  }

  setAllapot(id) {
    if (this.#list[id] === " ") {
      this.#list[id] = this.#aktjatekos;
      if (this.#aktjatekos === "X") {
        this.#aktjatekos = "O";
      } else {
        this.#aktjatekos = "X";
      }
      console.log("Következő játékos:", this.#aktjatekos);
    }
    console.log(this.#list);
  }

  getAktualisJatekos() {
    return this.#aktjatekos;
}
}
