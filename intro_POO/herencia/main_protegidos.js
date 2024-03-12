// metodos protegidos
// mas una convecion
class CoffeeMachine {
    // esta protegido y no se debe re-escribir o acceder
    _waterAmount = 0;
  
    //setter https://es.javascript.info/private-protected-properties-methods
    set waterAmount(value) {
    if (value < 0) {
        return 0
    }
      this._waterAmount = value;
    }
  
    //getter // traer el valor
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // se crea la máquina de café
  let coffeeMachine = new CoffeeMachine(100);
  console.log(coffeeMachine._waterAmount)
  // agregar agua
  coffeeMachine._waterAmount = -10; // _waterAmount se vuelve 0, no -10
  console.log(coffeeMachine._waterAmount, 'Si se reescribio')