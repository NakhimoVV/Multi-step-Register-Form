import styles from './Register.module.scss'
import Field from "@/components/Field/index.js";
import Button from "@/components/Button/index.js";

export default () => `
    <div class="${styles.register}">
        <h2 class="${styles.title}">Register</h2>
        <form action="">
          ${Field({label:'Name', placeholder:'Enter your name'})}
          ${Field({label:'Email', placeholder:'Example@gmail.com', type:'email'})}
        </form>
        ${Button()}
    </div>
`