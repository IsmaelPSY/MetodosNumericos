function realizarintervalo()
{
    document.getElementById('tablaresultado').innerText="";
    var funcion= document.getElementById("funcion").value;
    var a= parseFloat(document.getElementById("a").value);
    var b= parseFloat(document.getElementById("b").value);
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
    var n,r,fr,fa,fb,aux,aux2;
    var funcion= document.getElementById("funcion").value;
    var a= parseFloat(document.getElementById("a").value);
    var b= parseFloat(document.getElementById("b").value);
    var error= parseFloat(document.getElementById("error").value);
    var x=(a+b)/2;n=0;
       fa =fx(a);
       fb =fx(b);
       aux=x;
   if(fa*fb<0){
       document.getElementById('tablaresultado').innerHTML="<thead><tr><td><strong>i</strong></td><td><strong>a</strong></td><td><strong>b</strong></td><td><strong>r</strong></td><td><strong>f(a)</strong></td><td><strong>f(b)</strong></td><td><strong>f(r)</strong></td><td><strong>error</strong></td></tr></thead>";
    do {
         r = (a+b)/2;      
         if(n>0)
         {aux=Math.abs((r-aux2)/r);}      
         fr =fx(r);fa =fx(a);fb =fx(b);
         document.getElementById('tablaresultado').innerHTML+="<tr><td>"+n+"</td><td>"+a+"</td><td>"+b+"</td><td>"+r+"</td><td>"+fa+"</td><td>"+fb+"</td><td>"+fr+"</td><td>"+aux+"</td> </tr>";
         if (fr*fa > 0) {
               a = r;
               b = b;
           }
           else if (fr*fa < 0) {
               b = r;
               a = a;
           }
           n++;aux2=r;
          } while (aux >= error);
   document.getElementById('resultado_intervalo').innerHTML="<div class='alert alert-success'><a class='close' data-dismiss='alert'>X</a>La raiz encontrada es: "+r+" con error: "+aux+"</div>";
    }
    else
    {
         document.getElementById('tablaresultado').innerHTML="<div class='alert alert-danger'><a class='close' data-dismiss='alert'>X</a>Resultado:no existe continuidad en el intervalo ["+a+","+b+"] de la f(x)="+funcion+"</div>";
    }
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
	   width: 580,
	  height: 400,
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