class TempHistoryManager{

    constructor(historyContainerElemId) {
        this._historyContainerElemId = historyContainerElemId;
    }

    update(tempValue){
        this.addValue(tempValue);
    }

    addValue(value){
        let historyContainerElem = document.querySelector("#" + this._historyContainerElemId);
        let valueElem = document.createElement("p");
        valueElem.innerText = value;
        historyContainerElem.appendChild(valueElem);
    }
}

export {TempHistoryManager}