const addForm = document.getElementById("add_name_form");
const addNameBox = document.getElementById("add_name_box");
const dropDownMenu = document.getElementById("number_per_team");
const namelist = [];
const generateButton = document.getElementById("generateButton");

function addNewName() {
  const input = addForm.new_input;
  const name = input.value;
  if (!input.value) {
    return;
  }
  if (namelist.length === 0) {
    const newNameList = document.createElement("ul");
    newNameList.className = "namelist";
    newNameList.setAttribute("id", "namelist");
    addNameBox.appendChild(newNameList);
  }
  namelist.push(name);
  const namelistelement = document.createElement("li");
  namelistelement.textContent = name;
  document.getElementById("namelist").appendChild(namelistelement);
  input.value = "";
}

function calculateTeams() {
  const maxplayers = Math.ceil(namelist.length / 2);
  if (maxplayers <= 1 || dropDownMenu.children.length === maxplayers) {
    return;
  }
  document.getElementById("number_per_team").removeAttribute('disabled');
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

  const teams = document.getElementById("teams");
  teams.textContent = "";

  while (a.length != 0) {
    const newteam = document.createElement("ul");
    const teamSize = parseInt(dropDownMenu.value);
    newteam.className = "namelist teamlist";
    let players;
    if (a.length % teamSize == 1 && a.length != 3) {
      players = a.splice(0, teamSize+1);
    } else {
      players = a.splice(0, teamSize);
    }
    players.map((player) => {
      const teamlistelement = document.createElement("li");
      teamlistelement.classList.add("teamlistelement");
      teamlistelement.textContent = player;
      newteam.appendChild(teamlistelement);
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

window.onload = () => {
  document.getElementById("number_per_team").setAttribute('disabled', true);
}
