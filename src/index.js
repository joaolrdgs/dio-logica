let heroi = [["Seiyjuro", 3000]]
let texto = "O herói de nome " + heroi[0][0] + " está no nível de ";

if(heroi[0][1] <=1000 ){
    console.log(texto + "Ferro")
}
else if(heroi[0][1]>=1001 && heroi[0][1]<=2000 ){
    console.log(texto + "Bronze")
}
else if(heroi[0][1]>=2001 && heroi[0][1]<=5000 ){
    console.log(texto + "Prata")
}
else if(heroi[0][1]>=5001 && heroi[0][1]<=7000 ){
    console.log(texto + "Ouro")
}
else if(heroi[0][1]>=7001 && heroi[0][1]<=8000 ){
    console.log(texto + "Platina")
}
else if(heroi[0][1]>=8001 && heroi[0][1]<=9000 ){
    console.log(texto + "Ascendente")
}
else if(heroi[0][1]>=9001 && heroi[0][1]<=10000 ){
    console.log(texto + "Imortal")
}
else {
    console.log(texto + "Radiante")
}