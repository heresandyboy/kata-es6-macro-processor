import MacroProcessor from './MacroProcessor'


describe('A macro processor', () => {
    test('will replace "celebration" with "birthday"', () => {
        let textBox = new TextBox('celebration')
        let macro = new MacroProcessor(textBox).run()

        expect(textBox.text).toEqual('birthday')
    })

    test('will replace "Happy celebration, name" with "Happy birthday Wilma"', () => {
        let textBox = new TextBox('Happy celebration, name')
        let macro = new MacroProcessor(textBox).run()

        expect(textBox.text).toEqual('Happy birthday, Wilma')
    })
})

export class TextBox {
    constructor(text) {
        this.text = text
    }
}