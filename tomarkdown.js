
function convertMarkdownToHtml() {
    const markdownDivs = document.querySelectorAll('.markdown');
    markdownDivs.forEach(div => {
        const markdownContent = div.textContent || div.innerText;
        const htmlContent = marked.parse(markdownContent);
        div.innerHTML = htmlContent;
    });


}


function polish_font () {
    const contentDiv = document.querySelector('.content')
    const textElements = contentDiv.querySelectorAll('*');
    textElements.forEach(element => {
	element.classList.add('ibm-plex-sans-regular')
    });
    const emElements = contentDiv.querySelectorAll('em');
    emElements.forEach(element => {
	element.classList.remove('ibm-plex-sans-regular')
	element.classList.add('ibm-plex-sans-regular-italic')
    });
    const strongElements = contentDiv.querySelectorAll('strong');
    strongElements.forEach(element => {
	element.classList.remove('ibm-plex-sans-light')
	element.classList.add('ibm-plex-sans-bold')
    });
    const headerElements = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headerElements.forEach(h => {
	h.className = 'dm-serif-text-regular';
    });
    const h1Elements = contentDiv.querySelectorAll('h1');
    h1Elements.forEach(h1 => {
	const br = document.createElement('hr');
	h1.appendChild(br);
    });
    const thElements = contentDiv.querySelectorAll('th');
    thElements.forEach(h => {
	h.className = 'ibm-plex-sans-semibold';
    });


}


function polish() {
    convertMarkdownToHtml();
    polish_font();
}


document.addEventListener('DOMContentLoaded', polish);

