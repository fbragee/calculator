add = (a, b) => {
	return a + b;
};
subtract = (a, b) => {
	return a - b;
};
multiply = (a, b) => {
	return a * b;
};
divide = (a, b) => {
	return a / b;
};

let firstNum;
let secondNum;
let operator;

operate = (op, a, b) => {
	return op(a, b);
};

const display = document.querySelector('.display');

// for (let i = 0; i < 9; i++) {
// 	const digit = document.querySelector(`.digit${i}`);
// 	digit.addEventListener('click', function (e) {
// 		display.append(digit.innerText);
// 	});
// }

const digit1 = document.querySelector('.digit1');
digit1.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit1.innerText;
	} else {
		display.append(digit1.innerText);
	}
});
const digit2 = document.querySelector('.digit2');
digit2.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit2.innerText;
	} else {
		display.append(digit2.innerText);
	}
});
const digit3 = document.querySelector('.digit3');
digit3.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit3.innerText;
	} else {
		display.append(digit3.innerText);
	}
});
const digit4 = document.querySelector('.digit4');
digit4.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit4.innerText;
	} else {
		display.append(digit4.innerText);
	}
});
const digit5 = document.querySelector('.digit5');
digit5.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit5.innerText;
	} else {
		display.append(digit5.innerText);
	}
});
const digit6 = document.querySelector('.digit6');
digit6.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit6.innerText;
	} else {
		display.append(digit6.innerText);
	}
});
const digit7 = document.querySelector('.digit7');
digit7.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit7.innerText;
	} else {
		display.append(digit7.innerText);
	}
});
const digit8 = document.querySelector('.digit8');
digit8.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit8.innerText;
	} else {
		display.append(digit8.innerText);
	}
});
const digit9 = document.querySelector('.digit9');
digit9.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit9.innerText;
	} else {
		display.append(digit9.innerText);
	}
});
const digit0 = document.querySelector('.digit0');
digit0.addEventListener('click', function (e) {
	if (display.innerText == 0) {
		display.innerText = digit0.innerText;
	} else {
		display.append(digit0.innerText);
	}
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
	display.innerText = 0;
});

const plus = document.querySelector();
