const addForm = document.querySelector('#add_name_form');
const addNameBox = document.querySelector('#add_name_box');
const dropDownMenu = document.querySelector('#number_per_team');
const namelist = [];

console.log(addForm.new_input)

 function addNewName() {
   const input = addForm.new_input
   const name = input.value
   if (namelist.length === 0) {
     const newNameList = document.createElement('ul');
     newNameList.className = 'namelist';
     newNameList.setAttribute('id', 'initialnamelist');
     addNameBox.appendChild(newNameList);
   }
   namelist.push(name);
   const namelistelement = document.querySelector('#initialnamelist');
   namelistelement.insertAdjacentHTML('beforeend', `<li>${name} <button class="removebutton">x</button></li>`);
   input.value = "";
 }

 function calculateTeams() {

   const maxplayers = Math.ceil(namelist.length / 2);
   console.log(dropDownMenu.children.length)
   if (maxplayers <= 1 || dropDownMenu.children.length === maxplayers) {
     return;
   }
   dropDownMenu.insertAdjacentHTML('beforeend', `<option value="${maxplayers}">${maxplayers}</option>`)
 }


console.log(addNameBox);
console.log(namelist)

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewName();
  calculateTeams();
});