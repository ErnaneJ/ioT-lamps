function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	

	sns = app.CreateSensor( "Light" );
    sns.SetOnChange( senseChange);
    sns.Start();
    
    txt = app.CreateText("",0.8,0.3);
    txt.SetTextSize(22);
    lay.AddChild(txt);
    
    setInterval(sendToServer, 1000)
    
	
	app.AddLayout( lay );
}

luxG = 0;
function senseChange(lux){
    luxG = lux;
}

function sendToServer(){
  const http = new XMLHttpRequest();
  //Link de API disponibilizado abertamente pois o projeto e de cunho educacional mas essa e uma ma pratica.
  http.open("GET", `https://api.thingspeak.com/update?api_key=JFDD1RCILI7VRWZF&field1=${luxG}`);
  http.send();
  http.onload = ()=>{
        setLuxText(http.responseText, luxG);
    }
}

function setLuxText(resp, lux){
    txt.SetText(resp+"level="+lux+"lux");
}