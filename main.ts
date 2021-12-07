control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
	
})
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
let Fente = 0
let Distance = 0
