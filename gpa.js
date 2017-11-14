
function gpachaxun()
{
	var whatfenshu = document.getElementById("fenshu").value;
	var whatzhanbi = document.getElementById("zhanbi").value;
	var whatGPA = document.getElementById("GPA").value;
	
	console.log(whatfenshu)
	console.log(whatzhanbi)
	console.log(whatGPA)

	if (whatGPA == 1)
	{
		document.getElementById("feedback").innerHTML ="施主一心求死，小僧也没有办法<br>你GPA光要1，学个毛线";
	}
	else if(whatGPA == 2)
	{
		var yaoqiufenshu=(25*100-whatfenshu*(100-whatzhanbi))/whatzhanbi
		console.log(yaoqiufenshu)
	}
	else if(whatGPA == 3)
	{
		var yaoqiufenshu=(47*100-whatfenshu*(100-whatzhanbi))/whatzhanbi
		console.log(yaoqiufenshu)
	}
	else if(whatGPA == 4)
	{
		var yaoqiufenshu=(50*100-whatfenshu*(100-whatzhanbi))/whatzhanbi
		console.log(yaoqiufenshu)
	}
	else if(whatGPA == 5)
	{
		var yaoqiufenshu=(65*100-whatfenshu*(100-whatzhanbi))/whatzhanbi
		console.log(yaoqiufenshu)
	}
	else if(whatGPA == 6)
	{
		var yaoqiufenshu=(75*100-whatfenshu*(100-whatzhanbi))/whatzhanbi
		console.log(yaoqiufenshu)
	}
	else if(whatGPA == 7)
	{
		var yaoqiufenshu=(85*100-whatfenshu*(100-whatzhanbi))/whatzhanbi
		console.log(yaoqiufenshu)
	}

	console.log(yaoqiufenshu)
	if(yaoqiufenshu<=0)
	{
		document.getElementById("feedback").innerHTML = "不用去考了，分数够了<br>提高点预期GPA如何？"
	}
	else if (yaoqiufenshu>100)
	{
		document.getElementById("feedback").innerHTML = "别想了，考满分都到不了<br>降低点预期GPA如何？"
	}
	else if (yaoqiufenshu>=0 && yaoqiufenshu<100)
	{
		document.getElementById("feedback").innerHTML = "考"+yaoqiufenshu+"%就够了"
	}
}