import getIdFromLabel from "@/modules/getIdFromLabel.js";

export default (props) => {
  const {
    label,
    id = getIdFromLabel(label),
    placeholder,
    type= "text"
  } = props

  return `
    <div>
      <label for="${id}">${label}</label>
      <input type="${type}" id="${id}" placeholder="${placeholder}" autocomplete="true" }/>
    </div>
  `
}