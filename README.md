# OracleONE
Ejercicios desarrollados a lo largo del curso Oracle ONE del cual formo parte.



# Imprimir y salto de linea en .html
```js
//Salto de linea en html
function br(){
    let br = "<br>"; 
    document.write(br);}
//Imprimir en html
function print(str){
    document.write(str); 
    br()}
```

# Armar matrices .js
```js
var a = [1, 2, 3]
var b = ['a', 'b', 'c']
var c = a.map(function(e, i) {
    return [e, b[i]]; 
    //Crea un array de arrays, permite armar matrices?
});
print(c)
```

# Desarrollos por curso