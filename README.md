# Martilleando

Es un paquete para el uso de fechas, dar formato, entre otras opciones mas.

## Instalación:

```bash
> npm install martilleando
```

## Uso:

Una vez instalado, es necesario requerir el módulo de la siguiente manera:

```js
var martilleando = require('martilleando');

var date = martilleando.getCurrentDay('24/07/2021');
```

### Dar formato:

Tenemos los siguientes usos con formato:

```js
var date = martilleando.getCurrentDay('25/04/1950', 'DDMMYYYY');
// result {day: '25', month: '04', year: '1950'}

var date = martilleando.getCurrentDay('14/06/1943', 'YYYYMMDD');
// result {year: '1943', month: '06', day: '14'}
```

### Obtener la fecha de hoy:

El siguiente uso es para poder obtener la fecha del día de hoy.

```js
// with format by default is DDMMYYYY
var date = martilleando.getNow();
// result {day: '25', month: '07', year: '2021'}

// with format DDMMYYYY
var date = martilleando.getNow('DDMMYYYY');
// result {day: '25', month: '07', year: '2021'}

// with format YYYYMMDD
var date = martilleando.getNow('YYYYMMDD');
// result {year: '2021', month: '07', day: '25'}
```

## Licencia

MIT