//function to animate the icon

			let images = [];
			let i = 0;
			let repeatafter = 3000;

			//images in the array
			images[0]= "icon1.png";
			images[1] = "icon2.png";
			images[2] = "icon3.jpg";
			

			//function to interchange it
			function interchange(){
				document.iconn.src = images[i];

				if (i < images.length - 1) 
				{
					i++;

				}
				else{
					i=0;
				} setTimeout("interchange()", repeatafter)
			} 

			//
function disptime(){
	let dispdate = document.getElementById('today');
	let tod = new Date();
	dispdate.innerHTML = tod.getDate();
    }

	const input1 = document.getElementById("activ");
	const button1 = document.getElementById("butn1");
	const item1 = document.getElementById("list");
	function func1()
	{
		if (input1.value == "") 
		{
          alert("Please enter an item");
		} 
		else {
			let li = document.createElement("li");
			li.innerHTML = input1.value;
			item1.appendChild(li); 
			
			// creating a SPAN element
			let clear = document.createElement("button");
			clear.innerHTML = "\u00d7";
			item1.appendChild(clear);



			// when the clear is clicked it should delete the items

			clear.addEventListener('click', function () {
				item1.removeChild(li);
				item1.removeChild(clear);


			})	
		} 
		  input1.value = "";
		
	}
	

		function store() {
			localStorage.setItem('data', document.getElementById("list").innerHTML);
			const data = localStorage.getItem('data');
		
		}	if (data) {
				document.getElementById("list").innerHTML = data;
			}
	



