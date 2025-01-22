function test(){
    alert("javascript is running");
}

function AUDtoUSD(C1){
    return C1*0.63;
}

function AUDtoBTC(C1){
    return C1*0.00000016
}

function AUDtoEUR(C1){
    return 0.60*C1;
}

function AUDtoETH(C1){
    return C1*0.00019;
}

function USDtoBTC(C1){
    return C1*0.0000094;
}

function USDtoEUR(C1){
    return C1* 0.96;
}

function USDtoAUD(C1){
    return C1*1.60;
}

function USDtoETH(C1){
    return C1*0.0003;
}

function BTCtoUSD(C1){
    return C1*105443;
}

function BTCtoAUD(C1){
    return C1*168345.94;
}

function BTCtoEUR(C1){
    return C1*101229.08;
}

function BTCtoETH(C1){
    return C1*31.83;
}

function EURtoUSD(C1){
    return C1*1.04;
}

function EURtoAUD(C1){
    return C1*1.66;
}

function EURtoBTC(C1){
    return C1*0.0000099;
}

function EURtoETH(C1){
    return C1*0.00031;
}

function ETHtoAUD(C1){
    return C1*5263.79;
}

function ETHtoBTC(C1){
    return C1*0.032;
}

function ETHtoUSD(C1){
    return C1*3309.74;
}

function ETHtoEUR(C1){
    return C1*3165.67;
}

function findRightFun(){
    var value = parseFloat(document.getElementById("currency1val").value);
    var C1 = document.getElementById("Currency1").value;
    var C2 = document.getElementById("Currency2").value;
    if(C1 == "AUD"){
        if(C2 == "BTC"){
            document.getElementById("currency2val").innerText = AUDtoBTC(value);
        }
        else if(C2 == "USD"){
            document.getElementById("currency2val").innerText = AUDtoUSD(value);
        }
        else if(C2 == "EUR"){
            document.getElementById("currency2val").innerText = AUDtoEUR(value);
        }
        else if(C2 == "ETH"){
            document.getElementById("currency2val").innerText = AUDtoETH(value);
        }
    }else if(C1 == "USD"){
        if(C2 == "AUD"){
            document.getElementById("currency2val").innerText = USDtoAUD(value);
        }
        else if(C2 == "BTC"){
            document.getElementById("currency2val").innerText = USDtoBTC(value);
        }
        else if(C2 == "EUR"){
            document.getElementById("currency2val").innerText = USDtoEUR(value);
        }
        else if(C2 == "ETH"){
            document.getElementById("currency2val").innerText = USDtoETH(value);
        }
    }else if(C1 == "BTC"){
        if(C2 == "USD"){
            document.getElementById("currency2val").innerText = BTCtoUSD(value);
        }
        else if(C2 == "AUD"){
            document.getElementById("currency2val").innerText = BTCtoAUD(value);
        }
        else if(C2 == "EUR"){
            document.getElementById("currency2val").innerText = BTCtoEUR(value);
        }
        else if(C2 == "ETH"){
            document.getElementById("currency2val").innerText = BTCtoETH(value);
        }
    }else if(C1 == "EUR"){
        if(C2 == "USD"){
            document.getElementById("currency2val").innerText = EURtoUSD(value);
        }
        else if(C2 == "AUD"){
            document.getElementById("currency2val").innerText = EURtoAUD(value);
        }
        else if(C2 == "BTC"){
            document.getElementById("currency2val").innerText = EURtoBTC(value);
        }
        else if(C2 == "ETH"){
            document.getElementById("currency2val").innerText = EURtoETH(value);
        }
    }else if(C1 == "ETH"){
        if(C2 == "USD"){
            document.getElementById("currency2val").innerText = ETHtoUSD(value);
        }
        else if(C2 == "AUD"){
            document.getElementById("currency2val").innerText = ETHtoAUD(value);
        }
        else if(C2 == "BTC"){
            document.getElementById("currency2val").innerText = ETHtoBTC(value);
        }
        else if(C2 == "EUR"){
            document.getElementById("currency2val").innerText = ETHtoEUR(value);
        }
    }
}