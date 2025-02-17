//Ejercicio 1:

interface Animal {
    nombre: string;
    edad: number;
  }
  interface Perro extends Animal {
    raza: string;
    adiestrado: boolean;
  }
  
  const miPerro: Perro = {
  nombre: "Gaia",
  edad: 1,
  raza: "Collie",
  adiestrado: true,
  };
  
  console.log(miPerro);
  
  //Ejercicio2
  
  type EstadoCivil = "soltero" | "casado" | "divorciado" | "viudo";
  
  type Persona = {
    nombre: string;
    apellido: string;
    edad: number;
    estadoCivil: EstadoCivil;
  };
  
  const persona1 : Persona = {
    nombre: "Carmelo",
    apellido: "Perez",
    edad: 70,
    estadoCivil: "viudo",
  };
  
  const persona2 : Persona = {
    nombre: "Candela",
    apellido: "Gómez",
    edad: 25,
    estadoCivil: "soltero",
  };
  
  const persona3 : Persona = {
    nombre: "Anacleto",
    apellido: "Ríos",
    edad: 46,
    estadoCivil: "casado",
  };
  
  const persona4 : Persona = {
    nombre: "Rodolfa",
    apellido: "Díaz",
    edad: 19,
    estadoCivil: "divorciado",
  };
  
  console.log(persona1);
  console.log(persona2);
  console.log(persona3);
  console.log(persona4);
  
  //Ejercicio3
  
  type Ubicacion = {
    longitud: number;
    latitud: number;
  };
  
  type Direccion = {
    calle: string;
    ciudad: string;
  };
  
  type UbicacionCompleta = Ubicacion & Direccion;
  
  const miUbicacion : UbicacionCompleta = {
  longitud: -251252,
  latitud: 842411,
  calle: "Benedictino",
  ciudad: "Bodeaux"
  };
  
  const miUbicacion2 : UbicacionCompleta = {
    longitud: 6521258,
    latitud: -425147,
    calle: "Via Condotti",
    ciudad: "Florencia",
  };
  
  console.log(miUbicacion);
  console.log(miUbicacion2);
  
  //Ejercicio4
  
type Id = number | string;

function getId<T extends Id>(id: T): string {
    if (typeof id === 'number') {
        return `El id es numérico: ${id}`;
    } else {
        return `El id es un string: ${id}`;
    }
}
console.log(getId(123));      // Output: "El id es numérico: 123"
console.log(getId("abc"));    // Output: "El id es un string: abc"

//ejercicio5

type OperacionBinaria = (a: number, b: number) => number;

const suma: OperacionBinaria = (a, b) => a + b;
const multiplicacion: OperacionBinaria = (a , b) => a * b;

function calcular(a: number, b: number, operacion: OperacionBinaria): number {
  return operacion(a , b);
}
console.log(calcular(12, 6, suma));
console.log(calcular(15, 25, multiplicacion));

//ejercicio6

interface Traducciones {
  [idioma: string]: string;
}

const traduccionesSaludo: Traducciones = {
    en: "Hello",
    fr: "Bonjour",
    de: "Hallo",
    it: "Ciao",
    pt: "Olá",
    jp: "こんにちは",
    ru: "Привет"
};

console.log(traduccionesSaludo.it);
console.log(traduccionesSaludo.fr);
console.log(traduccionesSaludo.jp);

//ejercicio7

interface Producto {
  nombre: string;
  precio: number;
  descuento?: number;
}

function calcularPrecioFinal(producto: Producto): number {
  if (producto.descuento) {
    const descuentoDecimal = producto.descuento /100;
    return producto.precio * (1- descuentoDecimal);
  }
  return producto.precio;
}

const producto1: Producto = {
  nombre: "Ventilador de pie",
  precio: 120.000,
  descuento: 20,
};

const producto2: Producto = {
  nombre: "Notebook Asus",
  precio: 15000.00,
};

const producto3: Producto = {
  nombre: "Televisor LG HD",
  precio: 3000.00,
  descuento: 50,
};

console.log(`Precio final ${producto1.nombre}: ${calcularPrecioFinal(producto1)}`);
console.log(`Precio final ${producto2.nombre}: ${calcularPrecioFinal(producto2)}`);
console.log(`Precio final ${producto3.nombre}: ${calcularPrecioFinal(producto3)}`);

//ejercicio8

enum RolUsuario {
  Admin = "Admin",
  Editor = "Editor",
  Lector = "Lector"
}

interface Usuario {
  nombre: string;
  edad: number;
  rol: RolUsuario;
}

function mostrarPermisos(usuario: Usuario): string {
  switch (usuario.rol) {
    case RolUsuario.Admin: return `${usuario.nombre} es Administrador y tiene permisos totales: gestión de usuarios, edición y lectura de contenido.`;
    case RolUsuario.Editor: return `${usuario.nombre} es Editor y puede: crear, editar y eliminar contenido.`;
    case RolUsuario.Lector: return `${usuario.nombre} es Lector y solo puede ver contenido.`;

    default: return `Rol no reconocido para ${usuario.nombre}`;
  }
}

const usuarios: Usuario[] = [
  {
    nombre: "Edu",
    edad: 70,
    rol: RolUsuario.Admin
  },
  {
    nombre: "Aixa",
    edad: 25,
    rol: RolUsuario.Editor
  },
  {
    nombre: "Luz",
    edad: 33,
    rol: RolUsuario.Lector
  }
];

usuarios.forEach(usuario => {
    console.log(mostrarPermisos(usuario));
});

//ejercicio 9
type Coordenadas = [number, number];

function mostrarUbicacion(coords: Coordenadas): string {
    return `Latitude: ${coords[0]}, Longitude: ${coords[1]}`;
}


const Madrid: Coordenadas = [40.4168, -3.7038];
const Paris: Coordenadas = [48.8566, 2.3522];
const Tokyo: Coordenadas = [35.6762, 139.6503];

console.log(mostrarUbicacion(Madrid));  
console.log(mostrarUbicacion(Paris));   
console.log(mostrarUbicacion(Tokyo));

class Coche {
  public marca: string;
  public modelo: string;
  private year: number;

  constructor(marca: string, modelo: string, year: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
  }

  public obtenerInfo(): string {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Year: ${this.year}`;
  }
}

const auto1 = new Coche('Toyota', 'Corolla', 2020);
const auto2 = new Coche('Honda', 'Civic', 2019);
const auto3 = new Coche('Ford', 'Mustang', 2021);

console.log(auto1.obtenerInfo());
console.log(auto2.obtenerInfo());
console.log(auto3.obtenerInfo());

//console.log(auto1.year); //error, response: Property 'year' is private and only accessible within class 'Coche'.