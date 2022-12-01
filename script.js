let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //Member
    let member = document.querySelector('#member');
    let p1 = document.createElement('P');
    p1.innerHTML = form.elements.memberQuery.value;
    member.append(p1);

    //Points
    let points = document.querySelector('#points');
    points.innerHTML = form.elements.pointsQuery.value;

    //Contract ID
    let contractID = document.querySelector('#contractID');
    let p3 = document.createElement('P');
    p3.innerHTML = form.elements.contractidQuery.value;
    contractID.append(p3);

    //Sales Floor
    let salesFloor = document.querySelector('#salesFloor');
    let p4 = document.createElement('P');
    p4.innerHTML = form.elements.approvedbyQuery.value;
    salesFloor.append(p4);

    //Approved by
    let approvedBy = document.querySelector('#approvedBy')
    let p5 = document.createElement('P');
    p5.innerHTML = form.elements.salesfloorQuery.value;
    approvedBy.append(p5);
    
})




//Date
let date = document.querySelector('#date')
let p6 = document.createElement('P');
let today = new Date();
let daDate = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`;
p6.innerHTML = daDate;
date.append(p6);