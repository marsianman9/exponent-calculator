window.onload = ()=> {
	showCalc();
	calcRun();
	clearCalc();
}

function showCalc() {
	let btnPlus = document.querySelector('input[type="checkbox"]');
	let calcContent = document.querySelector('.calc-content');
	let base = document.querySelector('.base-input');
		let expo = document.querySelector('.exponent-input');
		let msg = document.querySelector('.msg');
	let btnCalc = document.querySelector('.btn-calc');

	btnPlus.addEventListener('click', ()=> {
		calcContent.classList.toggle('calc-content-toggle');
		btnCalc.classList.toggle('btn-calc-show');
		base.value='';
		expo.value='';
		msg.innerHTML='';
	})
}

// Exponent Calculator
function calcRun() {

	let btnCalc = document.querySelector('.btn-calc');

	btnCalc.addEventListener('click', ()=> {
		let base = document.querySelector('.base-input').value;
		let expo = document.querySelector('.exponent-input').value;
		let msg = document.querySelector('.msg');
		let result=1;

		for(let i=0;i<expo;i++) {
			result *= base;
		}
		msg.innerHTML = result;
		msg.classList += ' msg-show';

		if(base==''||expo=='') {
			alert('You must input something!');
			msg.innerHTML ='';
		}
	});
}

function clearCalc() {
	let btnClear = document.querySelector('.btn-clear');

	btnClear.addEventListener('click', ()=> {
		let base = document.querySelector('.base-input');
		let expo = document.querySelector('.exponent-input');
		let msg = document.querySelector('.msg');

		base.value='';
		expo.value='';
		msg.innerHTML = '';
	});

}
