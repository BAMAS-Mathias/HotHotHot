class DataOutManager {

    update(tempValue){
        this.changeTemp(tempValue);
    }

    changeTemp(tempValue){
        let inValueTempElem = document.querySelector("#exterior-temp-value")
        inValueTempElem.innerText = tempValue + "°C";
    }
}

export {DataOutManager}