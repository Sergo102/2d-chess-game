document.addEventListener('DOMContentLoaded', function(){
  // Get the root element
  const root = document.documentElement;
  // Get the computed styles of the root element
  const style = getComputedStyle(root);
  // Get the value of the --color-font-general variable
  const pink = style.getPropertyValue('--pink');
  const green = style.getPropertyValue('--green');
  
  class Piece{
    constructor(letter){
      this.letter = letter;
      this.type = letter.toLowerCase(); // k, q, b, n, r or p
      this.isWhite = letter !== this.type; // Capital <==> white
      this.color = (letter !== this.type) ? this.color = 'white' : this.color = 'black'
      this.square = null;
      this.name = { k: "king", q: "queen", b: "bishop", n: "knight", r: "rook", p: "pawn" }[this.type];
      this.src = `../img/${this.color} pieces/${this.name}.png`;
    }
    remove() {
      if (this.square) this.square.piece = null;
      this.square = null;
      return this;
    }
  }
  
  let img = document.createElement('img');

  const p_A7 = new Piece('p');
  alert(p_A7.src);
})