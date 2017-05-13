## Notas

### Front
* Órden de fechas: Los eventos se listan ordenados de forma ascendente por la fecha más antigua de cada evento.
* El archivo store.js hace las veces de repositorio (vía de acceso a los datos).
* Usé un custom-script forkeado de create-react-app para no perder tiempo en tooling, lo único que pide para funcar, antes del `npm start` o `npm build` es un .env, que lo agregué en el versionado, aunque no debería comitearse claro con un par de env vars.

#### Deploy:
1. correr el backend en el puerto 3000 
2. `cd frontend`
3. `npm install`
4. Correr app, dos opciones:
    1. Vía liveserver desarrollo:
        * `npm start`
    2. Build:
        * `npm run build`
        * Levantar la carpeta build con algún server (toma el index.html como base).

### Backend
* Agregué CORS para express.
