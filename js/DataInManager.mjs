class DataInManager {

    update(temp){
        this.changeTemp(temp);
    }

    changeTemp(temp){
        let inValueTempElem = document.querySelector("#interior-temp-value")
        inValueTempElem.innerText = temp.value + "°C";
    }
}

export {DataInManager}