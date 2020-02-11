function perulangan(){
	var x = "Saya ingin belajar bersama";
	var y = x.split(" ");
	y.forEach(
		function(i,j){
			var output1=[];
			output1.push("Item : ",i, "Index ke ",j);
			var output3 = output1.join(" ");
			console.log(output3);
		}
	)
}

perulangan()
