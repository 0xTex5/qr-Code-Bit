// hey im adding thsi comment for funsies
// start of program
led.plot(4, 4)
let x = 0
let y = 0
basic.forever(function () {
    input.onButtonPressed(Button.A, function() {
        led.toggle(x+1,y)
    })
})
