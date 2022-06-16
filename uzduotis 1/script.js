window.onload = function () {
    const skarry = [5, 12, 3, 6, 8, 14, 15, 5, 6, 10];
    let ieskomasSkaicius = 14;
    let ieskomasSkaicius2 = 10; 
    console.log(arIeskomasSkaiciusYraMasyve(skarry,ieskomasSkaicius,ieskomasSkaicius2))
}

function arIeskomasSkaiciusYraMasyve(arry,x,y) {
    let sk = false;
    let sk2 = false; 
    for (let i = 0; i < arry.length; i++) {
        if(arry[i] === x){
            sk = true
        }
        if (arry[i] === y) {
            sk2 = true
            }
        if (sk && sk2) {
            return true
            }
        
    }
    return false
}