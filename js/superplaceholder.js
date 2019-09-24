superplaceholder({
	el: document.querySelector('.texto1'),
	sentences: [ 'Escribe tu nombre y apellido aquí','Por favor...'],
	options: {
		// delay between letters (in milliseconds)
		letterDelay: 90, // milliseconds
		// delay between sentences (in milliseconds)
		sentenceDelay: 900,
		// should start on input focus. Set false to autostart
		startOnFocus: false,
		// loop through passed sentences
		loop: true,
		// Initially shuffle the passed sentences
		shuffle: false,
		// Show cursor or not. Shows by default
		showCursor: true,
		// String to show as cursor
		cursor: '|'
	}
});
superplaceholder({
	el: document.querySelector('.texto2'),
	sentences: [ 'Ingresa tu email','ejemplo@correo.cl'],
	options: {
		// delay between letters (in milliseconds)
		letterDelay: 90, // milliseconds
		// delay between sentences (in milliseconds)
		sentenceDelay: 900,
		// should start on input focus. Set false to autostart
		startOnFocus: false,
		// loop through passed sentences
		loop: true,
		// Initially shuffle the passed sentences
		shuffle: false,
		// Show cursor or not. Shows by default
		showCursor: true,
		// String to show as cursor
        cursor: '|'
	}
});
superplaceholder({
	el: document.querySelector('.texto3'),
	sentences: [ 'No olvides el asunto de tu mensaje'],
	options: {
		// delay between letters (in milliseconds)
		letterDelay: 90, // milliseconds
		// delay between sentences (in milliseconds)
		sentenceDelay: 900,
		// should start on input focus. Set false to autostart
		startOnFocus: false,
		// loop through passed sentences
		loop: true,
		// Initially shuffle the passed sentences
		shuffle: false,
		// Show cursor or not. Shows by default
		showCursor: true,
		// String to show as cursor
		cursor: '|'
	}
});
superplaceholder({
	el: document.querySelector('textarea'),
	sentences: [ 'Escribe tu mensaje'],
	options: {
		// delay between letters (in milliseconds)
		letterDelay: 90, // milliseconds
		// delay between sentences (in milliseconds)
		sentenceDelay: 900,
		// should start on input focus. Set false to autostart
		startOnFocus: false,
		// loop through passed sentences
		loop: true,
		// Initially shuffle the passed sentences
		shuffle: false,
		// Show cursor or not. Shows by default
		showCursor: true,
		// String to show as cursor
		cursor: '|'
	}
});