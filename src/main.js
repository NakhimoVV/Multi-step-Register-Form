import '@/styles/index.scss'
import Register from "@/components/Register/index.js";

document.querySelector('#app').innerHTML = `
    <section>
        ${Register()}
    </section>
`
