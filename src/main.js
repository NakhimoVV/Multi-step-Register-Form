import '@/styles/index.scss'
import Step from "@/components/Step/index.js";
import Status from "@/components/Status/index.js";

document.querySelector('#app').innerHTML = `
  ${Step()}
  ${Status()}
`
