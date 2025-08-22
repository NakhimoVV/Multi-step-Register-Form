class App {
  selectors= {
    root: '[data-js-app]',
    stepTitle: '[data-js-app-step-title]',
    appForm: '[data-js-app-form]',
    fieldNameInput: '[data-js-app-field-name-input]',
    fieldEmailInput: '[data-js-app-field-email-input]',
    numberStep: '[data-js-app-number-step]',
  }

  localStorageKey = 'app-form'

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.stepTitleElement = this.rootElement.querySelector(this.selectors.stepTitle);
    this.appFormElement = this.rootElement.querySelector(this.selectors.appForm);
    this.fieldNameInputElement = this.appFormElement.querySelector(this.selectors.fieldNameInput);
    this.fieldEmailInputElement = this.appFormElement.querySelector(this.selectors.fieldEmailInput);
    this.numberStepElement = this.rootElement.querySelector(this.selectors.numberStep);

    this.state = {
      data: {}
    }
  }
}

export default new App()