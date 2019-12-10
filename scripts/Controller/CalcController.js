class CalcController {
  constructor() {
    this._displayCalc = "0";
    this._operation = [];

    this.initialize();
    this.initButtons();
  }
  initialize() {
    let displayCalcEl = document.querySelector("#display");

    displayCalcEl.innerHTML = "2345";
  }

  // addEventListenerAll(element, events, fn) {
  //   events.split(" ").forEach(event => {
  //     element.addEventListener(event, fn, false);
  //   });
  // }
  clearAll() {}
  execBtn(value) {
    switch (value) {
      case "ca":
        // this.clearAll();
        // this.setLastNumberToDisplay();
        break;
      case "ce":
        // this.clearEntry();
        // this.setLastNumberToDisplay();
        break;
      case "c":
        // this.clearEntry();
        // this.setLastNumberToDisplay();
        break;
      case "soma":
        // this.addOperation("+");
        break;
      case "subtracao":
        // this.addOperation("-");
        break;
      case "multiplicacao":
        // this.addOperation("*");
        break;
      case "divisao":
        // this.addOperation("/");
        break;
      case "porcento":
        // this.addOperation("%");
        break;
      case "igual":
        // this.calc();
        break;
      case "ponto":
        // this.addDot();
        break;
      case "raiz":
        // this.addDot();
        break;
      case "elevado":
        // this.addDot();
        break;
      case "fracao":
        // this.addDot();
        break;
      case "fracao":
        // this.addDot();
        break;
      case "negativo":
        // this.addDot();
        break;

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        console.log("funciona");
        // this.addOperation(parseInt(value));
        break;

      default:
        // this.setError();
        break;
    }
  }

  initButtons() {
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, index) => {
      btn.addEventListener("click", e => {
        console.log(btn.id.replace("btn-", ""));

        this.execBtn(btn);
      });
    });
  }

  get displayCalc() {
    return this.displayCalcEl;
  }
  set displayCalc(value) {
    this.displayCalcEl = value;
  }
}
