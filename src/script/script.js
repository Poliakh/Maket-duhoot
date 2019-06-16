(function(){
	document.querySelector("body").addEventListener('click', function(even){
		if(event.target.matches('.slct_d')){
			let menuSelect = event.target.closest(".menuSelect");
			let select = menuSelect.querySelector('.slct_d');
			let drop = menuSelect.querySelector('.drop_d');
			let input = menuSelect.querySelector('.input_d');
			select.classList.toggle('active');
			drop.classList.toggle('drop-active');
			drop.addEventListener('click', function(event){
				if(event.target.matches('.drop_i')){
					select.innerHTML = input.val = event.target.innerHTML;
					select.classList.remove('active');
					drop.classList.remove('drop-active');
				}
			})
		}
	})
}())
