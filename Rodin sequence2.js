//The reason that this code works the way it does is because the limit of the 
//calculations only goes to 2^53th power so this means when the addition
// of even those large numbers is calculated it is less than 2 digits. Also because
//of this limit, only three steps of adding calculations would ever be needed.  

//This function makes the the formula sequence sequence from any number and counter = -1 in the HTML code.
			
function functionEval(inputNum, counter)
{
	var n = counter.toString();
	parseFloat(n);
	var redo, seqValue;
	var inputNum = document.getElementById('inputNum').value;	
	return seqValue = eval(inputNum); 	         
}

		
//This function puts the 2^n sequence in the span area.
function SpanDoubling()
{
	document.getElementById('doublesequence').innerHTML=
	document.getElementById('doublesequence').innerHTML +
	functionEval(inputNum, counter) + ', ';
}

//This function gets called to display in the second text box, the steps made to 
//calculate the rodin sequence.

function Rodin()
{
	
	var funcNum = functionEval(inputNum, counter);
	var N1 = AddFunction();
	var N2 = N1[0] + N1[1] + N1[2];
	var N3 = AddFunction2();
	var N4 = N3[0] + N3[1] + N3[2];
	var N5 = AddFunction3();
	var N6 = N5[0] + N5[1] + N5[2];
	var AdditionString = N2 + ' -> ' + N4 + ' -> ' + N6;
		if(funcNum>10){	
		return AdditionString
		}
		else{
		return funcNum
		}
}

//This function displays the Rodin sequence numbers in the third textbox. 
function RodinAdd()
{
	var Num1 = AddFunction();
	var Num2 = Num1[2];
	var Num3 = AddFunction2();
	var Num4 = Num3[2];
	var Num5 = AddFunction3();
	var Num6 = Num5[2];
		if(Num2<10){
		return Num2
		}
		if(Num4<10){
		return Num4
		}
		if(Num6<10){
		return Num6
		}	
}


//This function and the ones like it after, takes the formula number,  
//splits it and puts '+' between them for display and for the AddFunction()
function CharString()
{
	var myString = document.getElementById('Doubling').value;
	var index1 = 0	
	var Addition = []
	var AdditionExp
		if(myString<10){
		return myString
		}
		else{
			while(index1< myString.length){
				Addition += myString.charAt(index1) + '+' 
				index1++;
				}
			}
		return AdditionExp = Addition.substring(0,Addition.length-1)
}

//This function	takes the CharString() function and will use the eval() math fucntion to
//create a Rodin number.
function AddFunction()	
{
	var index = 0;
	var DoubleAdd = 0;
		while(index<CharString().length){
			DoubleAdd = eval(CharString())
			index++;
		}
		return [CharString(),' = ',DoubleAdd];
}

function CharString2()
{
	var index2 = 0;
	var Addition2 = [];
	var Add1 = AddFunction();
	var	Add2 = Add1[2].toString();
	var AdditionExp2;
		if(Add2<10){
			return Add2
			}
		else{
				while(index2<Add2.length){
					Addition2 += Add2.charAt(index2) + '+';
					index2++;
				}
			}
			return AdditionExp2 = Addition2.substring(0,Addition2.length-1);
}

function AddFunction2()
{
	var index3 = 0;
	var DoubleAdd2 = 0;
	var myString2 = CharString2();
		while(index3<myString2.length){
			DoubleAdd2 = eval(CharString2());
			index3++;
		}
		return [CharString2(),' = ',DoubleAdd2]
}

function CharString3()
{
	var index4 = 0;
	var Addition3 = [];
	var Add3 = AddFunction2();
	var	Add4 = Add3[2].toString();
	var AdditionExp3;
		if(Add4<10){
			return Add4
			}
		else{
				while(index4<Add4.length){
					Addition3 += Add4.charAt(index4) + '+';
					index4++;
				}
			}
			return AdditionExp3 = Addition3.substring(0,Addition3.length-1);
}

function AddFunction3()
{
	var index5 = 0;
	var DoubleAdd3 = 0;
	var myString3 = CharString3();
		while(index5<myString3.length){
			DoubleAdd3 = eval(CharString3());
			index5++;
		}
		return [CharString3(),' = ',DoubleAdd3]
}

function SpanRodin()
{
	document.getElementById('rodinsequence').innerHTML=
	document.getElementById('rodinsequence').innerHTML +
	RodinAdd() + ', ';
}




//<----------------------------------------------------------------------------------------------------->




//This function make a ratio out of a float number by using the principle of continued fractions 
//I used the code from the website: http://jonisalonen.com/2012/converting-decimal-numbers-to-ratios/
function float2rat(x) 
{
    var tolerance = 1.e-16;
	var h1=1; var h2=0;
	var k1=0; var k2=1;
	var b = x;
	do 
	{
		a = Math.floor(b);
		var aux = h1; h1 = a*h1+h2; h2 = aux;
		aux = k1; k1 = a*k1+k2; k2 = aux;
		b = 1/(b-a);
	} while (Math.abs(x-h1/k1) > x*tolerance);
	return [h1, k1]
}	

function SpanRatio(funcString)
{
	
	document.getElementById('doublesequence').innerHTML=
	document.getElementById('doublesequence').innerHTML +
	funcString + ', ';
}

function ratioRodin(y,z,ratioN,ratioD,ratioN2,ratioD2,ratioN3,ratioD3)
{
	var RN = y; var RD = z;
	var RN1 = ratioN; var RD1 = ratioD;
	var RN2 = ratioN2; var RD2 = ratioD2;
	var RN3 = ratioN3; var RD3 = ratioD3;
	R1 = ratioAddFunction(RN1,RD1);
	R2 = ratioAddFunction2(RN2,RD2);
	R3 = ratioAddFunction3(RN3,RD3);
	var AdditionString = R1+' -> '+R2+' -> '+R3;
	AdditionString = AdditionString.replace(/,/g,'');
	if(RN>10 || RD>10)
	{	
	return AdditionString
	}
	else
	{
	return RN+'/'+RD
	}
}
function ratioRodinAdd(N1,D1,N2,D2,N3,D3)
{   
	var RN1 = N1; var RD1 = D1;
	var RN2 = N2; var RD2 = D2;
	var RN3 = N3; var RD3 = D3;
		if(RN1<10 && RD1<10){
		return RN1 + '/' + RD1;
		}
		if(RN2<10 && RD2<10){
		return RN2 + '/' + RD2;
		}
		if(RN3<10 && RD3<10){
		return RN3 + '/' + RD3;
		}
	
}
function ratioRodin(y,z,ratioN,ratioD,ratioN2,ratioD2,ratioN3,ratioD3)
{
	var RN = y; var RD = z;
	parseInt(y);
	parseInt(z);
	var RN1 = ratioN; var RD1 = ratioD;
	var RN2 = ratioN2; var RD2 = ratioD2;
	var RN3 = ratioN3; var RD3 = ratioD3;
	R1 = ratioAddFunction(RN1,RD1);
	R2 = ratioAddFunction2(RN2,RD2);
	R3 = ratioAddFunction3(RN3,RD3);
	var AdditionString = R1+' -> '+R2+' -> '+R3;
	AdditionString = AdditionString.replace(/,/g,'');
	if(RN>10 || RD>10)
	{	
	return AdditionString
	}
	else
	{
	return RN+'/'+RD
	}
}
function ratioCharStringN(y)
{
	//var RN = float2rat(x);
	var N = y;
	var myStringN = N.toString();
	var index1N = 0;
	var AdditionN = [];
	var AdditionExpN;
		if(myStringN<10){
		return myStringN;
		}
		else{
			while(index1N< myStringN.length){
				AdditionN += myStringN.charAt(index1N) + '+' 
				index1N++;
				}
			}
		return AdditionExpN = AdditionN.substring(0,AdditionN.length-1);
}

function ratioCharStringD(z)
{
	//var RD = float2rat(x);
	var D = z;
	var myStringD = D.toString();
	var index1D = 0;	
	var AdditionD = [];
	var AdditionExpD;
		if(myStringD<10){
		return myStringD;
		}
		else{
			while(index1D< myStringD.length){
				AdditionD += myStringD.charAt(index1D) + '+' 
				index1D++;
				}
			}
		return AdditionExpD = AdditionD.substring(0,AdditionD.length-1)
}

function ratioAddFunction(ratioN,ratioD)	
{
	var index = 0;
	var index1 = 0;
	var funcAdd1 = 0;
	var funcAdd2 = 0;
	var charStringN = ratioN;
	var charStringD = ratioD;
		while(index<charStringN.length)
		{
			funcAdd1 = eval(charStringN);					
			index++;
		}
		while(index1<charStringD.length)
		{
			funcAdd2 = eval(charStringD);
			index1++;
		}
	return [charStringN,'/',charStringD,' = ',funcAdd1,'/',funcAdd2];
}

function ratioCharStringN2(N1)
{
	var myStringN2 = N1;
	var index1N2 = 0	
	var AdditionN2 = []
	var AdditionExpN2
	if(myStringN2<10)
	{
	return myStringN2;
	}
	else
	{
		while(index1N2< myStringN2.length)
		{
			AdditionN2 += myStringN2.charAt(index1N2) + '+' 
			index1N2++;
		}
	}
	return AdditionExpN2 = AdditionN2.substring(0,AdditionN2.length-1);
}

function ratioCharStringD2(D1)
{
	var myStringD2 = D1;
	var index1D2 = 0	
	var AdditionD2 = []
	var AdditionExpD2
	if(myStringD2<10){
	return myStringD2
	}
	else
	{
		while(index1D2< myStringD2.length)
		{
			AdditionD2 += myStringD2.charAt(index1D2) + '+' 
			index1D2++;
		}
	}
	return AdditionExpD2 = AdditionD2.substring(0,AdditionD2.length-1)
}

function ratioAddFunction2(ratioN2,ratioD2)	
{
	var indexB = 0;
	var index1B = 0;
	var funcAdd1B = 0;
	var funcAdd2B = 0;
	var charStringN2 = ratioN2;
	var charStringD2 = ratioD2;
	while(indexB<charStringN2.length)
	{
		funcAdd1B = eval(charStringN2);					
		indexB++;
	}
	while(index1B<charStringD2.length)
	{
		funcAdd2B = eval(charStringD2);
		index1B++;
	}
	return [charStringN2,'/',charStringD2,' = ',funcAdd1B,'/',funcAdd2B];
}

function ratioCharStringN3(N2)
{
	
	var myStringN3 = N2;
	var index1N3 = 0	
	var AdditionN3 = []
	var AdditionExpN3
		if(myStringN3<10){
		return myStringN3;
		}
		else{
			while(index1N3< myStringN3.length){
				AdditionN3 += myStringN3.charAt(index1N3) + '+' 
				index1N3++;
				}
			}
		return AdditionExpN3 = AdditionN3.substring(0,AdditionN3.length-1);
}

function ratioCharStringD3(D2)
{
	
	var myStringD3 = D2;
	var index1D3 = 0	
	var AdditionD3 = []
	var AdditionExpD3
		if(myStringD3<10){
		return myStringD3
		}
		else{
			while(index1D3< myStringD3.length){
				AdditionD3 += myStringD3.charAt(index1D3) + '+' 
				index1D3++;
				}
			}
		return AdditionExpD3 = AdditionD3.substring(0,AdditionD3.length-1)
}

function ratioAddFunction3(ratioN3,ratioD3)	
{
	var indexC = 0;
	var index1C = 0;
	var funcAdd1C = 0;
	var funcAdd2C = 0;
	var charStringN3 = ratioN3;
	var charStringD3 = ratioD3;
	while(indexC<charStringN3.length)
	{
		funcAdd1C = eval(charStringN3);					
		indexC++;
	}
	while(index1C<charStringD3.length)
	{
		funcAdd2C = eval(charStringD3);
		index1C++;
	}	
	return [charStringN3,'/',charStringD3,' = ',funcAdd1C,'/',funcAdd2C];
}


/*function ratioSpanRodin()
{
	document.getElementById('rodinsequence').innerHTML=
	document.getElementById('rodinsequence').innerHTML +
	ratioRodinAdd(ratioN,ratioD,ratioN2,ratioD2,ratioN3,ratioD3) + ', ';
}*/