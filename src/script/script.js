(function(){
	function removeClass(classSel){
		let list = document.querySelectorAll(`.${classSel}`);
		list.forEach((item)=>{
			item.classList.remove(classSel)
		})
	}

	document.querySelector("body").addEventListener('click', (event)=>{
		if(event.target.matches('.slct_d')){
			let menuSelect = event.target.closest(".menuSelect"),
			select = menuSelect.querySelector('.slct_d'),
			drop = menuSelect.querySelector('.drop_d'),
			input = menuSelect.querySelector('.input_d');

			select.classList.toggle('active');
			drop.classList.toggle('drop-active');
			drop.addEventListener('click', (event)=>{
				if(event.target.matches('.drop_i')){
					select.innerHTML = input.val = event.target.innerHTML;
					select.classList.remove('active');
					drop.classList.remove('drop-active');
				}
			})
		}
		
		if(!event.target.closest(".menuSelect") && document.querySelectorAll('.active')){
			removeClass('active');
			removeClass('drop-active');
		}
	})
}())
