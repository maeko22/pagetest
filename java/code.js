// alert('bonjour les zero');
// var ndr1=51, nbr2=10, mot='bonjour', mot2= 'comment vous allez';
// alert('voici les nombres:'+ nbr2+mot2 +'comment'+ mot);
// var  a=0, b=0, c=0, result, discr , x1, x2;
// a = parseInt(prompt('entrez a :'));
// b= parseInt(prompt('entrez b:'));
// c= parseInt(prompt('entrez c:'));
// //calcul du discriminant
// discr = ((b*b) - (4*(a)*(c))) ;


// 	if (discr > 0)
// 	 { 

// 	 	x1 = ((-b - (discr**(1/2))/(2*a) );
// 	    x2 = ((-b + (discr**(1/2))/(2*a) );
	 	
        
//         alert('resulta'+ x1 +''+ x2);
          
// 	 }else{
// // 
// var number = 0;
//  var output = number++; 
//  alert(number); 
//  alert(output); 
//  alert(number);
// // var a= 1;
// alert(a++);
// alert(++a);
// var number = 0;
//  var output = ++number; 
//  alert(number); 
//  alert(output); 
// //  alert(number);
// var nombre=parseInt(prompt('entrez un nombre')) , i=0;

// while(i<13)
// {
// 	alert( nombre+'*'+i +'='+ nombre*i);
// 	i++;
// }

// var tab=[], i, c;

// tab=parseInt(prompt('valeur'));

// for (var i = 0, c = tab.length; i < c; i++) {
//      alert(tab[i]);  }




				
			// var nicks = [],
			//  // Création du tableau vide    
			//  nick; 
			//  while (nick = prompt('Entrez un prénom :')) 
			//  { // Si la valeur assignée à la variable nick » est valide (différente de « null ») alors la boucle s'exécute    
			//  nicks.push(nick); // Ajoute le nouveau prénom au tableau 
			//  } if (nicks.length > 0) 
			//  { // On regarde le nombre d'items    
			//  alert(nicks.join(' ')); // Affiche les prénoms à la suite 
			// } else 
			// {   
			//  alert('Il n\'y a aucun prénom en mémoire !'); 
			// }


// var tab = [], c,i;
// while(confirm('voulez vous entrez un nouvel element\?') == true)
// {
//  	// cont = parseInt(prompt('entrez nombre'));
//  	tab.push(parseInt(prompt('entrez nombre')));
//  }	
// // // }if (tab.length > 0)
// // // {
// // // 	alert(tab.join(' '));
// // // }
// // // alert(tab);

// // alert(tab.length);
// for (var i = 0, c = tab.length; i < c; i++) {
//      alert(tab[i]);  }



// //exercice 1
// // afficher le maximum et le minimum de quelques nombre entré par l'utilisateur
// var i, c, j = 0, tmp, nbre = [];

// while(confirm('Voulez vous entrer un nombre dans le tableau\?'))//la boucle while permet d'entrer des valleur dans le tableau tant que l'utilisateur confirm
// { //do while oblige l'utilisateur à saisir un nombre
// 	do
// 	{
// 		contenu = parseInt(prompt('saisissez une valeur'));
//        if(isNaN(contenu))
// 		{
// 			alert('la valeur saisis n\'est pas un nombre');
// 		}else{nbre.push(contenu);}

// 	}while(isNaN(contenu)); //isNaN retourne true quand la variable n'est pas un nombre et false dans le cas contraire

// }

// do
// { 
// 	for (var i = 0, c = nbre.length; i < c; i++) 
// 	{
// 		if(nbre[i] > nbre[i+1])
// 		{
// 			tmp = nbre[i];
// 			nbre[i] = nbre[i+1];
// 			nbre[i+1] = tmp;
// 		} 
// 	}

// 	j += 1;
// }while(j < nbre.length);

// alert('le minimum des nombres est :'+ nbre[0]+ '  et le maximum est :'+ nbre[nbre.length-1]);




//exercice 2 nombre premier

// var mod, nombre, tab = [], i, nb=0;

// do
// {
//    nombre=parseInt(prompt('entrez nombre'));
//    if(isNaN(nombre))
//  {
//    alert('vous n\'avez pas saisis un nombre ');
//  }else{
// 	   nb = nombre;
//       }

// }while(isNaN(nombre));


// 	for(var i=2; i<nb+1; i++)
// 	{
// 		mod = nb % i;
// 		if (mod === 0) 
// 		{
// 			tab.push(i);
// 		}
// 	}

// 	if(tab[0] == nb)
// 	{
// 		alert(nb +' est un nombre premier');
// 	}else{
// 		alert(nb +' n\'est pas un nombre premier');
// 	}


// var nbre=parseInt(prompt('entrez un nombre'));
//  var compteur=0;
// for(var i=2; i<nbre; i++){
// 	if (nbre%i  == 0) {
// 		compteur++;
// 	}
// 	if (compteur>0) {
// 		alert('le nombre n\'est pas un nombre premier');

// 	}else{
// 		alert('le nombre est un nombre premier');
// 	}



// exercice 3 pair impair
// var a=0, number;

// do
// {
//    number=parseInt(prompt('entrez nombre'));
//    if(isNaN(number))
//  {
//    alert('vous n\'avez pas saisis un nombre ');
//  }else{
// 	   a = number;
//       }

// }while(isNaN(number));

// if (a%2 === 0) 
// {
// 	alert(a + ' est un nombre pair');

// }else{
// 	  alert(a + ' est un nombre impair');
//      }

//exercice 4 ppcm et pgcd
// var a=0, b=0, c=0, d=0, number1,number2 ;

// do
// {
//    number1=parseInt(prompt('entrez le premier nombre'));
//    number2=parseInt(prompt('entrez le deuxieme nombre'));
//    if(isNaN(number1) || isNaN(number2))
//  {
//    alert( 'saisissez des nombre entier non null' );
//  }else{
// 	   a = number1;
// 	   b = number2;
//       }
// }while(isNaN(number1) || isNaN(number2));
// c = a;
// d = b;
// while(a != b)
// {
// 	if(a<b)
// 	{
// 		a = a+c;
// 	}else if (a>b)
// 	 {
// 	 	b = b+d; 
// 	 }

// }
// alert('ppcm '+ '('+c+',' +d+')' +'='+ b+'\n');
// alert('pgcd'+'('+c+','+d+')'+'='+ ((c*d)/b) );

// 
// var nbre= parseInt(prompt('entrez un nombre'));
// var min=nbre, max=nbre, nbre2, i= 1;
// while(i<5){
// 	nbre2=parseInt(prompt('entrez encore un nombre'));

// 	if(nbre2<min){
// 		min = nbre2;
// 	}
// 	else if(nbre2 > max){
// 		max = nbre2;
// 	}
// 	i++;
// }
// alert("le maximum est: "+max+" le minimum est: "+min);

// var cousinsString = 'Pauline Guillaume Clarisse',    cousinsArray  = cousinsString.split(' '); 
// alert(cousinsString);
// alert(cousinsArray);

// var matrice1 = '['+[5,6,7,8,9,10]+']';
// alert(matrice1);




// var nbre = prompt('entrez les nombres à comparer séparés par espace');
// var nbr = nbre.split(' '),taille = nbr.length;
// var min=parseInt(nbr.shift()), max=min, nbre2, i=0;

// while(i<taille){
// 	nbre2= parseInt(nbr.shift());

// 	if(nbre2<min){
// 		min = nbre2;
// 	}
// 	else if(nbre2 > max){
// 		max = nbre2;
// 	}
// 	i++;
// }
// alert("le maximum est: "+max+" le minimum est: "+min);


// var n = parseInt (prompt('Entrez le nombre d\'élément à comparer')),nbre=[];

// while(n<=1 || isNaN(n)){
// 	 n = parseInt (prompt('Entrez un nombre supérieur à 1'));
// }

// for(var i =0;i<n;i++){
// 	nbre[i] = parseInt(prompt('Entrez le nombre à la position'+(i+1)));
// }

// var min = nbre[0],max=nbre[0],nbre2;

// for(var i =1;i<nbre.length;i++){
// 	nbre2 = nbre[i];

// 	if(nbre2<min){
// 		min = nbre2;
// 	}
// 	else if(nbre2 > max){
// 		max = nbre2;
// 	}   

// }
// alert("le maximum est: "+max+" le minimum est: "+min);





// var nbr = nbre.split(' '),taille = nbr.length;
// var min=parseInt(nbr.shift()), max=min, nbre2, i=0;

// while(i<taille){
// 	nbre2= parseInt(nbr.shift());

// 	if(nbre2<min){
// 		min = nbre2;
// 	}
// 	else if(nbre2 > max){
// 		max = nbre2;
// 	}
// 	i++;
// }
// alert("le maximum est: "+max+" le minimum est: "+min);
// tp


// var conversion;
// function convert() {

// }
// while(alert()){


// var nombre=parseInt(prompt('Entrez un nombre entre 0 et 999');
// conversion = prompt(convert());
// alert('la convertion du nombre : '+nombre+' est: ' +convertion);
// }

// alert(parseInt('081', 10));
alert('bonzours les zeros!');