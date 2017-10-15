# NgMaterialTemplate1
1) Install these:
```
@angular/material
@angular/cdk
@angular/animations
hammerjs
```

2) Add Meterial icons

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

3) Add Material prebuild theme with one of the followings:
Import in `styles.css` or add the link in the `index.html`

* deeppurple-amber.css
* indigo-pink.css
* pink-bluegrey.css
* purple-green.css

styles.css use - `@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';`
index.html use - `<link href="https://unpkg.com/@angular/material/prebuilt-themes/indigo-pink.css" rel="stylesheet">`

4) Import Material API into app.module.ts

```
import {MatChipsModule,MatButtonModule} from '@angular/material';
...
imports: [
  BrowserModule,
  MatChipsModule,
  BrowserAnimationsModule,
  MatButtonModule
]
```

___

## (OPTIONAL) Custom Theme follow these steps:

1) Modify angular-cli.json and change from css to scss
```
"styles": [
  "styles.scss"
]
...
"defaults": {
  "styleExt": "scss",
  "component": {}
}

```

2) Remove the default Meterial css theme from styles.css or index.html

3) Add the following lines in styles.scss

```
@import '~@angular/material/theming';
@import 'myfirst-theme.scss';
@include mat-core();

@include angular-material-theme($myfirst-theme);
```
where you will create a custom theme in `myfirst-theme.scss` and add in the global theme in Angular Material

4) Create a new file `myfirst-theme.scss` and change primary, accent, and warning colors. You can use the standard color palette name from [Material color guidelines](https://material.io/guidelines/style/color.html#color-color-palette)

5)
