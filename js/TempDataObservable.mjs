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

    notify(temp){
        this.observers.forEach(ob => ob.update(temp))
    }
}

export {TempDataObservable}