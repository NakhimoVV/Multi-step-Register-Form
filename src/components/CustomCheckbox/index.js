import styles from './CustomCheckbox.module.scss';

export default (props) => {
  const {
    label,
    isChecked = false,
  } = props

  return (`
    <label class="${styles.field}">
      <input
        class="visually-hidden"
        type="checkbox"
        name="topics"
        value="${label}"
        ${isChecked ? 'checked' : ''}
      />
      <span class="${styles.label}">
        ${label}
      </span>
    </label>
  `)
}