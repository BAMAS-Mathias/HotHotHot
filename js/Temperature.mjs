class Temperature{

    constructor(value, date) {
        this._value = value;
        this._date = date;
    }


    get value() {
        return this._value;
    }

    get date() {
        return this._date;
    }
}

export {Temperature}