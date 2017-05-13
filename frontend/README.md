## Notas

### Front
* Órden de fechas: Los eventos se listan ordenados de forma ascendente por la fecha más antigua de cada evento.
* El archivo store.js hace las veces de repositorio (vía de acceso a los datos).
* En la carpeta frontend/build está el build de la app
* En frontend/src el fuente.

#### Deploy:
1. correr el backend en el puerto 3000 
2. `cd frontend`
3. `npm install`
4. Correr app, dos opciones:
    1. Vía liveserver desarrollo:
        * `cp .env.example .env`
        * `npm start`
    2. Levantar la carpeta build con algún server.

### Back
* Agregué CORS para express.
