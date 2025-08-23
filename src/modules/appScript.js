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
    // {
    //   name: "Emily",
    //   email: "email",
    //   topics: ["ds", 'dsd', 'sds']
    // }
      data: this.getDataFromLocalStorage(),
      currentStep: 1,
    }
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

  render() {
    // Показывать текущий шаг!
    this.numberStepElement.textContent = this.state.currentStep
    // nextStep(2)
    if (this.state.currentStep === 2) {
      this.stepTitleElement.textContent = 'Which topics you are interested in?'
      this.appFormElement.innerHTML = `
      `
    }
    // prevStep()
  }

  nextStep(stepData) {
    // continue x2
    const isFirstStepData = stepData.hasOwnProperty("name") && stepData.hasOwnProperty("email");

    if (isFirstStepData) {
      this.state.data = {...stepData}
      this.saveDataToLocalStorage()
      this.state.currentStep++
      // рендер шага 2
    }

    if (Array.isArray(stepData)) {
      this.state.data['topics'] = stepData;
      this.saveDataToLocalStorage()
      this.state.currentStep++
      // рендер шага 3
    }
  }

  onNextStep = (event) => {
    event.preventDefault();

    const isEmptyDataLocalStorage = Object.keys(this.state.data).length === 0
    const newName = this.fieldNameInputElement.value;
    const newEmail = this.fieldEmailInputElement.value;
    const isCorrectValues = newName.trim().length > 0 && newEmail.trim().trim().length > 0;

    if (isEmptyDataLocalStorage) {
      if (isCorrectValues) {
        this.nextStep({
          'name': newName,
          'email': newEmail
        });
      }
    } else {
      this.nextStep(['dsa'])
      // данные со второго шага
    }
  }

  onConfirm = (event) => {
    event.preventDefault();
    // отчистка data в localStorage
    alert("🎉 Success")
  }

  bindEvents() {
    this.continueButtonElement.addEventListener('Click', this.onNextStep)
    // слушатель на кнопки Pins
    this.confirmButtonElement.addEventListener('Submit', this.onConfirm)
  }
}

export default new App()
