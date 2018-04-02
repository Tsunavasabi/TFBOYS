var list=[];

function choosejunkai() {
  alert("You choose Karry Wang Poster");
  list[0]="You choose Karry Wang Poster"
}

function chooseyuan() {
  alert("You choose Roy Wang Poster");
  list[0]="You choose Roy Wang Poster"
}

function choosexian() {
  alert("You choose Jackson Yi Poster");
  list[0]="You choose Jackson Yi Poster"
}

function Continue() {
  confirm("Are you want to buy?")

  if (document.getElementById('r1').checked) {
  list[2] = document.getElementById('r1').value;
} else if (document.getElementById('r2').checked) {
  list[2] = document.getElementById('r2').value;
} else if (document.getElementById('r3').checked) {
  list[2] = document.getElementById('r3').value;
}
  list[3] = document.getElementById('namecard').value;
  list[4] = document.getElementById('numbercard').value;
  document.getElementById("c").innerHTML = list[0]+"<br>"+" by "
        +list[2]+" Name of Card is : "+list[3]
        +" ,Number of Card is : "+list[4];
}
