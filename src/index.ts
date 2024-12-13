import { defineAsyncComponent } from 'vue';
import './style.css';

const Button = defineAsyncComponent(() => import('./components/Button/Button.vue'));
const SInput = defineAsyncComponent(() => import('./components/SInput/SInput.vue'));

export default {
  install: (app: any) => {
    app.component('Button', Button);
    app.component('SInput', SInput);
  }
}