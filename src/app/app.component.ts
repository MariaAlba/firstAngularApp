import { Component } from '@angular/core';



// componente principal  que se carga al arrancar la app


/*
  @Component es la forma de declarar un componente (se llama decorador)
    selector :    nombre de la etiqueta para inyectar el componente en html
    templateUrl:  vista de HTML
    styleUrls:    estilos de la vista formato scss 
  */
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// title es una variable
export class AppComponent {

 

  title = 'my-app';
  productos =  [
    {
    "id": 34,
    "nombre": "cafe",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
    "gluten": false,
    "precio": 1.46,
    "categoria": {
      "id": 1,
      "nombre": "bebida"
    },
    "historico": [{
        "fecha": "17/01/2020",
        "precio": 1.20
      },
      {
        "fecha": "11/01/2020",
        "precio": 1.50
      },
      {
        "fecha": "12/01/2020",
        "precio": 1.46
      }
    ]
  },
  {
    "id": 3,
    "nombre": "leche",
    "imagen": "https://supermercado.eroski.es/images/18672311.jpg",
    "gluten": false,
    "precio": 2.46,
    "categoria": {
      "id": 1,
      "nombre": "bebida"
    },
    "historico": [{
        "fecha": "17/01/2020",
        "precio": 2.20
      },
      {
        "fecha": "11/01/2020",
        "precio": 2.50
      },
      {
        "fecha": "12/01/2020",
        "precio": 2.46
      }
    ]
  },
  {
    "id": 4,
    "nombre": "galletas",
    "imagen": "https://supermercado.eroski.es/images/16863292.jpg",
    "gluten": true,
    "precio": 4.66,
    "categoria": {
      "id": 2,
      "nombre": "dulces"
    },
    "historico": [{
        "fecha": "17/01/2020",
        "precio": 5
      },
      {
        "fecha": "11/01/2020",
        "precio": 4.6
      },
      {
        "fecha": "12/01/2020",
        "precio": 4.66
      }
    ]
  }
];

pSeleccionado = this.productos[0];

seleccionarProducto = function(producto){
  console.log("hemos hecho click");
  console.debug('%o' ,producto);
  this.pSeleccionado = producto;
}

};
