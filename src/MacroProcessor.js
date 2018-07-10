import TextBox from './macro.test'


class Processor {
    constructor() {}

    Attach(Observer) {
        this.observers.push(Observer);
    }

    Dettach(Observer) {
        for (var i in this.observers)
            if (this.observers[i] === Observer)
                this.observers.splice(i, 1)
    }

    Notify(text) {
        for (var i in this.observers) {
            this.observers[i].Update(text);
        }
    }
}

export default class MacroProcessor extends Processor {
    constructor() {
        super()
        this.observers = []
        this.rules = {
            'celebration': 'birthday',
            'name': 'Wilma',
        }
    }

    replace(text) {
        for (const search in this.rules) {
            text = text.replace(new RegExp(search, 'g'), this.rules[search])
        }
        this.Notify(text)
    }
}