const state={
  employeeList: [
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
  ]
}
const render=function(sel,content){
  $(sel).append(content);
}

//print function
const printFunc = function(){
  $('.box1').empty();
  $('.box2').empty();
  document.querySelectorAll('#container').backgroundColor='#1d1c1c';
  render('.box1',`<div class='display1'>The Minimalists Directory. </br> Employee List</br></br></br></div>` );
  state.employeeList.forEach(
    e=>render('.box2',`<div class='side display2'>Name: ${e.name}</br>Office Number: ${e.officeNum}</br>Phone: ${e.phoneNum}</br></br></div>`)
  );
}


// verify function
const buttonVerify = function(event){
  event.preventDefault();
  $('.box2').empty();
  const input = $('#verifyInput').val();
  let message = 'Employee Not Found';
  let found = state.employeeList.some(e=>e.name.toLowerCase()===input.toLowerCase());
  if (found){
    message = 'Employee Found';
  }
  render('.box2',`<div>${message}</div>`);
}

const verifyFunc = function(event){
  event.preventDefault();
  $('.box2').empty();
  $('.box1').empty();
  render('.box1',`<div><form>
  <input type="text" id="verifyInput" placeholder="Employee Name" autocomplete="off" />
  <button id="verifySubmit">Verify</button>
  </form><hr></div>`);
  
  $('#verifySubmit').on('click',buttonVerify);
} 




//lookup function
const buttonLookup = function(event){
  event.preventDefault();
  $('.box2').empty();
  const input = $('#lookupInput').val();
  let message = 'Employee Not Found';
  const lookupEmployee=state.employeeList.find(e=>e.name.toLowerCase()===input.toLowerCase());
  if (lookupEmployee){
    message =`Name: ${lookupEmployee.name}</br> 
      Office Number: ${lookupEmployee.officeNum}</br> 
      Phone: ${lookupEmployee.phoneNum}`;
  }
  render('.box2',`<div>${message}</div>`);
}

const lookupFunc= function(event){
  event.preventDefault();
  $('.box1').empty();
  $('.box2').empty();
  render('.box1',`<div><form>
  <input type="text" id="lookupInput" placeholder="Employee Name" autocomplete="off" />
  <button id="lookupSubmit">Lookup</button>
  </form><hr></div>`);
  
  $('#lookupSubmit').on('click',buttonLookup);
}


//contains Function
const buttonContains = function(event){
  event.preventDefault();
  $('.box2').empty();
  const input = $('#containsInput').val();
  let message = '';
  const containList = state.employeeList.filter(e=>e.name.includes(input));
  if (containList.length===0){
    render('.box2',`<div>Employee Not Found</div>`);
  }else{
    containList.forEach(e=>render('.box2',`Name: ${e.name}</br> 
    Office Number: ${e.officeNum}</br> 
    Phone: ${e.phoneNum}</br></br>`));
  }
  
}

const containsFunc= function(event){
  event.preventDefault();
  $('.box2').empty();
  $('.box1').empty();
  render('.box1',`<div><form>
  <input type="text" id="containsInput" placeholder="Keyword" autocomplete="off" />
  <button id="containsSubmit">Contains</button>
  </form><hr></div>`);
  
  $('#containsSubmit').on('click',buttonContains);
}



//update Function
const buttonUpdate = function(event){
  event.preventDefault();
  $('.box2').empty();
  const input = $('#updateName').val();
  let message = 'Employee Not Found';
  let updateEmployee=state.employeeList.find(e=>e.name===input);
  if(updateEmployee){
    render('.box2',`Name: ${input}</br> 
    Office Number: ${$('#updateNumber').val()}</br> 
    Phone: ${$('#updatePhone').val()}</br></br>`);
    updateEmployee.name = input;
    updateEmployee.phoneNum=$('#updatePhone').val();
    updateEmployee.officeNum=$('#updateNumber').val();
  }else{
    render('.box2',`<div>${message}</div>`);
  }
  
}

const updateFunc= function(event){
  event.preventDefault();
  $('.box2').empty();
  $('.box1').empty();
  render('.box1',`<div><form><div class='right'>
  Name <input type="text" id="updateName" placeholder="Employee Name" autocomplete="off" />
  </br>
  Number <input type="text" id="updateNumber" placeholder="Office Number" autocomplete="off" />
  </br>
  Phone <input type="text" id="updatePhone" placeholder="Phone Number" autocomplete="off" />
  </br></div>
  <button id="updateSubmit">Update</button>
  </form><hr></div>`);
  
  $('#updateSubmit').on('click',buttonUpdate);
}


//add Function
const buttonAdd = function(event){
  event.preventDefault();
  $('.box2').empty();
  const inputName = $('#addName').val();
  const inputNumber = $('#addNumber').val();
  const inputPhone = $('#addPhone').val();
  state.employeeList.push({
    name:inputName,
    officeNum: inputNumber,
    phoneNum: inputPhone
  })
  message =`Name: ${inputName}</br>Office Number: ${inputNumber}</br>Phone: ${inputPhone}</br></br>`;  
  $('.box2').append(`<div>${message}</div>`);
}

const addFunc= function(event){
  event.preventDefault();
  $('.box1').empty();
  $('.box2').empty();
  $('.box1').append(`<div><form><div class='right'>
  Name <input type="text" id="addName" placeholder="Employee Name" autocomplete="off" />
  </br>
  Number <input type="text" id="addNumber" placeholder="Office Number" autocomplete="off" />
  </br>
  Phone <input type="text" id="addPhone" placeholder="Phone Number" autocomplete="off" />
  </br></div>
  <button id="addSubmit">Add</button>
  </form><hr></div>`);
  $('#addSubmit').on('click',buttonAdd);
}


//delete Function
const buttonDelete = function(event){
  event.preventDefault();
  $('.box2').empty();
  const input = $('#deleteInput').val();
  let message = 'Employee Not Found';
  for(let i=0;i<state.employeeList.length;i++){
    if (state.employeeList[i].name === input){
      state.employeeList.splice(i,1);
      message ='Employee Deleted';
    }
  }
  render('.box2',`<div>${message}</div>`);
  
}

const deleteFunc= function(event){
  event.preventDefault();
  $('.box1').empty();
  $('.box2').empty();
  render('.box1',`<div><form>
  <input type="text" id="deleteInput" placeholder="Employee Name" autocomplete="off" />
  <button id="deleteSubmit">Delete</button>
  </form><hr></div>`);

  $('#deleteSubmit').on('click',buttonDelete);
}


$('#print').on('click',printFunc);
$('#verify').on('click',verifyFunc);
$('#lookup').on('click',lookupFunc);
$('#contains').on('click',containsFunc);
$('#update').on('click',updateFunc);
$('#add').on('click',addFunc);
$('#delete').on('click',deleteFunc);






