# Api nodejs express busqueda de productos en la api de mercado libre

A continuación, tenemos una secuencia de solicitud que utilizará la API


# Instalar dependencias del proyecto

```
npm i

# Iniciar el servidor en modo desarrollo

```
npm run dev

```

# Compilar archivos del proyecto en la capeta dist

```
npm run build

```

# Iniciar servidor con archivos compilados en la carpeta dist

```
npm start

```

# Obtener lista de artículos

```
GET: /api/items?q=query
/*
 *
 * @param <string> query required
 */

200 OK
Response Arry de articulos y Array de categorias
```

# Obtener un artículo con id especifico

```
GET:/api/items/:id
/*
 * @param <string> id required
*/
200 OK
Response Objeto articulo especifico  y Array de categorias del articulo
```
