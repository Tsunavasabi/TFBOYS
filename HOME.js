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
  if (document.getElementById('r1').checked) {
  list[2] = document.getElementById('r1').value;
} else if (document.getElementById('r2').checked) {
  list[2] = document.getElementById('r2').value;
} else if (document.getElementById('r3').checked) {
  list[2] = document.getElementById('r3').value;
}
  list[3] = document.getElementById('namecard').value;
  list[4] = document.getElementById('numbercard').value;

  if (list[0] === undefined) {
    alert("Please check Poster choice")
    wait(3000);
  } else if (list[2] === undefined) {
    alert("Please check your card type");
    wait(3000);
  } else if (list[3] === "") {
    alert("Please check name of card");
    wait(3000);
  } else if (list[4] === ""){
    alert("Please check number of card");
    wait(3000);
  }

  if (confirm("Are you want to buy?")===true) {
    document.getElementById("c").innerHTML = list[0]+"<br>"+" by "
          +list[2]+" Name of Card is : "+list[3]
          +" ,Number of Card is : "+list[4];
  }

}
