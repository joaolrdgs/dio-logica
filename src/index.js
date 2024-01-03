/* Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

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