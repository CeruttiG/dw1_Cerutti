let a = 5
let b = 5
let c = 5

if(a<b+c && b<a+c && c<a+b){
    if (a==b && b==c && c==a) {
        console.log("Triangulo Equilatero")
        } else if(a==b | b==c| c==a){
            console.log("triangulo isosceles")
            } else {
                console.log("Triangulo Escaleno")
                }    
            }       
