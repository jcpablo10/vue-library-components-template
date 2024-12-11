const Button = () => import('./components/Button/Button.vue')
const SInput = () => import('./components/SInput/SInput.vue')
import './style.css';

export default {
  install: (app: any, options: any) => {
    app.component('Button', Button);
    app.component('SInput', SInput);
  }
}