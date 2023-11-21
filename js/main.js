'use strict'

const teamArray = [{
    nome: "Wayne Barnett",
    posizione: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg"
}, {
    nome: "Angela Caroll",
    posizione: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
}, {
    nome: "Walter Gordon",
    posizione: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg"
}, {
    nome: "Angela Lopez",
    posizione: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
}, {
    nome: "Scott Estrada",
    posizione: "Developer",
    foto: "img/scott-estrada-developer.jpg"
}, {
    nome: "Barbara Ramos",
    posizione: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
}]

teamArray.forEach(membro => {
    console.log(`Nome: ${membro.nome}, Ruolo: ${membro.posizione}, Foto: ${membro.foto}`);
});

const teamContainer = document.getElementById('team-container');

teamArray.forEach(membro => {
    const memberInfo = document.createElement('div');
    memberInfo.innerHTML = `<img src="${membro.foto}" alt="${membro.nome}"><h3>${membro.nome}</h3><p>${membro.posizione}</p>`;
    teamContainer.appendChild(memberInfo);
});

