(function(window, undefined) {
'use strict';
function allocInit(eAI) {
	document.getElementById('sLoad').addEventListener('click',function(e) { appendSpinner('container','Loading Sample...'); } );
	document.getElementById('hLoad').addEventListener('click',function(e) { removeSpinner(); } );
}
function appendSpinner(eleSp, statusTxt) {
	removeSpinner();
	var pl = document.createElement('div');
	var st = document.createElement('div');
	pl.id = 'spinner_mc';
	st.id = 'status_sp_txt';
	if (statusTxt !== undefined) {
		st.innerHTML = statusTxt;
	}
	document.getElementById(eleSp).appendChild(pl);
	document.getElementById(eleSp).appendChild(st);
}
function removeSpinner() {
	if(document.getElementById('spinner_mc')) {
		document.getElementById('spinner_mc').parentNode.removeChild(document.getElementById('spinner_mc'));
	}
	if(document.getElementById('status_sp_txt')) {
		document.getElementById('status_sp_txt').parentNode.removeChild(document.getElementById('status_sp_txt'));
	}
}
if (document.readyState != 'loading'){
	allocInit();
} else {
	document.addEventListener('DOMContentLoaded', allocInit);
}
})(window);
