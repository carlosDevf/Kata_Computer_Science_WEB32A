# Ejercicios

Basándonos en el concepto de abstracción y el ejercicio que proporcionaste sobre la clase **`Personaje`**, vamos a crear ejercicios que amplíen este concepto y apliquen lo aprendido. Los ejercicios siguientes están diseñados para reforzar la comprensión de la abstracción, el uso de propiedades y métodos, y cómo estos pueden aplicarse en situaciones variadas.

### **Ejercicio 1: Ampliación de la Clase Personaje**

Amplía la clase **`Personaje`** para incluir métodos que permitan al personaje interactuar con su entorno. Por ejemplo, puedes añadir un método **`correr()`** que disminuya la energía según la distancia recorrida y un método **`descansar()`** que incremente la energía.

```jsx

class Personaje {
  // Atributos existentes...

  correr(distancia) {
    // Reduce la energía en función de la distancia.
    // Por ejemplo, cada unidad de distancia consume 1 punto de energía.
  }

  descansar(tiempo) {
    // Incrementa la energía en función del tiempo de descanso.
    // Por ejemplo, cada unidad de tiempo incrementa 2 puntos de energía.
  }
}

```

### **Ejercicio 2: Crear una Clase Enemigo**

Crea una clase **`Enemigo`** que también tenga **`nombre`** y **`energía`**. Añade métodos para que el enemigo pueda atacar a un personaje, disminuyendo su energía, y otro para que el enemigo reciba daño, disminuyendo su propia energía.

```jsx

class Enemigo {
  // Define atributos como nombre y energía.

  atacar(personaje) {
    // Reduce la energía del personaje.
  }

  recibirDaño(daño) {
    // Reduce la propia energía en función del daño recibido.
  }
}

```

### **Ejercicio 3: Interacción entre Personajes**

Implementa una función o método que permita a dos personajes (o a un personaje y un enemigo) interactuar, por ejemplo, **`pelear`**, donde se alternen ataques hasta que uno de los dos quede sin energía.

```jsx

function pelear(personaje1, personaje2) {
  // Implementa la lógica de la pelea, donde cada uno ataca por turnos.
  // La pelea termina cuando la energía de uno de los personajes es 0.
}

```

### **Ejercicio 4: Gestión de Inventario**

Añade a la clase **`Personaje`** un inventario representado por un arreglo de objetos. Cada objeto puede ser una herramienta, arma, o cualquier ítem que el personaje pueda utilizar. Implementa métodos para añadir o remover ítems del inventario.

```jsx

class Personaje {
  // Atributos y métodos existentes...

  inventario = [];

  addItem(item) {
    // Añade un ítem al inventario.
  }

  removerItem(item) {
    // Remueve un ítem del inventario.
  }
}

```

### **Ejercicio 5: Implementación de Habilidades**

Extiende la clase **`Personaje`** para incluir habilidades especiales. Cada habilidad puede tener un efecto específico, como aumentar temporalmente la energía, o un ataque especial que cause más daño. Implementa un método para usar una habilidad.

```jsx

class Personaje {
  // Atributos, métodos existentes, e inventario...

  habilidades = [];

  usarHabilidad(habilidad) {
    // Aplica el efecto de la habilidad.
  }
}

```

Estos ejercicios están diseñados para practicar la aplicación de la abstracción en POO, fomentando la creatividad en la definición de clases y la interacción entre ellas. Al resolverlos, se refuerzan conceptos como encapsulamiento, herencia (en el caso de extender clases), y polimorfismo (si se introducen diferentes tipos de personajes o enemigos con comportamientos específicos).