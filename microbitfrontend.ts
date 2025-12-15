// start of program
led.plot(4, 4) // initial point plotted so we know its A QRcode program
let x = -1 // start before the first LED
let y = 0 // start at the first row
let plotted = 0 // flag to track if the last point was plotted
basic.forever(function () { // main loop
    input.onButtonPressed(Button.A, function () { // Button A to move to next point
        if (plotted < 1) { // only toggle if last point was not plotted
            led.toggle(x, y) // toggle current point
        } else { 
            plotted = 0 // reset flag if last point was plotted
        }
        x += 1 // move to next column
        if (x > 4) { // if at end of row
            x = -1 // reset to before first column
            y += 1 // move to next row
        }
        if (y > 4) { // if at end of grid
            x = -1 // reset to before first column
            y = 0 // reset to first row
        }
        led.toggle(x,y) // toggle new current point
    })
    input.onButtonPressed(Button.B, function (){ // Button B to plot current point
        led.plot(x,y) // plot current point
        plotted = 1 // set flag to indicate last point was plotted
    })
    input.onPinPressed(TouchPin.P2, function() { // Pin P2 to reset the grid 
        basic.showLeds(` 
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `) // show empty grid with initial point
    })
})
