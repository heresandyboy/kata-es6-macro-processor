import MacroProcessor from './MacroProcessor'


describe('A macro processor', () => {
    test('will replace "celebration" with "birthday"', () => {
        let textBox = new TextBox('celebration')
        let macro = new MacroProcessor(textBox).run()

        expect(textBox.text).toEqual('birthday')
    })
})

export class TextBox {
    constructor(text) {
        this.text = text
    }
}