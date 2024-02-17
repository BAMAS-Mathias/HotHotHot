import {Temperature} from "./Temperature.mjs";

class TempDataAccess{

    fetchTempData(url){
        return fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({param1: 'valeur'})
            }).then(function(response){
            return response.json().then(function(O_json){
                let date = new Date();
                return new Temperature(O_json['capteurs'][0]['Valeur'], date.getHours() + ":" + date.getMinutes());
            })
        })
    }
}

export {TempDataAccess}