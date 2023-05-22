let date = new Date()
const formattedDate = new Intl.DateTimeFormat('en-UK', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
    }).format(new Date());

document.querySelector("#date").textContent = formattedDate


document.querySelector('#lastupdated').textContent = document.lastModified

document.querySelector("#year").textContent = date.getFullYear()

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});