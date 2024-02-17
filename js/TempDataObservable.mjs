class TempDataObservable{

    constructor() {
        this.observers = []
    }

    subscribe(ob){
        this.observers.push(ob)
    }

    unsubscribe(ob){
        this.observers.removeItem(ob)
    }

    notify(tempValue){
        this.observers.forEach(ob => ob.update(tempValue))
    }
}

export {TempDataObservable}