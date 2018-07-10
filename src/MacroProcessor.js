import TextBox from './macro.test'

export default class MacroProcessor {
    constructor(textBox) {
        this.textBox = textBox ? textBox : new TextBox()
        this.rules = {
            'celebration': 'birthday',
            'name': 'Wilma',
        }
    }

    run() {
        this.replaceMacros(this.textBox)
    }

    replaceMacros(textBox) {
        for (const search in this.rules) {
            this.textBox.text = this.textBox.text.replace(new RegExp(search, 'g'), this.rules[search])
        }
    }
}