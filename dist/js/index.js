"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
document.addEventListener('DOMContentLoaded', function () {
  // Get the root element
  var root = document.documentElement;
  // Get the computed styles of the root element
  var style = getComputedStyle(root);
  // Get the value of the --color-font-general variable
  var pink = style.getPropertyValue('--pink');
  var green = style.getPropertyValue('--green');
  var Piece = /*#__PURE__*/function () {
    function Piece(letter) {
      _classCallCheck(this, Piece);
      this.letter = letter;
      this.type = letter.toLowerCase(); // k, q, b, n, r or p
      this.isWhite = letter !== this.type; // Capital <==> white
      this.color = letter !== this.type ? this.color = 'white' : this.color = 'black';
      this.square = null;
      this.name = {
        k: "king",
        q: "queen",
        b: "bishop",
        n: "knight",
        r: "rook",
        p: "pawn"
      }[this.type];
      this.src = "../img/".concat(this.color, " pieces/").concat(this.name, ".png");
    }
    _createClass(Piece, [{
      key: "remove",
      value: function remove() {
        if (this.square) this.square.piece = null;
        this.square = null;
        return this;
      }
    }]);
    return Piece;
  }();
  var img = document.createElement('img');
  var p_A7 = new Piece('p');
  alert(p_A7.src);
});
"use strict";

// Squares as variables

// 8th row
var a8 = document.querySelector('.a8');
var b8 = document.querySelector('.b8');
var c8 = document.querySelector('.c8');
var d8 = document.querySelector('.d8');
var e8 = document.querySelector('.e8');
var f8 = document.querySelector('.f8');
var g8 = document.querySelector('.g8');
var h8 = document.querySelector('.h8');
// 7th row 
var a7 = document.querySelector('.a7');
var b7 = document.querySelector('.b7');
var c7 = document.querySelector('.c7');
var d7 = document.querySelector('.d7');
var e7 = document.querySelector('.e7');
var f7 = document.querySelector('.f7');
var g7 = document.querySelector('.g7');
var h7 = document.querySelector('.h7');
// 6th row
var a6 = document.querySelector('.a6');
var b6 = document.querySelector('.b6');
var c6 = document.querySelector('.c6');
var d6 = document.querySelector('.d6');
var e6 = document.querySelector('.e6');
var f6 = document.querySelector('.f6');
var g6 = document.querySelector('.g6');
var h6 = document.querySelector('.h6');
// 5th row
var a5 = document.querySelector('.a5');
var b5 = document.querySelector('.b5');
var c5 = document.querySelector('.c5');
var d5 = document.querySelector('.d5');
var e5 = document.querySelector('.e5');
var f5 = document.querySelector('.f5');
var g5 = document.querySelector('.g5');
var h5 = document.querySelector('.h5');
// 4th row
var a4 = document.querySelector('.a4');
var b4 = document.querySelector('.b4');
var c4 = document.querySelector('.c4');
var d4 = document.querySelector('.d4');
var e4 = document.querySelector('.e4');
var f4 = document.querySelector('.f4');
var g4 = document.querySelector('.g4');
var h4 = document.querySelector('.h4');
// 3rd row
var a3 = document.querySelector('.a3');
var b3 = document.querySelector('.b3');
var c3 = document.querySelector('.c3');
var d3 = document.querySelector('.d3');
var e3 = document.querySelector('.e3');
var f3 = document.querySelector('.f3');
var g3 = document.querySelector('.g3');
var h3 = document.querySelector('.h3');
// 2nd row
var a2 = document.querySelector('.a2');
var b2 = document.querySelector('.b2');
var c2 = document.querySelector('.c2');
var d2 = document.querySelector('.d2');
var e2 = document.querySelector('.e2');
var f2 = document.querySelector('.f2');
var g2 = document.querySelector('.g2');
var h2 = document.querySelector('.h2');
// 1st row 
var a1 = document.querySelector('.a1');
var b1 = document.querySelector('.b1');
var c1 = document.querySelector('.c1');
var d1 = document.querySelector('.d1');
var e1 = document.querySelector('.e1');
var f1 = document.querySelector('.f1');
var g1 = document.querySelector('.g1');
var h1 = document.querySelector('.h1');