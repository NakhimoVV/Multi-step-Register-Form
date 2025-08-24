import styles from "./Status.module.scss"

export default ()=> {
  return (`
    <div class="${styles.status}">
      <p class="${styles.label}">Step <span data-js-app-number-step></span> of 3</p>
      <div class="${styles.stepper}" data-js-app-stepper>
        <button 
          class="${styles.stepper__item}"
          type="button"
        ></button>
        <button 
          class="${styles.stepper__item}"
          type="button"
        ></button>
        <button 
          class="${styles.stepper__item}"
          type="button"
        ></button>
      </div>
    </div>
  `)
}