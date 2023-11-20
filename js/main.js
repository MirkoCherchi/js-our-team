'use strict'

const teamArray = [{
    nome: "Wayne Barnett",
    posizione: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
}, {
    nome: "Angela Caroll",
    posizione: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
}, {
    nome: "Walter Gordon",
    posizione: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
}, {
    nome: "Angela Lopez",
    posizione: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
}, {
    nome: "Scott Estrada",
    posizione: "Developer",
    foto: "scott-estrada-developer.jpg"
}, {
    nome: "Barbara Ramos",
    posizione: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
}]

teamArray.forEach(membro => {
    console.log(`Nome: ${membro.nome}, Ruolo: ${membro.posizione}, Foto: ${membro.foto}`);
});

const teamContainer = document.getElementById('team-container'); // Assumi che esista un elemento con id 'team-container' nel tuo HTML

teamArray.forEach(membro => {
    const memberInfo = document.createElement('div');
    memberInfo.innerHTML = `<p>Nome: ${membro.nome}</p><p>Ruolo: ${membro.posizione}</p><p>Foto: ${membro.foto}</p>`;
    teamContainer.appendChild(memberInfo);
});

