import TextBox from './macro.test'


class Processor {
    constructor() {}

    Attach(Observer) {
        this.observers.push(Observer);
        console.log('Observer attached')
    }

    Dettach(Observer) {
        for (var i in this.observers)
            if (this.observers[i] === Observer)
                this.observers.splice(i, 1)
    }

    Notify(text) {
        console.log('Subject Notify')
        for (var i in this.observers) {
            this.observers[i].Update(text);
        }
    }
}

export default class MacroProcessor extends Processor {
    constructor() {
        super()
        this.observers = []
        this.subjectState = null
        this.rules = {
            'celebration': 'birthday',
            'name': 'Wilma',
        }
        console.log('ConcreteSubject created')
    }

    replace(text) {
        for (const search in this.rules) {
            text = text.replace(new RegExp(search, 'g'), this.rules[search])
        }
        this.Notify(text)
    }
}