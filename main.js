const addForm = document.querySelector("#add_name_form");
const addNameBox = document.querySelector("#add_name_box");
const dropDownMenu = document.querySelector("#number_per_team");
const namelist = [];
const generateButton = document.querySelector("#generateButton");

function addNewName() {
  const input = addForm.new_input;
  const name = input.value;
  if (!input.value) {
    return;
  }
  if (namelist.length === 0) {
    const newNameList = document.createElement("ul");
    newNameList.className = "namelist";
    newNameList.setAttribute("id", "initialnamelist");
    addNameBox.appendChild(newNameList);
  }
  namelist.push(name);
  const namelistelement = document.querySelector("#initialnamelist");
  namelistelement.insertAdjacentHTML("beforeend", `<li>${name}</li>`);
  input.value = "";
}

function calculateTeams() {
  const maxplayers = Math.ceil(namelist.length / 2);
  if (maxplayers <= 1 || dropDownMenu.children.length === maxplayers) {
    return;
  }
  dropDownMenu.insertAdjacentHTML("beforeend", `<option value="${maxplayers}">${maxplayers}</option>`);
}

function generateTeams() {
  if (namelist.length === 0 || !dropDownMenu.value) {
    return;
  }
  const a = [...namelist];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  const teams = document.querySelector("#teams");
  teams.innerHTML = "";

  while (a.length != 0) {
    const newteam = document.createElement("ul");
    newteam.className = "namelist teamlist";
    const players = a.splice(0, dropDownMenu.value);
    players.map((player) => {
      newteam.insertAdjacentHTML("beforeend", `<li class="teamlistelement">${player}</li>`);
    });
    teams.appendChild(newteam);
  }
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewName();
  calculateTeams();
});

generateButton.addEventListener("click", generateTeams);
