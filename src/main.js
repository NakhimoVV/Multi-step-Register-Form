import '@/styles/index.scss'
import Step from '@/components/Step/index.js'
import Status from '@/components/Status/index.js'
import App from '@/modules/app.js'

document.querySelector('#app').innerHTML = `
  ${Step()}
  ${Status()}
`

new App()
