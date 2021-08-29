const epics = require("./epics")
// @ponicode
describe("epics.pingEpic", () => {
    test("0", () => {
        let callFunction = () => {
            epics.pingEpic("REMOVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            epics.pingEpic(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            epics.pingEpic("discard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            epics.pingEpic(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            epics.pingEpic("assign")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            epics.pingEpic(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
