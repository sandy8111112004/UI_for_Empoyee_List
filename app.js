const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


//print function
const printFunc = function(){
  $('#displayBoard').empty();
  for(let i=0;i<employeeList.length;i++){
    $('#displayBoard').append(`<div>${employeeList[i].name}</br>#${employeeList[i].officeNum}</br>${employeeList[i].phoneNum}</br></br></div>`);
  }
}

// verify function
const buttonVerify = function(){
  event.preventDefault();
  const input = $('#verifyInput').val();
  let message = 'Employee Not Found';
  for(let i=0;i<employeeList.length;i++){
    if (employeeList[i].name.toLowerCase() === input.toLowerCase){
      message = 'Employee Found';
    }
  }
  $('#displayBoard').append(`<div>${message}</div>`);
}

const verifyFunc = function(){
  event.preventDefault();
  $('#displayBoard').empty();
  $('#displayBoard').append(`<div><form>
  <input type="text" id="verifyInput" placeholder="Employee Name" autocomplete="off" />
  <button id="verifySubmit">Verify</button>
  </form></div>`);
  $('#verifySubmit').on('click',buttonVerify);
} 


/*
const lookupFunc= function(){
  let message = 'Not in list!'
  for(let i=0;i<employeeList.length;i++){
    if (employeeList[i].name.toLowerCase() === searchName){
      message =`Name: ${employeeList[i].name}, 
      Office Number: ${employeeList[i].officeNum}, 
      Phone Number:  ${employeeList[i].phoneNum}`; 
    }
  }
  render(message);
}

const containsFunc = function(){
  let found=false;
  for (let i=0;i< employeeList.length;i++){
    if (employeeList[i].name.indexOf(keyword)!== -1){
      render(employeeList[i].name);
      found=true;
    }
  }
  if (!found){
    render('no match');
  }
}
*/


/*
if(userCommand === 'print'){
  for(let i=0;i<employeeList.length;i++){
    render(`Name:${employeeList[i].name}, Office Number: ${employeeList[i].officeNum}, Phone Number: ${employeeList[i].phoneNum}`);
  }
}else if(userCommand === 'verify'){
  const searchName = prompt("enter name you want to search!").toLowerCase();
  let message = 'False';
  for(let i=0;i<employeeList.length;i++){
    if (employeeList[i].name.toLowerCase() === searchName){
      message = 'True';
    }
  }
  render(message);
}else if(userCommand === 'lookup'){
  const searchName = prompt("enter name you want to search!").toLowerCase();
  let message = 'Not in list!'
  for(let i=0;i<employeeList.length;i++){
    if (employeeList[i].name.toLowerCase() === searchName){
      message =`Name: ${employeeList[i].name}, 
      Office Number: ${employeeList[i].officeNum}, 
      Phone Number:  ${employeeList[i].phoneNum}`; 
    }
  }
  render(message);
}else if(userCommand === 'contains'){
  const keyword=prompt('enter keyword to search!');
  let found=false;
  for (let i=0;i< employeeList.length;i++){
    if (employeeList[i].name.indexOf(keyword)!== -1){
      render(employeeList[i].name);
      found=true;
    }
  }
  if (!found){
    render('no match');
  }
}else if(userCommand === 'update'){
  const nameToUpdate = prompt('enter the name to be updated here');
  const field = prompt('enter the  field to be updated here');
  const value = prompt('enter the new value here');
  let found= false;

  for(let i=0;i< employeeList.length;i++){
    if (nameToUpdate === employeeList[i].name){
       if (field==='name'){
         employeeList[i].name=value;
       }else if (field ==='officeNum'){
         employeeList[i].officeNum = value;
       }else if (field === 'phoneNum'){
         employeeList[i].officeNum = value;
       }else{
         render('wrong field!');
       }
       console.log(employeeList[i]);
       found = true;
    }
  }
  if (!found) {
    render('entered name in not in list');
  }

}else if(userCommand === 'add'){
  const newName =prompt('enter the name you want to add');
  const newOfficeNum = prompt('enter the office number');
  const newPhoneNum = prompt('enter the phone number');
  employeeList.push({
    name:newName,
    officeNum: newOfficeNum,
    phoneNum: newPhoneNum
  })
  for(let i=0;i<employeeList.length;i++){
    render(`Name:${employeeList[i].name}, Office Number: ${employeeList[i].officeNum}, Phone Number: ${employeeList[i].phoneNum}`);
  }

}else if(userCommand === 'delete'){
  const nameDel = prompt('enter the name to be deleted');
  for(let i=0;i<employeeList.length;i++){
    if (nameDel === employeeList[i].name){
      employeeList.splice(i,1);
    }
    render(`Name:${employeeList[i].name}, Office Number: ${employeeList[i].officeNum}, Phone Number: ${employeeList[i].phoneNum}`);
  }
}else{
  render('command not found!!!!');
}*/

$('#print').on('click',printFunc);
$('#verify').on('click',verifyFunc);/*
$('#lookup').on('click',lookupFunc);
$('#contains').on('click',contatinsFunc);
$('#updates').on('click',updatesFunc);
$('#add').on('click',addFunc);
$('#delete').on('click',deleteFunc);*/






