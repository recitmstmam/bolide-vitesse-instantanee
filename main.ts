control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    let Distance: number[] = []
    let Temps: number[] = []
    Fente += 1
    Temps[0] = input.runningTimeMicros() / 1000000
    t1 = Temps.removeAt(0)
    Distance[1] = Fente / 4 * 9.57 / 100
    d1 = Distance.removeAt(1)
    Vitesse = (d2 - d1) / (t2 - t1)
    serial.writeString("" + (Vitesse))
    serial.writeLine("")
    d2 = d1
    t2 = t1
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showString("!")
    control.reset()
})
let t2 = 0
let d2 = 0
let Vitesse = 0
let d1 = 0
let t1 = 0
let Fente = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
Fente = 0
let list = [0, 1]
