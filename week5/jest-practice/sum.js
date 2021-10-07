module.exports.sum = (a, b) => a + b;

module.exports.arithmeticProgression = (inicial, final) => {
    let arreglo = [];
    
    for (let i = inicial; i <= final; i += inicial) {
    
        arreglo.push(i)
        
    }

    console.log(arreglo);
    return arreglo;
}