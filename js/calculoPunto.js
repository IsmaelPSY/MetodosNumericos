function realizarintervalo()
{
    document.getElementById('tablaresultado').innerText="";
   $('#tablaresultado').append("<thead><tr><td><strong>X</strong></td><td><strong>-10</strong></td><td><strong>-9</strong></td><td><strong>-8</strong></td><td><strong>-7</strong></td><td><strong>-6</strong></td><td><strong>-5</strong></td><td><strong>-4</strong></td>"+
   "<td><strong>-3</strong></td><td><strong>-2</strong></td><td><strong>-1</strong></td><td><strong>0</strong></td><td><strong>1</strong></td><td><strong>2</strong></td><td><strong>3</strong></td><td><strong>4</strong></td><td><strong>5</strong></td><td><strong>6</strong></td><td><strong>7</strong></td>"+
   "<td><strong>8</strong></td><td><strong>9</strong></td><td><strong>10</strong></td></tr></thead><tr>");
   $('#tablaresultado').append("<td><strong>Y</strong></td>"); 
   
    for (var i = -10; i <= 10; i++) {
        $('#tablaresultado').append("<td>"+fx(i)+"</td>");
    }
    $('#tablaresultado').append("</tr>");  
}
function realizarPunto()
{
    document.getElementById('tablaresultado').innerText=""; 
    
    var n,r,fa,aux;
    var a= parseFloat(document.getElementById("a").value);
    var error= parseFloat(document.getElementById("error").value);
    n =1;
    
    document.getElementById('tablaresultado').innerHTML="<thead><tr><td><strong>i</strong></td><td><strong>Xi</strong></td><td><strong>f(Xi)</strong></td><td><strong>g(Xi)</strong></td><td><strong>error</strong></td></tr></thead>";
    do {
        r = g(a);       
         aux=Math.abs(r-a);      
         fa =fx(a);
         document.getElementById('tablaresultado').innerHTML+="<tr><td>"+n+"</td><td>"+a+"</td><td>"+fa+"</td><td>"+r+"</td><td>"+aux+"</td> </tr>";

            a = r;
          
           n++;
           //error= g(x)-x
          } while (aux >= error);
   document.getElementById('resultado_intervalo').innerHTML="<div class='alert alert-success'><a class='close' data-dismiss='alert'>X</a>La raiz encontrada es: "+r+" con error: "+aux+"</div>";
    

    //var x=(parseFloat(a)**2); //potencia de a^2
    //var x=Math.pow(a,2);
   
    //document.getElementById('resultado').innerHTML="<h5>"+x+"</h5>"
   //$('#resultado').append(x);   
}
function realizargrafica()
{
    var valor1=document.getElementById("funcion").value;
	var valor2=valor1.replace(/x/g,"(x)");
	var valor=valor2.replace("**","^");
    functionPlot({
        target: '#graficar',
	  data: [{
	    fn: valor, 
	    color: 'red' }],
	  grid: true,
	   title: 'f(x) = '+valor1,
	   width: 850,
	  height: 500,
	  xAxis: {
	    label: 'eje-x',
	    domain: [-6, 6]
	  },
	  yAxis: {
	    label: 'eje-y'
	  },
      })
}

function fx(x)
{
    var valor1=document.getElementById("funcion").value;
    
    var valor2=(valor1.replace(/x/g,"("+x+")"));
    var valor=eval(valor1.replace(/x/g,"("+x+")"));
    
    console.log(valor2);
    console.log(valor);
    return valor;
}

function g(x)
{
    var valor1=document.getElementById("funcionG").value;
    
    var valor2=(valor1.replace(/x/g,"("+x+")"));
    var valor=eval(valor1.replace(/x/g,"("+x+")"));
    
    console.log(valor2);
    console.log(valor);
    return valor;
}