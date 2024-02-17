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
                return O_json['capteurs'][0]['Valeur'];
            })
        })
    }
}

export {TempDataAccess}