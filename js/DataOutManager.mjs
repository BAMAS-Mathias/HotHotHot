class DataOutManager {

    update(temp){
        this.changeTemp(temp);
    }

    changeTemp(temp){
        let inValueTempElem = document.querySelector("#exterior-temp-value")
        inValueTempElem.innerText = temp.value + "°C";
    }
}

export {DataOutManager}