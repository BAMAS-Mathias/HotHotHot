import {OngletManager} from "./OngletsManager.mjs";

let tabList = document.querySelectorAll(".tab")
let ongletManager = new OngletManager();

for(let i = 0; i < tabList.length; ++i){
    if(tabList[i].id === "main-menu"){
        ongletManager.addPanel(tabList[i], true)
    }else{
        ongletManager.addPanel(tabList[i], false)
    }

}