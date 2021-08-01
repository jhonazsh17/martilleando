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
// with format by default is DDMMYYYY
martilleando.getCurrentDay('25/04/1950');
// result 25/04/1950

martilleando.getCurrentDay('25/04/1950', 'DDMMYYYY');
// result 25/04/1950

martilleando.getCurrentDay('14/06/1943', 'YYYYMMDD');
// result 1943/06/14
```

### Obtener la fecha de hoy:

El siguiente uso es para poder obtener la fecha del día de hoy.

```js
// with format by default is DDMMYYYY
martilleando.getNow();
// result 25/07/2021

// with format DDMMYYYY | DMY | dmy
martilleando.getNow('DDMMYYYY');
// result 25/07/2021

// with format YYYYMMDD | YMD | ymd
martilleando.getNow('YYYYMMDD');
// result 2021/07/2021
```

### Obtener la fecha en un objeto:

El siguiente uso es para poder obtener la fecha dada en un objeto.

```js
// with order asc by default
martilleando.getDateInObject('17/09/1990'); 
// result: {day: '17', month: '09', year: '1990'}

martilleando.getDateInObject('17/09/1990', 'asc');
// result: {day: '17', month: '09', year: '1990'}

martilleando.getDateInObject('17/09/1990', 'dsc');
// result: {year: '1990', month: '09', day: '17'}
```

### Obtener el número de mes:

El siguiente uso es para poder obtener el mes de una determinada fecha.

```js
martilleando.month('17/09/1990');
// result: 09
```

### Obtener el nombre del mes:

El siguiente uso es para poder obtener el nombre del mes de una determinada fecha.

```js
martilleando.monthName('17/09/1990');
// result: Septiembre

martilleando.monthName('17/09/1990', 'long');
// result: Septiembre

martilleando.monthName('17/09/1990', 'short');
// result: Sep
```

## Licencia

MIT