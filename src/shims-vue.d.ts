// XXX For some reason without this file you are not able to:
// import MyComponent from 'my-component.vue'
// This was not mentioned in Vue's TypeScript guide and I found very few
// mentions of this. Maybe I'm doing something wrong and this is not needed.
declare module "*.vue" {
  import {DefineComponent} from 'vue'
  const component: DefineComponent
  export default component
}
