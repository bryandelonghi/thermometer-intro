let micro_temperature = 0
input.onButtonPressed(Button.B, function () {
    micro_temperature = input.temperature()
    basic.showNumber(micro_temperature)
})
