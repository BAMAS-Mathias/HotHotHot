import {OngletManager} from "./OngletsManager.mjs";
import {DataOutManager} from "./DataOutManager.mjs";
import {DataInManager} from "./DataInManager.mjs";
import {TempDataObservable} from "./TempDataObservable.mjs";
import {TempDataAccess} from "./TempDataAccess.mjs";
import {TempHistoryManager} from "./TempHistoryManager.mjs";

let tabList = document.querySelectorAll(".tab")
let ongletManager = new OngletManager();
let dataOutManager = new DataOutManager();
let dataInManager = new DataInManager();
let tempDataObservableIn = new TempDataObservable();
let tempDataObservableOut = new TempDataObservable();
let tempDataAccess = new TempDataAccess();
let tempInHistory = new TempHistoryManager("interior-canva")
let tempOutHistory = new TempHistoryManager("exterior-canva")
let inUrl = "https://hothothot.dog/api/capteurs/interieur";
let outUrl = "https://hothothot.dog/api/capteurs/exterieur";

tempDataObservableIn.subscribe(dataInManager);
tempDataObservableOut.subscribe(dataOutManager);
tempDataObservableIn.subscribe(tempInHistory);
tempDataObservableOut.subscribe(tempOutHistory);
updateTempData();

setInterval(() => {
    updateTempData()
}, 10000)

function updateTempData(){
    tempDataAccess.fetchTempData(inUrl).then(temp =>  tempDataObservableIn.notify(temp))
    tempDataAccess.fetchTempData(outUrl).then(temp =>  tempDataObservableOut.notify(temp))
}

for(let i = 0; i < tabList.length; ++i){
    if(tabList[i].id === "main-menu"){
        ongletManager.addPanel(tabList[i], true)
    }else{
        ongletManager.addPanel(tabList[i], false)
    }

}