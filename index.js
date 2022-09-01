var n1= prompt("Enter a number in between 1-6");
var image1 = "images/dice"+ n1 +".png";
document.querySelector(".img1").setAttribute("src" , image1);

var n2= Math.floor(Math.random() * 6) + 1;
var image2 = "images/dice"+ n2 +".png";
document.querySelector(".img2").setAttribute("src" , image2);

if(n1 > n2)
{
  document.querySelector("h1").innerHTML="You win!!";
}
else if(n2 > n1)
{
    document.querySelector("h1").innerHTML="Computer wins!!";
}

else
{
    document.querySelector("h1").innerHTML="Draw!!";
}