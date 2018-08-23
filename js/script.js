'use strict';
(function(){ 
	/* W kodzie HTML i CSS dodaliśmy style dla prostego modala, który będzie zawsze wyśrodkowany w oknie. 
	
	Teraz wystarczy napisać funkcję otwierającą modal:
	*/

	var modalOne = document.getElementById('modal-one');
	var modalTwo = document.getElementById('modal-two');
	
	var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');

	};

	document.querySelector('[href="#modal-one"]').addEventListener('click', one);
	document.querySelector('[href="#modal-two"]').addEventListener('click', two);
	document.querySelector('[href="#modal-three"]').addEventListener('click', three);

	function one(event) {
		document.getElementById('modal-one').classList.add('show');
	}

	function two() {
		document.getElementById('modal-two').classList.add('show');
	}

	function three() {
		document.getElementById('modal-three').classList.add('show');
	}


	// Mimo, że obecnie mamy tylko jeden link, stosujemy kod dla wielu linków. W ten sposób nie będzie trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale
	
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}


	
	// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
		
		var closeModal = document.querySelectorAll('.modal');
		
		for(var i = 0; i < closeModal.length; i++){
			closeModal[i].classList.remove('show');
		}
	};

	

	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
	/* I to wszystko - mamy już działający modal! 
	
	ĆWICZENIE: 
	Zmień funkcję showModal tak, aby w momencie wyświetlania była zmieniana treść nagłówka na dowolną inną, np. "Modal header". 
	*/
	
})(); 