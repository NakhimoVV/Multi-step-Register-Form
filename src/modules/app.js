import steps from '@/modules/steps.js'
import { isActive, isSuccess } from '@/components/Status/Status.module.scss'

class App {
  selectors = {
    root: '[data-js-app]',
    appForm: '[data-js-app-form]',
    formFieldset: '[data-js-app-form-fieldset]',
    stepTitle: '[data-js-app-form-fieldset-title]',
    dynamicContent: '[data-js-app-form-fieldset-dynamic-content]',
    fieldNameInput: '[data-js-app-field-name-input]',
    fieldEmailInput: '[data-js-app-field-email-input]',
    formButton: '[data-js-app-form-button]',
    numberStep: '[data-js-app-number-step]',
    appStepper: '[data-js-app-stepper]',
  }

  stateClasses = {
    isActive,
    isSuccess,
  }

  localStorageKey = 'app-form'

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.stepTitleElement = this.rootElement.querySelector(
      this.selectors.stepTitle,
    )
    this.appFormElement = this.rootElement.querySelector(this.selectors.appForm)
    this.formFieldsetElement = this.appFormElement.querySelector(
      this.selectors.formFieldset,
    )
    this.dynamicContentElement = this.formFieldsetElement.querySelector(
      this.selectors.dynamicContent,
    )
    this.formButtonElement = this.rootElement.querySelector(
      this.selectors.formButton,
    )
    this.numberStepElement = this.rootElement.querySelector(
      this.selectors.numberStep,
    )
    this.appStepperElement = this.rootElement.querySelector(
      this.selectors.appStepper,
    )

    this.state = {
      data: this.getDataFromLocalStorage(),
      stepperArray: Array.from(this.appStepperElement.children),
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
      console.error('Data form parse error!')
      return {}
    }
  }
  saveDataToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.state.data))
  }
  deleteDataFromLocalStorage() {
    localStorage.removeItem(this.localStorageKey)
  }

  findInputElement() {
    this.fieldNameInputElement = this.appFormElement.querySelector(
      this.selectors.fieldNameInput,
    )
    this.fieldEmailInputElement = this.appFormElement.querySelector(
      this.selectors.fieldEmailInput,
    )
  }

  render() {
    const step = steps[this.state.currentStep]
    this.stepTitleElement.textContent = step.title

    this.state.stepperArray.map((step, index) => {
      if (index === this.state.currentStep) {
        step.classList.add(this.stateClasses.isActive)
      } else {
        step.classList.remove(this.stateClasses.isActive)
      }
    })

    this.dynamicContentElement.innerHTML = step.render(this.state.data)
    this.numberStepElement.textContent = this.state.currentStep + 1

    if (this.state.currentStep === 0) {
      this.findInputElement()
    }

    const lastStep = this.state.currentStep === steps.length - 1

    if (lastStep) {
      this.formButtonElement.type = 'submit'
      this.formButtonElement.textContent = 'Confirm'
      this.formButtonElement.onclick = null
    } else {
      this.formButtonElement.type = 'button'
      this.formButtonElement.textContent = 'Continue'
      this.formButtonElement.onclick = this.onNextStep
    }
  }

  nextStep(stepData) {
    const isFirstStepData =
      Object.hasOwn(stepData, 'name') && Object.hasOwn(stepData, 'email')

    if (isFirstStepData) {
      this.state.data = { ...stepData }
      this.saveDataToLocalStorage()
      this.state.stepperArray[this.state.currentStep].classList.add(
        this.stateClasses.isSuccess,
      )
      this.state.currentStep++
      this.render()
    }

    if (Array.isArray(stepData) && stepData.length > 0) {
      this.state.data['topics'] = stepData
      this.saveDataToLocalStorage()
      this.state.stepperArray[this.state.currentStep].classList.add(
        this.stateClasses.isSuccess,
      )
      this.state.currentStep++
      this.render()
    }
  }

  prevStep(target) {
    if (this.state.currentStep > 0) {
      this.state.stepperArray[this.state.currentStep].classList.remove(
        this.stateClasses.isActive,
      )
      this.state.stepperArray[this.state.currentStep - 1].classList.remove(
        this.stateClasses.isSuccess,
      )
      this.state.currentStep--
      target.classList.add(this.stateClasses.isActive)
      this.render()
    }
  }

  onNextStep = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (!this.appFormElement.checkValidity()) {
      this.appFormElement.reportValidity()
      return
    }

    if (this.state.currentStep === 0) {
      const newName = this.fieldNameInputElement.value.trim()
      const newEmail = this.fieldEmailInputElement.value.trim()
      const isCorrectValues = newName.length > 0 && newEmail.length > 0

      if (isCorrectValues) {
        this.nextStep({
          name: newName,
          email: newEmail,
        })
      }
    }

    if (this.state.currentStep === 1) {
      const checkedArray = [
        ...this.appFormElement.querySelectorAll(
          'input[type="checkbox"]:checked',
        ),
      ].map((input) => input.value)

      if (checkedArray.length > 0) {
        this.nextStep(checkedArray)
      }
    }
  }

  onPrevStep = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const target = event.target

    this.prevStep(target)
  }

  onConfirm = (event) => {
    event.preventDefault()
    this.deleteDataFromLocalStorage()
    this.state.data = {}
    alert('🎉 Success')
    this.state.currentStep = 0
    this.state.stepperArray.map((step) =>
      step.classList.remove(this.stateClasses.isSuccess),
    )
    this.render()
  }

  bindEvents() {
    this.appFormElement.addEventListener('submit', this.onConfirm)
    this.appStepperElement.addEventListener('click', this.onPrevStep)
  }
}

export default App
