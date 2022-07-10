// boolean
let muted: boolean = true;

muted = false;
muted = "callado"

// numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// string
let nombre: string = "Juan";
let saludo = `Me llamo ${nombre}`;

// arreglos
let people: string[] = [];
people = ["Juan", "Alberto", "Cristiel"]
people.push(3)

let poepleAndNumbers: Array<string | number> = [];
poepleAndNumbers.push("Juan");
poepleAndNumbers.push(27);

// enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = {
  type: "Wildcard",
}

// Object
let someObject: object = {
  type: "Wildcard"
}

// Funciones
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
  return function(b: number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName?: string, lastName: string = "Reyes"): string {
  return `${firstName} ${lastName}`;
}

const juan = fullName("Juan")

// Interfaces
interface Rectangulo {
  ancho: number,
  alto: number,
  color?: Color
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 4,
  color: Color.Azul
}

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect)
console.log(areaRect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())

// Clases en plugins/autopause.ts