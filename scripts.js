
var windowH = document.body.offsetHeight;
var bt = document.querySelectorAll('.stages');
var persona = document.querySelector('#walter');
var season = '';
var classname = '';

for(x=0, tt = bt.length; x < tt; x++){

	bt[x].onclick=function(e){

		
		
		for(y=0, k = x; y < k; y++ ){

			
			classname  = bt[y].className.replace(/active-button{1}/gi,'');
			bt[y].setAttribute('class', classname);
		
		}

		persona.removeAttribute("class");
		persona.setAttribute('class',this.className.replace('stages',''));

		this.setAttribute('class', this.className + ' active-button');

		
	}
}


//ANIMATION SMOKE...


var newSmoke = '';
var qtdSmoke = '';
var obj = '';

smoke = function(who){
 	
 	qtdSmoke = document.querySelectorAll('.smoke').length;
 	newSmoke = document.createElement('div');
 	newSmoke.setAttribute('class','smoke');
 	newSmoke.setAttribute('id','smk_'+qtdSmoke);

 	document.getElementById(who).appendChild(newSmoke);

 	obj = document.getElementById('smk_'+qtdSmoke);

 	if(qtdSmoke%2==0){
 		obj.setAttribute('class','smoke smokeRunLeft');
 	} 

 	if(qtdSmoke%2!=0) {
 		obj.setAttribute('class','smoke smokeRunRight');
 	}
	
}

var i = null;

function newSmoking(who){
	var x = 0;
  	i  = setInterval(function(){
 		
  		
 		if(x==9){
 			clearInterval(i)
 		}

 		x++;	
 			new smoke(who);

 	},50000/60)
 }


newSmoking('chemistry-cloud');


