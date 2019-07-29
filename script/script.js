const search = (e) => {
	const baseUrl = 'https://www.google.com/search?q=';
	// this.preventDefault();
	e.preventDefault();
	console.log('running');
}

const input = document.querySelector('input');
input.preventDefault();
input.addEventListener('submit', search);
input.addEventListener('input', search);