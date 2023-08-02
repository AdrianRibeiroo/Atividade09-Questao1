var i, soma=0;

for(i=0;i<4;i++)
{
   let x = parseInt(prompt('Digite um número'));
   soma += x; 
}
let media = soma/4;
alert(`A média dos números digitados é ${media}`)