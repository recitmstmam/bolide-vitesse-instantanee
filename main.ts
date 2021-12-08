control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    Fente += 1
    Distance.push(Fente / 4 * 9.57)
    Temps.push(input.runningTimeMicros() / 1000000)
    serial.writeString("" + Temps[list.length] + "," + Distance[list.length] + "," + (Distance[Distance.length] - Distance[Distance.length - 1]) / (Temps[Temps.length] - Temps[Temps.length - 1]))
})
let Temps: number[] = []
let Distance: number[] = []
let list: number[][] = []
let Fente = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
Fente = 0
list = [Distance, Temps]
