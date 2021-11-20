let user = document.getElementById('userInput');

function submit() {
	if (user.value === '') {
		window.alert('Sorry, but this function is not currently available');
	} else {
		window.alert('Sorry, ' + user.value + ', but this function is not currently available');
	}
}