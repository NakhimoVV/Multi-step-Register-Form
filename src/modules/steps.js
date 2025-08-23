import Field from "@/components/Field/index.js";
import CustomCheckbox from "@/components/CustomCheckbox/index.js";

export default [
  {
    title: 'Register',
    render: (state) => `
      ${Field({
        label:'Name',
        placeholder:'Enter your name',
        dataJsAttribute: 'data-js-app-field-name-input'
        })
      }
      ${Field({
        label:'Email',
        placeholder:'Example@gmail.com',
        type:'email',
        dataJsAttribute: 'data-js-app-field-email-input'
        }
      )}
    `
  },
  {
    title: 'Which topics you are interested in?',
    render: (state) => `
      ${CustomCheckbox({
        label:'Software Development',
        })
      }
      ${CustomCheckbox({
        label:'User Experience',
        }
      )}
      ${CustomCheckbox({
        label:'Graphic Design',
        }
      )}
    `
  },
  {
    title: 'Summary',
    render: (state) => `
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
    `
  }
]