//Graph.js
//конструктор объекта
	var gr = (function(){
		var myArg, canvas, ctx;		
		//свойства по умолчанию, если не передал пользователь 	
			var DEFAULTS = {
					height: '200px',
					width: '300px',
					colorRect: '#b9b9c8',
					colorline: '#535362',
					x: 0,
					y: 0,
					w: 0,
					h: 0
				}
		return {		
		//инициализация холста по обязательному id = 'canvas'		
			init: function(){			
			myArg = arguments[0] || '';
				canvas = document.getElementById('canvas');
				ctx = canvas.getContext('2d');
				canvas.setAttribute('height', myArg.height || DEFAULTS.height);
				canvas.setAttribute('width', myArg.width || DEFAULTS.width);
				return this
			},
		//функцция отрисовки прямоугольника	с заливкой
			fRect: function(){
				myArg = arguments[0] || '';
				ctx.fillStyle = myArg.colorRect || DEFAULTS.colorRect;
				ctx.fillRect(myArg.x || DEFAULTS.x, myArg.y || DEFAULTS.y, myArg.w || DEFAULTS.w, myArg.h || DEFAULTS.h);				
				return this}		
				} 
	})()
	
	 	