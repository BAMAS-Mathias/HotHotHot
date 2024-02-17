class DataInManager {

    update(tempValue){
        this.changeTemp(tempValue);
    }

    changeTemp(tempValue){
        let inValueTempElem = document.querySelector("#interior-temp-value")
        inValueTempElem.innerText = tempValue + "°C";
    }
}

export {DataInManager}