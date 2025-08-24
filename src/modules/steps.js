import Field from "@/components/Field/index.js";
import CustomCheckbox from "@/components/CustomCheckbox/index.js";

export default [
  {
    title: 'Register',
    render: (state) => `
      ${Field({
        label:'Name',
        placeholder:'Enter your name',
        dataJsAttribute: 'data-js-app-field-name-input',
        value: state?.name,
      })}
      ${Field({
        label:'Email',
        placeholder:'Example@gmail.com',
        type:'email',
        dataJsAttribute: 'data-js-app-field-email-input',
        value: state?.email
      })}
    `
  },
  {
    title: 'Which topics you are interested in?',
    render: (state) => `
      ${CustomCheckbox({
        label:'Software Development',
        isChecked: state?.topics?.includes('Software Development'),
      })}
      ${CustomCheckbox({
        label:'User Experience',
        isChecked: state?.topics?.includes('User Experience'),
        }
      )}
      ${CustomCheckbox({
        label:'Graphic Design',
        isChecked: state?.topics?.includes('Graphic Design'),
      })}
    `
  },
  {
    title: 'Summary',
    render: (state) => `
      <dl>
        <div>
          <dt>Name:</dt>
          <dd>${state.name}</dd>
        </div>
        <div>
          <dt>Email:</dt>
          <dd>${state.email}</dd>
        </div>
        <div>
          <dt>Topics:</dt>
          <dd>
            <ul>
              ${state.topics?.map(item => (`<li>${item}</li>`)).join('')}
            </ul>
          </dd>
        </div>
      </dl>
    `
  }
];