# Alura Geek

Se trata de un e commerce fullstack responsivo para 3 resoluciones, cuenta con una página de home donde muestra un banner y productos seleccionados por categoría. También cuenta con una barra de búsqueda y login para la administración de productos.

 ![Home Page](https://i.imgur.com/5w8DSYO.png)
 
 ![Alura Geek](http://imgfz.com/i/bEuACtd.gif)

## Tecnologías utilizadas

Angular, Spring Boot, Firebase, HTML5 Y CSS3

### Prerrequisitos

Para desplegar el frontend en local es necesario tener Angular. Puede seguir la documentación oficial en [angular.io](https://angular.io/guide/setup-local)

Para desplegar el backend en local es necesario maven.

Puede que necesites de 3 archivos que no se encuentran en el repositorio debido a que superan los 100mb, corregir con el backup.zip

### Despliege

- Configurar apiKey y authDomain en app.component.ts (Frontend, Firebase)
- Configurar urlAPI en product.service.ts (Frontend, Api Rest)
- Configurar spring.datasource.url, spring.datasource.username y - spring.datasource.password en applicacion.properties (Backend, Spring Boot)
- Desplegar la api con maven
- Desplegar el frontend con ng serve

## Características
 - Alta, baja y modificación para control de productos.
 - Vista detallada para cada producto.
 - Búsqueda por varios parámetros de productos disponibles.
 - Administración de productos solo por autenticación.
 - Validaciones para cada formulario.
 - Soporta 3 resoluciones (Mobile, Tablet, Desktop).

## Licencia

MIT
