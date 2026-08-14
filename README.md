# Proyecto Angular

Proyecto generado para ver la funcionalidad de Angular CLI, versión 22.1.4

## Desarollo:

Para iniciar el servidor, ejecutar:

```bash
ng serve
```

Una vez el servidor esta ejecutándose, abrir el navegador y entrar al siguiente enlace:  `http://localhost:4200/`. Donde se mostrara toda la información de la aplicación.

## Cómo se creo:

Se genero con Angular CLI:

```bash
ng new mi_primer_proyecto_angular --style=scss
```

Una vez creado el proyecto se generaron sus diferentes componentes.

```bash
ng g c components/form --standalone=false
```

## Estructura

La estructura del proyecto es la siguiente:

```bash
primer_proyecto_angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── datos/
│   │   │   │   ├── datos.component.html
│   │   │   │   ├── datos.component.scss
│   │   │   │   ├── datos.component.spec.ts
│   │   │   │   └── datos.component.ts
│   │   │   ├── form/
│   │   │   └── profile/
│   │   │       ├── profile.component.html
│   │   │       ├── profile.component.scss
│   │   │       ├── profile.component.spec.ts
│   │   │       └── profile.component.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── index.html
│   ├── main.ts
```

Donde el proyecto cuenta con 3 diferentes componentes `datos/, form/, profile/`

## Ejecuión del proyecto:

para ejecutar el proyecto usamos el comando:

```bash
ng serve
```

## Componentes:

Los diferentes componentes con los que cuenta el proyecto son:

1\. Profile: perfil con mis datos como usuario
<hr>
2. Datos: Información de diferentes usuarios al azar.
<hr>
3. Form: Formulario de entrada de datos.
