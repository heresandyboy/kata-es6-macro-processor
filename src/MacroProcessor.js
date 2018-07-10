import TextBox from './macro.test'

export default class MacroProcessor {
    constructor(textBox) {
        this.textBox = textBox ? textBox : new TextBox()
    }

    run() {
        this.textBox.text = 'birthday'
    }
}