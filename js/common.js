


// SCRIPT PRINCIPAL
const main = document.querySelector("main")

// creation du contenu (titre,description,code)
createBlock("div","Permet de créer un bloc simple", "<div>contenu</div>")
createBlock("h1","crée un titre,existe en h2 et h3 etc", "<h1>contenu</h1>")
createBlock("p","crée un paragraphe", "<p>contenu</p>")
createBlock("a","crée un lien", '<a href="url">texte</a>')
createBlock("img","crée une image", '<img src="url" alt="texte">')


// FONCTIONS 

function createBlock(title, description, code) {
    // ajoute un bloc de code a main
    main.innerHTML += `
    <div>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="code-box">
            <button onclick="copyCode('div')">copier</button>
            <textarea id="${title}" readonly>${code}</textarea>
        </div>
    </div>
    `
}

function copyCode(boxId) {
    const box = document.getElementById(boxId) //permet de trouver l'élément qui a pour id la valeur de boxid
    let text = box.textContent.trim();
    copyToClipboard(text)
}

function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
