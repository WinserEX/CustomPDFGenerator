console.log('Certificates');

//Member
let member = document.querySelector('#member');
let p1 = document.createElement('P');
p1.innerHTML = "Fulanito de Tal";
member.append(p1);

//Points
let points = document.querySelector('#points');
points.innerHTML = "500";

//Contract ID
let contractID = document.querySelector('#contractID');
let p3 = document.createElement('P');
p3.innerHTML = 950095956;
contractID.append(p3);


//Sales Floor
let salesFloor = document.querySelector('#salesFloor');
let p4 = document.createElement('P');
p4.innerHTML = "Dominicus";
salesFloor.append(p4);

//Approved by
let approvedBy = document.querySelector('#approvedBy')
let p5 = document.createElement('P');
p5.innerHTML = "Winser Espinal";
approvedBy.append(p5);

//Date
let date = document.querySelector('#date')
let p6 = document.createElement('P');
let today = new Date();
let daDate = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`;
p6.innerHTML = daDate;
date.append(p6);