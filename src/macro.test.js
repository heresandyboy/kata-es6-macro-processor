import MacroProcessor from './MacroProcessor'


describe('A macro processor', () => {
    test('will replace "celebration" with "birthday"', () => {
        let textBox = new TextBox()
        let macro = new MacroProcessor()

        macro.Attach(textBox)
        macro.replace('celebration')
        expect(textBox.text).toEqual('birthday')
    })

    test('will replace "Happy celebration, name" with "Happy birthday Wilma"', () => {
        let textBox = new TextBox()
        let macro = new MacroProcessor()

        macro.Attach(textBox)
        macro.replace('Happy celebration, name')

        expect(textBox.text).toEqual('Happy birthday, Wilma')
    })

    test('updates the observer with the results of the subjects replace function', () => {
        var observer = new TextBox()
        var subject = new MacroProcessor()

        subject.Attach(observer)
        subject.replace('Happy celebration, name')

        expect(observer.text).toEqual('Happy birthday, Wilma')
    })
})

class Text {
    constructor() {}

    Update() {}
}

export class TextBox extends Text {
    constructor(text) {
        super()
        this.text = text
    }

    Update(text) {
        this.text = text
    }
}