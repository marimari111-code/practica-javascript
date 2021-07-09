//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");


function areaCuadrado(lado) {
    return lado * lado;
} 

//console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo
//     + "cm"
//     );
//  const alturaTriangulo = 5.5;
//  console.log("El altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;

}
//  console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura) {
    return base * altura / 2;

}
// console.log("El area del triangulo mide: " + areaTriangulo + "cm2");
console.groupEnd();    


//Codigo del circulo
console.group("Circulo");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
}
//Diametro

//PI
const PI = Math.PI;
console.log("PI es: " + PI );

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

//Circunferencia


//Area 
function areaCirculo(radio) {
    
    return (radio * radio) * PI;

}

//console.log("El area del circulo mide: " + areaCirculo + "cm2");

console.groupEnd

// Aqui interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo()   {
    const lado1 = Number(document.getElementById("InputTriangulo1").value);
    const lado2 = Number(document.getElementById("InputTriangulo2").value);
    const base = Number(document.getElementById("InputTrianguloB").value);
    //const value1 = Number(lado1.value1);
    //const value2 = Number(lado2.value2);
    //const value3 = Number(base.value3);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(`${perimetro}`);

}
function calcularAreaTriangulo() {
    const base = Number(document.getElementById("InputTrianguloB").value);
    const altura = Number(document.getElementById("InputTrianguloA").value);
    //const value1 = Number(base.value1);
    //const value2 = Number(altura.value2);

    const area = areaTriangulo(base,altura);
    alert(`${area}`);
}



function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);

}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);

}


