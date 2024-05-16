var apiResponse = null;
async function run(){
     var input = document.getElementById("serchbar").value;
     var firs = input.split(' ')[0];
     var seco = input.split(' ')[1];


     console.log(firs);
     console.log(seco);
     cof = await (getData(firs, seco));
     apiResponse = JSON.stringify(cof);
     var api_response_obj = JSON.parse(apiResponse);
     console.log(api_response_obj.current.temp_c);
     var temp_c = ("The tempurature in " + firs.replace("," , "") + " is " + Math.round(api_response_obj.current.temp_c) + " Degrees Celcius");
     var temp_f = ("The tempurature in " + firs.replace("," , "") + " is " + Math.round(api_response_obj.current.temp_f) + " Degrees Fareignhight");
     var condition = ("It is " + api_response_obj.current.condition.text + " right now");
     var tomorow = ("Tomorow it will be" )
     document.getElementById("temp_c").innerHTML = temp_c;
     document.getElementById("temp_f").innerHTML = temp_f;
     document.getElementById("temp_condition").innerHTML = condition;
     
}

async function  getData( firs,  seco)

{
    var URL = `https://api.weatherapi.com/v1/current.json?q=${firs}%2C%20${seco}&key=91c2039590b440a28b8203430240503`;
    
    
    
    const response = await fetch(URL);
    const data = await response.json();
    return data;
    
    

}