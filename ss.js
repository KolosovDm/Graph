//ss.js моделирование салфетки Серпинского
var btn = document.getElementById('serp');
btn.onclick = function(){
	gr.init({width: 600, height:600})
	var A, B, C//вершины правильного треугольника
	A = {x:10, y: 10, w:3, h:3, colorRect: 'red'};
	B = {x:510, y: 10, w:3, h:3, colorRect: 'red'};
	C = {x:255, y:260, w:3, h:3, colorRect: 'red'};
	var n; //количество точек;
	 
	 n = prompt('Введите количество точек', 5000);
	//генератор случафйных целых
	function getRandomInt(max){
		return Math.floor(Math.random() * Math.floor(max));
	}
	var Y = {}//случайная точка для начала алгоритма
	Y.x = getRandomInt(599);
	Y.y = getRandomInt(599);
	Y.w = 1;
	Y.h = 1;
	Y.colorRect = 'red'
	function Line(){
		gr.fRect(Y);//создадим случайную начальную точку
		//запустим цикл отрисовки салфетки
		for(var  i = 0; i < n; i++){
			
		 function vertex(){
			 var vert;
				//генерируем номер вершины
				 var numV = getRandomInt(3) + 1//добавляем 1 чтобы нумерация была от 1 до 3, а не от 0 до 2;
				 switch (numV){
					 case 1: vert = A;
							break;
					 case 2: vert = B;
							break;
					 case 3: vert = C;
							break;
				 }
				 return vert;
				 
			}
			var V = vertex();//текущщая вершина	
			//функция расчёта новых координат точки Y и её отрисовка
			function tmp(Y, V){
				this.Y = Y;
				this.V = V;
				Y.x = (Y.x + V.x)/2;
				Y.y = (Y.y + V.y)/2
				return Y;
			}
		Y = tmp(Y, V);
		gr.fRect(Y);			
		}
	}
	Line();
	
}