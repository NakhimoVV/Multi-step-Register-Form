import styles from './Field.module.scss'
import getIdFromLabel from '@/modules/getIdFromLabel.js'

export default (props) => {
  const {
    label,
    id = getIdFromLabel(label),
    placeholder,
    type = 'text',
    dataJsAttribute = '',
    value = '',
  } = props

  return `
    <div class="${styles.field}">
      <label for="${id}">${label}</label>
      <div>
        <input 
          type="${type}"
          id="${id}"
          placeholder="${placeholder}"
          autocomplete="true"
          value="${value}"
          required
          ${dataJsAttribute}
        />      
      </div>
    </div>
  `
}
