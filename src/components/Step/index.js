import styles from './Step.module.scss'
import Field from "@/components/Field/index.js";
import Button from "@/components/Button/index.js";

export default () => `
    <div class="${styles.step}">
        <h1 class="${styles.title}" data-js-app-step-title>Register</h1>
        <form class="${styles.form}" data-js-app-form>
          ${Field({
            label:'Name',
            placeholder:'Enter your name',
            dataJsAttribute: 'data-js-app-field-name-input'
          })}
          ${Field({
            label:'Email',
            placeholder:'Example@gmail.com',
            type:'email',
            dataJsAttribute: 'data-js-app-field-email-input'
          })}
        </form>
        <div class="${styles.footer}">
          ${Button()}
        </div>
    </div>
`