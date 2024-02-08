class OngletManager{
    constructor() {
        this.tabPanelList = {};
        this.currentTab = null;
        this.currentPannel = null;
    }

    addPanel(button, isFirst){
        let panelId = button.getAttribute("aria-controls")
        let panel = document.querySelector("#" + panelId);
        this.tabPanelList[panelId] = document.querySelector("#" + panelId);
        panel.style.display = "none";

        button.onclick = () => {
            this.currentTab.setAttribute("aria-selected",false);
            this.currentTab = button;
            this.setSelectedTab(button.getAttribute("aria-controls"))
            button.setAttribute("aria-selected",true);
        }

        if(isFirst){
            this.currentPannel = document.querySelector("#" + panelId);
            this.firstElem = button;
            this.currentTab = button;
            this.setSelectedTab(button.getAttribute("aria-controls"))
        }
    }

    setSelectedTab(tab){
        let selectedPannel = this.tabPanelList[tab];
        if(selectedPannel !== undefined){
            if(this.currentPannel !== null) {
                this.currentPannel.style.display = "none";
            }
            this.currentPannel = selectedPannel;
            this.currentPannel.style.display = "flex";

        }
    }
}

export {OngletManager}