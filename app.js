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
    if (employeeList[i].name.toLowerCase() === input.toLowerCase()){
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

//$('#verifySubmit').on('click',buttonVerify);

//lookup function

const buttonLookup = function(){
  event.preventDefault();
  const input = $('#lookupInput').val();
  let message = 'Employee Not Found';
  for(let i=0;i<employeeList.length;i++){
    if (employeeList[i].name.toLowerCase() === input.toLowerCase()){
      message =`${employeeList[i].name}</br> 
      #${employeeList[i].officeNum}</br> 
      ${employeeList[i].phoneNum}`;
    }
  }
  $('#displayBoard').append(`<div>${message}</div>`);
}

const lookupFunc= function(){
  event.preventDefault();
  $('#displayBoard').empty();
  $('#displayBoard').append(`<div><form>
  <input type="text" id="lookupInput" placeholder="Employee Name" autocomplete="off" />
  <button id="lookupSubmit">Lookup</button>
  </form></div>`);
  $('#lookupSubmit').on('click',buttonLookup);
}


//contains Function
const buttonContains = function(){
  event.preventDefault();
  const input = $('#containsInput').val();
  let message = '';
  for(let i=0;i<employeeList.length;i++){
    if (employeeList[i].name.indexOf(input)!= -1){
      message =`${message}${employeeList[i].name}</br> 
      #${employeeList[i].officeNum}</br> 
      ${employeeList[i].phoneNum}</br></br>`;
    }
  }
  if (message ===''){
    $('#displayBoard').append(`<div>Employee Not Found</div>`);  
  }else{
    $('#displayBoard').append(`<div>${message}</div>`);
  }
}

const containsFunc= function(){
  event.preventDefault();
  $('#displayBoard').empty();
  $('#displayBoard').append(`<div><form>
  <input type="text" id="containsInput" placeholder="Employee Name" autocomplete="off" />
  <button id="containsSubmit">Contains</button>
  </form></div>`);
  $('#containsSubmit').on('click',buttonContains);
}



//update Function
const buttonUpdate = function(){
  event.preventDefault();
  const input = $('#updateName').val();
  let message = 'Employee Not Found';
  for(let i=0;i<employeeList.length;i++){
    if (employeeList[i].name === input){
      message =`${input}</br> 
      #${$('#updateNumber').val()}</br> 
      ${$('#updatePhone').val()}</br></br>`;
      employeeList[i].name = input;
      employeeList[i].phoneNum=$('#updatePhone').val();
      employeeList[i].officeNum=$('#updateNumber').val();
    }
  }
  $('#displayBoard').append(`<div>${message}</div>`);
}

const updateFunc= function(){
  event.preventDefault();
  $('#displayBoard').empty();
  $('#displayBoard').append(`<div><form>
  Name <input type="text" id="updateName" placeholder="Employee Name" autocomplete="off" />
  </br>
  Number <input type="text" id="updateNumber" placeholder="Office Number" autocomplete="off" />
  </br>
  Phone <input type="text" id="updatePhone" placeholder="Phone Number" autocomplete="off" />
  </br>
  <button id="updateSubmit" style='justify-contents:center;'>Update</button>
  </form></div>`);
  $('#updateSubmit').on('click',buttonUpdate);
}


//add Function
const buttonAdd = function(){
  event.preventDefault();
  const inputName = $('#addName').val();
  const inputNumber = $('#addNumber').val();
  const inputPhone = $('#addPhone').val();
  employeeList.push({
    name:inputName,
    officeNum: inputNumber,
    phoneNum: inputPhone
  })
  message =`${inputName}</br>#${inputNumber}</br>${inputPhone}</br></br>`;  
  $('#displayBoard').append(`<div>${message}</div>`);
}

const addFunc= function(){
  event.preventDefault();
  $('#displayBoard').empty();
  $('#displayBoard').append(`<div><form>
  Name <input type="text" id="addName" placeholder="Employee Name" autocomplete="off" />
  </br>
  Number <input type="text" id="addNumber" placeholder="Office Number" autocomplete="off" />
  </br>
  Phone <input type="text" id="addPhone" placeholder="Phone Number" autocomplete="off" />
  </br>
  <button id="addSubmit">Add</button>
  </form></div>`);
  $('#addSubmit').on('click',buttonAdd);
}


//delete Function
const buttonDelete = function(){
  event.preventDefault();
  const input = $('#deleteInput').val();
  let message = 'Employee Not Found';
  for(let i=0;i<employeeList.length;i++){
    if (employeeList[i].name === input){
      employeeList.splice(i,1);
      message ='Employee Deleted';
    }
  }
  $('#displayBoard').append(`<div>${message}</div>`);
}

const deleteFunc= function(){
  event.preventDefault();
  $('#displayBoard').empty();
  $('#displayBoard').append(`<div><form>
  <input type="text" id="deleteInput" placeholder="Employee Name" autocomplete="off" />
  <button id="deleteSubmit">Contains</button>
  </form></div>`);
  $('#deleteSubmit').on('click',buttonDelete);
}


$('#print').on('click',printFunc);
$('#verify').on('click',verifyFunc);
$('#lookup').on('click',lookupFunc);
$('#contains').on('click',containsFunc);
$('#update').on('click',updateFunc);
$('#add').on('click',addFunc);
$('#delete').on('click',deleteFunc);






