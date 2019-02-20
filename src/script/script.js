/*
**	Author: Vladimir Shevchenko
**	URI: http://www.howtomake.com.ua/2012/stilizaciya-vsex-elementov-form-s-pomoshhyu-css-i-jquery.html 
*/


// Select
$('.slct_d').click(function(){
	/* Заносим выпадающий список в переменную */
	var dropBlock = $(this).parent().find('.drop_d');
	
	/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown();
		
		/* Выделяем ссылку открывающую select */
		$(this).addClass('active');

		
		/* Работаем с событием клика по элементам выпадающего списка */
		$('.drop_d').find('.did').click(function(){
			
			/* Заносим в переменную HTML код элемента 
			списка по которому кликнули */
			var selectResult_ed = $(this).html();
			
			/* Находим наш скрытый инпут и передаем в него 
			значение из переменной selectResult */
			$(this).parent().parent().find('.educat input').val(selectResult_ed);
			
			/* Передаем значение переменной selectResult в ссылку которая 
			открывает наш выпадающий список и удаляем активность */
			$('.slct_d').removeClass('active').html(selectResult_ed),
			
			/* Скрываем выпадающий блок */
			dropBlock.slideUp();
		});
			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});	
	// Select
	$('.slct_e').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.drop_e');
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();
			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');
			
			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop_e').find('.die').click(function(){
				
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				var selectResult_ed = $(this).html();
				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				$(this).parent().parent().find('.educat input').val(selectResult_ed);
				
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				$('.slct_e').removeClass('active').html(selectResult_ed);
				
				/* Скрываем выпадающий блок */
				dropBlock.slideUp();
			});
			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});	
		
		
