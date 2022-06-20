window.onload = function () {
    const arrey = [5, 12, 3, 6, 8, 14, 15, 5, 6, 10]
    let x = 6;
    let y = 10;
    console.log(nuoIkiSkaiciaus(arrey,x,y))

}

function nuoIkiSkaiciaus (skaicius,x,y) {
    let suma = 0;
    const arr = [];
    for (let i = 0; i < skaicius.length; i++) {
        if (skaicius[i] >= x) {
            arr.push(skaicius[i])
            console.log(arr)
            for (let i = 0; i < arr.length; i++) {
                if (skaicius[i] <= y) {
                    arr.push(skaicius[i])
                }
                suma += arr.length;
            }

         }
     }
     console.log(suma)
     
     return arr;
}


function intervalas() {
    return a >= b >= x;
}