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
function realizarbiseccion()
{
    document.getElementById('tablaresultado').innerText=""; 
    //var funcion=e^(-x)-x // 6x^3-2x^2-x-1;
    var n,r,fr,fa,dev,aux;
    var a= parseFloat(document.getElementById("a").value);
    var error= parseFloat(document.getElementById("error").value);
    fa =fx(a);
    n =1;
    dev = derivada(a);
    document.getElementById('tablaresultado').innerHTML="<thead><tr><td><strong>i</strong></td><td><strong>Xi</strong></td><td><strong>Xi+1</strong></td><td><strong>f(Xi)</strong></td><td><strong>f'(Xi)</strong></td><td><strong>f(Xi+1)</strong></td><td><strong>error</strong></td></tr></thead>";
    do {
        r = a -(fa/dev);       
         aux=Math.abs(r-a);      
         fr =fx(r);
         document.getElementById('tablaresultado').innerHTML+="<tr><td>"+n+"</td><td>"+a+"</td><td>"+r+"</td><td>"+fa+"</td><td>"+dev+"</td><td>"+fr+"</td><td>"+aux+"</td> </tr>";

            a = r;
               
               fa =fx(a);
               dev = derivada(a);
          
           n++;
           //error=(Xi+1)-Xi
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

function derivada(x)
{
    var valor1=document.getElementById("derivada").value;
    
    var valor2=(valor1.replace(/x/g,"("+x+")"));
    var valor=eval(valor1.replace(/x/g,"("+x+")"));
    
    console.log(valor2);
    console.log(valor);
    return valor;
}