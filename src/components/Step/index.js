import styles from './Step.module.scss'
import Button from "@/components/Button/index.js";

export default () => {

  return (`
    <div class="${styles.step}">
      <form class="${styles.form}" data-js-app-form>
        <fieldset data-js-app-form-fieldset>
          <legend class="${styles.title}" data-js-app-form-fieldset-title></legend>
          <div class="${styles.dynamic}" data-js-app-form-fieldset-dynamic-content></div>
        </fieldset>
        <div class="${styles.footer}">
          ${Button()}
        </div>
      </form>
    </div>
  `)
}