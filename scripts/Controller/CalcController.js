class CalcController {
  constructor() {
    this._lastOperator = "";
    this._lastNumber = "";
    this._displayCalc = "";
    this._operation = [];
    this._displayCalcEl = document.querySelector("#display");

    this.initialize();
    this.initButtons();
  }
  initialize() {}

  addEventListenerAll(element, events, fn) {
    events.split(" ").forEach(event => {
      element.addEventListener(event, fn, false);
    });
  }
  clearAll() {
    this._operation = [];
    this.lastNumber = "";
    this.lastOperator = "";
    this.setLastNumberToDisplay();
  }
  clearEntry() {
    this._operation.pop();

    this.setLastNumberToDisplay();
  }
  clearLastEntry() {
    this._operation.pop();

    this.setLastNumberToDisplay();
  }
  setError() {
    this.displayCalc = "Error";
  }
  getLastOperation() {
    return this._operation[this._operation.length - 1];
  }
  setLastOperation(value) {
    this._operation[this._operation.length - 1] = value;
  }
  isOperator(value) {
    return ["+", "-", "*", "/", "%"].indexOf(value) > -1;
  }
  pushOperation(value) {
    this._operation.push(value);

    if (this._operation.length > 3) {
      this.calc();
    }
  }
  getResult() {
    return eval(this._operation.join(""));
  }

  calc() {
    let last = "";

    this._lastOperator = this.getLastItem();

    if (this._operation.length < 3) {
      let fistItem = this._operation[0];
      this._operation = [fistItem, this._lastOperator, this._lastNumber];
    }
    if (this._operation.length > 3) {
      last = this._operation.pop();

      this._lastNumber = this.getResult();
    } else if (this._operation.length == 3) {
      this._lastNumber = this.getLastItem(false);
    }

    console.log("_lastOperator", this._lastOperator);
    console.log("_lastNumber", this._lastNumber);
    let results = this.getResult();

    if (last == "%") {
      results /= 100;

      this._operation = [results];
    } else {
      this._operation = [results];
      if (last) this._operation.push(last);
    }
    this.setLastNumberToDisplay();
  }
  getLastItem(isOperator = true) {
    let lastItem;

    for (let i = this._operation.length - 1; i >= 0; i--) {
      if (this.isOperator(this._operation[i]) == isOperator) {
        lastItem = this._operation[i];
        break;
      }
    }

    if (!lastItem) {
      lastItem = isOperator ? this._lastOperator : this._lastNumber;
    }
    return lastItem;
  }

  setLastNumberToDisplay() {
    let lastNumber = this.getLastItem(false);

    if (!lastNumber) lastNumber = 0;
    this.displayCalc = lastNumber;
  }

  addDot() {
    let lastOperator = this.getLastOperation();
    if (
      typeof lastOperator === "string" &&
      lastOperator.split("").indexOf(".") > -1
    )
      return;

    if (this.isOperator(lastOperator) || !lastOperator) {
      this.pushOperation("0.");
    } else {
      this.setLastOperation(lastOperator.toString() + ".");
    }

    this.setLastNumberToDisplay();
  }

  addOperation(value) {
    if (isNaN(this.getLastOperation())) {
      if (this.isOperator(value)) {
        this.setLastOperation(value);
      } else if (isNaN(value)) {
        // Outra coisa
        console.log("outra coisa", value);
      } else {
        this.pushOperation(value);

        this.setLastNumberToDisplay();
      }
    } else {
      if (this.isOperator(value)) {
        this.pushOperation(value);
      } else {
        let newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(newValue);
      }
      this.setLastNumberToDisplay();
    }

    console.log(this._operation);
  }
  execBtn(value) {
    switch (value) {
      case "ca":
        this.clearAll();
        this.setLastNumberToDisplay();
        break;
      case "ce":
        this.clearEntry();
        this.setLastNumberToDisplay();
        break;
      case "c":
        this.clearLastEntry();
        this.setLastNumberToDisplay();
        break;
      case "soma":
        this.addOperation("+");
        break;
      case "subtracao":
        this.addOperation("-");
        break;
      case "multiplicacao":
        this.addOperation("*");
        break;
      case "divisao":
        this.addOperation("/");
        break;
      case "porcento":
        this.addOperation("%");
        break;
      case "igual":
        this.calc();
        break;
      case "ponto":
        this.addDot();
        break;
      case "raiz":
        // this.addOperation("%");
        break;
      case "elevado":
        // this.addOperation("%");
        break;
      case "fracao":
        // this.addOperation("%");
        break;
      case "fracao":
        // this.addOperation("%");
        break;
      case "negativo":
        // this.addOperation("%");
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
        this.addOperation(parseInt(value));
        break;

      default:
        this.setError();
        break;
    }
  }

  initButtons() {
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, "click drag", e => {
        let VBtn = btn.id.replace("btn-", "");

        this.execBtn(VBtn);
      });
      this.addEventListenerAll(btn, "mousever mouseup mousedown", e => {
        btn.style.cursor = "pointer";
      });
    });
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTM;
  }
  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }
}
