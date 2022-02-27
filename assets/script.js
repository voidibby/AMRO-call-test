const toMix = document.getElementsByClassName("to-mix");
const toMixObj = [];

function Paragraph(textNode) {
	this.textNode = textNode;
	this.originalStr = this.textNode.innerText;
	this.remixText = function (lengthFactor) {
		let str = this.originalStr;
		lengthFactor ? null : (lengthFactor = 15); // Difines how strong is the effect
		for (let i = 0; i < str.length / lengthFactor; i++) {
			let chartoChange = getRandomInt(textNode.innerText.length);
			if (
				textNode.innerText.charCodeAt(chartoChange) != 10 &&
				textNode.innerText.charCodeAt(chartoChange) != 32
			) {
				str = str.replaceAt(chartoChange, getRamdomChar());
			}
		}
		textNode.innerText = str;
	};
}

String.prototype.replaceAt = function (index, replacement) {
	if (index >= this.length) {
		return this.valueOf();
	}

	var chars = this.split("");
	chars[index] = replacement;
	return chars.join("");
};

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

const getRamdomChar = () => {
	let randomChar = getRandomInt(6);
	switch (randomChar) {
		case 0:
			return "█";
			break;
		case 1:
			return "←";
			break;
		case 2:
			return "→";
			break;
		case 3:
			return "↑";
			break;
		case 4:
			return "↓";
			break;
		case 5:
			return "●";
			break;
		case 6:
			return "↖";
			break;
		case 7:
			return "↗";
			break;
		case 8:
			return "↘";
			break;
		case 9:
			return "↙";
			break;
		default:
		// code block
	}
};

const remixAllTexts = () => {
	for (let i = 0; i < toMix.length; i++) {
		if (i == 0) {
			toMixObj[i].remixText(2);
		} else {
			toMixObj[i].remixText();
		}
	}
};

for (let i = 0; i < toMix.length; i++) {
	toMixObj[i] = new Paragraph(toMix[i]);
	toMixObj[i].remixText();
}

const myInterval = setInterval(remixAllTexts, 2000);
