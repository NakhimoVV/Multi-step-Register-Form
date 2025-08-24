import steps from "@/modules/steps.js";
import Step from "@/components/Step/index.js";
import Status from "@/components/Status/index.js";

class App {
  selectors= {
    root: '[data-js-app]',
    appForm: '[data-js-app-form]',
    formFieldset: '[data-js-app-form-fieldset]',
    stepTitle: '[data-js-app-step-title]',
    fieldNameInput: '[data-js-app-field-name-input]',
    fieldEmailInput: '[data-js-app-field-email-input]',
    continueButton: '[data-js-app-continue-button]',
    confirmButton: '[data-js-app-confirm-button]',
    numberStep: '[data-js-app-number-step]',
  }

  localStorageKey = 'app-form'

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.stepTitleElement = this.rootElement.querySelector(this.selectors.stepTitle);
    this.appFormElement = this.rootElement.querySelector(this.selectors.appForm);
    this.formFieldsetElement = this.appFormElement.querySelector(this.selectors.formFieldset);
    this.continueButtonElement = this.rootElement.querySelector(this.selectors.continueButton);
    this.confirmButtonElement = this.rootElement.querySelector(this.selectors.confirmButton);
    this.numberStepElement = this.rootElement.querySelector(this.selectors.numberStep);

    this.state = {
    //   name: "Emily",
    //   email: "email",
    //   topics: ["ds", 'dsd', 'sds']
      data: this.getDataFromLocalStorage(),
      currentStep: 0,
    }

    this.render()
    this.bindEvents()
  }

  getDataFromLocalStorage() {
    const data = localStorage.getItem(this.localStorageKey)

    if (!data) {
      return {}
    }
    
    try {
      const parsedData = JSON.parse(data)
      return typeof parsedData === 'object' ? parsedData : {}
    } catch {
      console.error("Data form parse error!")
      return {}
    }
  }
  saveDataToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.state.data))
  }
  deleteDataFromLocalStorage() {
    localStorage.removeItem(this.localStorageKey)
  }

  render() {
    const step = steps[this.state.currentStep]
    this.stepTitleElement.textContent = step.title
    this.formFieldsetElement.insertAdjacentHTML('beforeend', step.render(this.state.data))
    this.numberStepElement.textContent = this.state.currentStep + 1

    if (this.state.currentStep === 0) {
      this.fieldNameInputElement = this.appFormElement.querySelector(this.selectors.fieldNameInput);
      this.fieldEmailInputElement = this.appFormElement.querySelector(this.selectors.fieldEmailInput);
    }
  }

  nextStep(stepData) {
    const isFirstStepData = stepData.hasOwnProperty("name") && stepData.hasOwnProperty("email");

    if (isFirstStepData) {
      this.state.data = {...stepData}
      this.saveDataToLocalStorage()
      this.state.currentStep++
      this.render()
    }

    if (Array.isArray(stepData) && stepData.length > 0) {
      this.state.data['topics'] = stepData;
      this.saveDataToLocalStorage()
      // this.state.currentStep++
      // рендер шага 3
    }
  }

  onNextStep = (event) => {
    if (this.appFormElement.checkValidity()) {
      const isEmptyDataLocalStorage = Object.keys(this.state.data).length === 0
      const newName = this.fieldNameInputElement.value;
      const newEmail = this.fieldEmailInputElement.value;
      const isCorrectValues = newName.trim().length > 0 && newEmail.trim().length > 0;

      if (isEmptyDataLocalStorage) {
        if (isCorrectValues) {
          this.nextStep({
            'name': newName,
            'email': newEmail
          });
        }
      } else {
        this.state.currentStep++
      }
    } else {
      this.appFormElement.reportValidity()
    }
  }
  onConfirm = (event) => {
    event.preventDefault();
    this.deleteDataFromLocalStorage()
    alert("🎉 Success")
  }

  bindEvents() {
    this.continueButtonElement.addEventListener('click', this.onNextStep)

    // Нужен слушатель на кнопки Pins (onPrevStep)
    this.confirmButtonElement?.addEventListener('submit', this.onConfirm)
  }
}

export default App
