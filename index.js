var turn=0;
var count=0;
var game=1;
var winner=0;
function change(data)
{
let rows_columns=(data+"").split("-");
let row=rows_columns[0];
let col=rows_columns[1];
var data1=document.getElementById(row+"-"+col).innerText;
if(data1=='X'||data1=='O')
{

}
else
{

    if(turn==0)
    {
        turn=1;
        document.getElementById(row+"-"+col).innerText="X";
        count++;
        checkForWinner(row,col);
    }
    else
    {
        turn=0;
        count++;
        document.getElementById(row+"-"+col).innerText="O";
        checkForWinner(row,col);
    }
}
if(count>=9&&winner==0)
{
    alert("Game Draw");
    count=0;
    codeCleanUp();
}
if(winner==1)
{
    winner=0;
}
console.log(data1)
}
function checkForWinner(row,col)
{
 checkRowWise(row);
 
 checkColumnWise(col);
 
 checkDiagonalWise1();
 
 checkDiagonalWise2();
}
function checkRowWise(row)
{
    
    let x_c=0;
    let o_c=0;
 for(var col=0;col<3;col++)
 {
     if(document.getElementById(row+"-"+col).innerText=='X')
     {
         x_c++;
     }
     if(document.getElementById(row+"-"+col).innerText=='O')
     {
         o_c++;
     }
 }
 console.log(o_c+"pava");
 if(x_c==3)
 {
    alert("Player1 Won")
    codeCleanUp();
    winner=1;
 }
 if(o_c==3)
 {
    // return "O";
     alert("Player2 Won")
     codeCleanUp();
     winner=1;
 }
}
function checkColumnWise(col)
{
    console.log("column wise")
    let x_c=0;
    let o_c=0;
 for(var row=0;row<3;row++)
 {
     if(document.getElementById(row+"-"+col).innerText=='X')
     {
         x_c++;
         
     }
     if(document.getElementById(row+"-"+col).innerText=='O')
     {
         o_c++;
     }
 }
 console.log(x_c+" "+o_c)
 if(x_c==3)
 {
    alert("Player1 Won")
    codeCleanUp();
    winner=1;

 }
 if(o_c==3)
 {
    alert("Player2 Won")
    codeCleanUp();
    winner=1;
 }
}
function checkDiagonalWise1()
{
   // console.log("D1 wise")
    let x_c=0,o_c=0;
   if(document.getElementById("0-0").innerText=="X"){x_c++;} if(document.getElementById("0-0").innerText=="O"){o_c++;}
   if(document.getElementById("1-1").innerText=="X"){x_c++;} if(document.getElementById("1-1").innerText=="O"){o_c++;}
   if(document.getElementById("2-2").innerText=="X"){x_c++;} if(document.getElementById("2-2").innerText=="O"){o_c++;}
   console.log(x_c);
   if(x_c==3)
 {
    alert("Player1 Won")
    winner=1;
    codeCleanUp();
 }
 if(o_c==3)
 {
    // return "O";
     alert("Player2 Won")
     winner=1;
     codeCleanUp();
 }
}
function checkDiagonalWise2()
{
   // console.log("D2 wise")
    let x_c=0,o_c=0;
   if(document.getElementById("0-2").innerText=="X"){x_c++;} if(document.getElementById("0-2").innerText=="O"){o_c++;}
   if(document.getElementById("1-1").innerText=="X"){x_c++;} if(document.getElementById("1-1").innerText=="O"){o_c++;}
   if(document.getElementById("2-0").innerText=="X"){x_c++;} if(document.getElementById("2-0").innerText=="O"){o_c++;}
   if(x_c==3)
 {
    alert("Player1 Won")
    winner=1;
    codeCleanUp();
 }
 if(o_c==3)
 {
    // return "O";
     alert("Player2 Won")
     winner=1;
     codeCleanUp();
 }
}
function codeCleanUp()
{
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            document.getElementById(i+"-"+j).innerText="";
        }
    }
    game=0;
    count=0;
    turn=0;

}