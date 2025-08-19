import '@/styles'
import Button from './components/Button'

document.querySelector('#app').innerHTML = `
    <section>
        ${Button()}
        <img src="/vite.svg" />
        <p>Hello</p>
    </section>
`
