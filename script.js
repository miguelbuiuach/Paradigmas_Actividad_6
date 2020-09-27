function ChangeImage(){
    bulb = document.getElementById('bulb');
    if(bulb.src.match('focoOn.png')){
        bulb.src="focoOff.png";
    }
    else{
        bulb.src="focoOn.png";
    }
}