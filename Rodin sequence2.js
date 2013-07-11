//The reason that this code works the way it does is because the limit of the 
//calculations only goes to 2^53th power so this means when the addition
// of even those large numbers is calculated it is less than 2 digits. Also because
//of this limit, only three steps of adding calculations would ever be needed.  

//This function makes the 2^n sequence from counter = -1 in the HTML code.
function doubling(inputNum, counter)
{
	var doubling, inputNum;
	var inputNum = document.getElementById('inputNum').value;
	doubling = Math.pow(inputNum, counter);    
	return  doubling;
}

//This function puts the 2^n sequence in the span area.
function SpanDoubling(sequence1)
{
	document.getElementById('doublesequence').innerHTML=
	document.getElementById('doublesequence').innerHTML +
	doubling(inputNum, counter) + ', ';
}

//This function gets called to display in the second text box, the steps made to 
//calculate the rodin sequence.
function Rodin()
{
	
	var DoubleNum = doubling(inputNum, counter);
	var AdditionString = AddFunction() + ', ' + AddFunction2() + ', ' + AddFunction3()
		if(DoubleNum>10){	
		return AdditionString
		}
		else{
		return DoubleNum
		}
}

//This function displays the Rodin sequence numbers in the third textbox. 
function RodinAdd()
{
	var Num1 = AddFunction();
	var Num2 = Num1.substring(Num1.length-2,Num1.length);
	var Num3 = AddFunction2();
	var Num4 = Num3.substring(Num3.length-2,Num3.length);
	var Num5 = AddFunction3();
	var Num6 = Num5.substring(Num5.length-2,Num5.length);
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


//This function and the ones like it after, takes the 2^n number,  
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
		return CharString() + ' =  ' + DoubleAdd;
}

function CharString2()
{
	var index2 = 0;
	var Addition2 = [];
	var Add1 = AddFunction();
	var	Add2 = Add1.substring(Add1.length-2,Add1.length);
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
		return CharString2() + ' =  ' + DoubleAdd2
}

function CharString3()
{
	var index4 = 0;
	var Addition3 = [];
	var Add3 = AddFunction2();
	var	Add4 = Add3.substring(Add3.length-2,Add3.length);
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
		return CharString3() + ' =  ' + DoubleAdd3
}
function SpanRodin()
{
	document.getElementById('rodinsequence').innerHTML=
	document.getElementById('rodinsequence').innerHTML +
	RodinAdd() + ', ';
}

	

