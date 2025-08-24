import styles from './Button.module.scss'

export default () => `
    <button
      class="${styles.button}"
      type="button"
      data-js-app-form-button
    >
      <span class="${styles.label}">Continue</span>
    </button>
`
