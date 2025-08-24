import styles from "./Status.module.scss"

export default ()=> {
  const activeStep = 1

  return (`
  <div class="${styles.status}">
    <p class="${styles.label}">Step <span data-js-app-number-step></span> of 3</p>
    <div class="${styles.pins}">
      <button 
        class="${styles.pins__item} ${activeStep === 1 ? styles.isActive : ''}"
        type="button"
      ></button>
      <button 
        class="${styles.pins__item} ${activeStep === 2 ? styles.isActive : ''}"
        type="button"
      ></button>
      <button 
        class="${styles.pins__item} ${activeStep === 3 ? styles.isActive : ''}"
        type="button"
      ></button>
    </div>
  </div>
`)
}