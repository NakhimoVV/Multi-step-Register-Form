import styles from './Step.module.scss'
import Field from "@/components/Field/index.js";
import Button from "@/components/Button/index.js";
import CustomCheckbox from "@/components/CustomCheckbox/index.js";

export default () => {

  return (`
    <div class="${styles.step}">
      <form class="${styles.form}" data-js-app-form>
        <fieldset>
          <legend class="${styles.title}" data-js-app-step-title>Register</legend>
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
        </fieldset>
        <fieldset>
          <legend class="${styles.title}">Which topics you are interested in?</legend>
          ${CustomCheckbox({
            label:'Software Development',
          })}
          ${CustomCheckbox({
            label:'User Experience',
          })}
          ${CustomCheckbox({
            label:'Graphic Design',
          })}
        </fieldset>
        <fieldset>
          <legend class="${styles.title}">Summary</legend>
          <dl>
            <dt>Name:</dt>
            <dd>Emily Johnson</dd>
            <dt>Email:</dt>
            <dd>emily@emilyjohnsonstl.com</dd>
            <dt>Topics:</dt>
            <dd>
              <ul>
                <li>User Experience</li>
                <li>Graphic Design</li>
              </ul>
            </dd>
          </dl>
        </fieldset>
      </form>
      <div class="${styles.footer}">
        ${Button()}
      </div>
    </div>
  `)
}