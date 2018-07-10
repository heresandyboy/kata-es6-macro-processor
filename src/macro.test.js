import MacroProcessor from './MacroProcessor'


let _macro = undefined
let _textBox = undefined

describe('A macro processor', () => {

    beforeEach(() => {
        _textBox = new TextBox()
        _macro = new MacroProcessor()
    })

    test('will replace "celebration" with "birthday"', () => {

        _macro.Attach(_textBox)
        _macro.replace('celebration')

        expect(_textBox.text).toEqual('birthday')
    })

    test('will replace "Happy celebration, name" with "Happy birthday Wilma"', () => {

        _macro.Attach(_textBox)
        _macro.replace('Happy celebration, name')

        expect(_textBox.text).toEqual('Happy birthday, Wilma')
    })

    test('updates the observers with the results of the subjects replace function', () => {
        const observer = new TextBox()
        const observer2 = new TextArea()
        const subject = new MacroProcessor()

        subject.Attach(observer)
        subject.Attach(observer2)
        subject.replace('Happy celebration, name')

        expect(observer.text).toEqual('Happy birthday, Wilma')
        expect(observer2.text).toEqual('Happy birthday, Wilma')
    })
})

class Text {
    constructor() {}

    Update() {}
}

class TextBox extends Text {
    constructor(text) {
        super()
        this.text = text
    }

    Update(text) {
        this.text = text
    }
}

export class TextArea extends Text {
    constructor(text) {
        super()
        this.text = text
    }

    Update(text) {
        this.text = text
    }
}