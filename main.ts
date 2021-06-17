function Promedio_total () {
    Promedio_Total = (Promedio_Puerta + (Promedio_Habitación + Promedio_Ventana)) / 3
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        Temperatura_puerta = pins.analogReadPin(AnalogPin.P0)
        basic.showString("H=")
        basic.showNumber(Temperatura_puerta)
        basic.pause(100)
        P1 = pins.map(
        Temperatura_puerta,
        0,
        1023,
        0,
        100
        )
        basic.showString("PT=")
        basic.showNumber(P1)
        basic.pause(100)
        basic.clearScreen()
        Temperatura_Ventana = pins.analogReadPin(AnalogPin.P1)
        basic.showString("H=")
        basic.showNumber(Temperatura_Ventana)
        basic.pause(100)
        P2 = pins.map(
        Temperatura_Ventana,
        0,
        1023,
        0,
        100
        )
        basic.showString("PT=")
        basic.showNumber(P2)
        basic.pause(100)
        basic.clearScreen()
        Temperatura_Habitación = pins.analogReadPin(AnalogPin.P2)
        basic.showString("H=")
        basic.showNumber(Temperatura_Habitación)
        basic.pause(100)
        P3 = pins.map(
        Temperatura_Habitación,
        0,
        1023,
        0,
        100
        )
        basic.showString("PT=")
        basic.showNumber(P3)
        basic.pause(100)
        basic.clearScreen()
    }
})
function Guardado_toma_temperatura_ventana () {
    if (Temperatura_Ventana == 10) {
        Promedio_Ventana = (Temperatura_Ventana + (Temperatura_Ventana + (Temperatura_Ventana + (Temperatura_Ventana + (Temperatura_Ventana + (Temperatura_Ventana + (Temperatura_Ventana + (Temperatura_Ventana + (Temperatura_Ventana + Temperatura_Ventana))))))))) / 10
    }
}
function Guardado_toma_temperatura_Puerta () {
    if (Promedio_Puerta == 10) {
        Promedio_Puerta = (Temperatura_puerta + (Temperatura_puerta + (Temperatura_puerta + (Temperatura_puerta + (Temperatura_puerta + (Temperatura_puerta + (Temperatura_puerta + (Temperatura_puerta + (Temperatura_puerta + Temperatura_puerta))))))))) / 10
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("Promedio Total")
    Promedio_total()
    basic.showNumber(Promedio_Total)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Prom Temp P")
    Guardado_toma_temperatura_Puerta()
    basic.showNumber(Promedio_Puerta)
    basic.pause(100)
    basic.showString("Prom Temp V")
    Guardado_toma_temperatura_ventana()
    basic.showNumber(Promedio_Ventana)
    basic.pause(100)
    basic.showString("Prom Temp H")
    Guardado_toma_temperatura_habitación()
    basic.showNumber(Promedio_Habitación)
    basic.pause(100)
})
function Guardado_toma_temperatura_habitación () {
    if (Temperatura_Habitación == 10) {
        Promedio_Habitación = (Temperatura_Habitación + (Temperatura_Habitación + (Temperatura_Habitación + (Temperatura_Habitación + (Temperatura_Habitación + (Temperatura_Habitación + (Temperatura_Habitación + (Temperatura_Habitación + (Temperatura_Habitación + Temperatura_Habitación))))))))) / 10
    }
}
let P3 = 0
let P2 = 0
let P1 = 0
let Promedio_Total = 0
let Temperatura_puerta = 0
let Temperatura_Ventana = 0
let Temperatura_Habitación = 0
let Promedio_Ventana = 0
let Promedio_Habitación = 0
let Promedio_Puerta = 0
Promedio_Puerta = 0
Promedio_Habitación = 0
Promedio_Ventana = 0
Temperatura_Habitación = 0
Temperatura_Ventana = 0
Temperatura_puerta = 0
