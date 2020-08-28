const hext = { "":"", "0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":"A","11":"B","12":"C","13":"D","14":"E","15":"F"};

function decimalF(dnum){
    var decimal = dnum;
    var binary = "";
	var octal = "";
	var hex = "";
    while (decimal > 0) {
        if (decimal % 2 != 0) {
            binary += "1";
        } else {
            binary += "0";
        }
        decimal = Math.floor(decimal / 2);
    }
    binary = binary.toString();
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    binary = reverseString(binary);
    document.getElementById("binaryform").value=binary;
	document.getElementById("binaryerror").innerHTML=""
	decimal = dnum;
	var rem = 0;
	if (decimal <= 7 && decimal >= 0) {
		document.getElementById("octalform").value=decimal;
	} else {
		while (decimal > 0){
			rem = (decimal / 8) % 1
			octal = octal + (rem * 8)
			decimal = Math.floor(decimal / 8)
		}
		octal = reverseString(octal);
		document.getElementById("octalform").value=octal;
	}
	rem = 0;
	decimal = dnum;
	if (decimal <= 15 && decimal >= 0) {
		decimal = hext[decimal]
		document.getElementById("hexform").value=decimal;
	} else {
		while (decimal > 0){
			rem = (decimal / 16) % 1
			rem = rem * 16
			hex = hex + hext[rem]
			decimal = Math.floor(decimal / 16)
		}
		hex = reverseString(hex);
		document.getElementById("hexform").value=hex;
	}
	document.getElementById("decimalform").value=dnum;
	return
}


function binaryF(bnum){
    var binary = bnum;
    var decimal = 0;
    binary = binary.toString();
	if (binary != "") {
		for (var i = 0; i < binary.length; ++i) {
			if (binary[i] == 1) {
				decimal = decimal * 2 + 1;
			} else if (binary[i] == 0) {
				decimal = decimal * 2 + 0;
			} else {
				document.getElementById("binaryerror").innerHTML="Error"
				document.getElementById("decimalform").value=""
				document.getElementById("hexform").value=""
				document.getElementById("octalform").value=""
				return 
			}
		}
		document.getElementById("binaryerror").innerHTML=""
		decimalF(decimal)
		return 
	} else {
		document.getElementById("binaryerror").innerHTML=""
		document.getElementById("decimalform").value=""
		document.getElementById("octalform").value=""
		document.getElementById("hexform").value=""
		return 
	}
}


function octalF(onum) {
	if (onum != "") {
		var octa = onum.split("").reverse();
		var decimal = 0;
		var n = 0;
		for (var i = 0; i < octa.length; ++i){
			decimal = decimal + octa[i] * (8 ** n)
			n += 1
		}
		decimalF(decimal)
	} else {
		document.getElementById("decimalform").value=""
		document.getElementById("binaryform").value=""
		document.getElementById("hexform").value=""
		return
	}
}


const hexd = { "":"", "0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "A":"10","B":"11","C":"12","D":"13","E":"14","F":"15"}


function hexF(hnum) {
	if (hnum != "") {
		var hexa = hnum.split("").reverse();
		var decimal = 0;
		var n = 0;
		for (var i = 0; i < hexa.length; ++i){
			decimal = decimal + hexd[hexa[i]] * (16 ** n)
			n += 1
		}
		decimalF(decimal)
	} else {
		document.getElementById("decimalform").value=""
		document.getElementById("binaryform").value=""
		document.getElementById("octalform").value=""
		return
	}
}
