const addButton = document.querySelector('#add_button');
const addNameBox = document.querySelector('#add_name_box');
const namelist = [];

 function addNewName() {
   const input = document.querySelector('#new_input');
   const name = input.value;
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

console.log(addButton);
console.log(addNameBox);
console.log(namelist)

addButton.addEventListener('click', addNewName);