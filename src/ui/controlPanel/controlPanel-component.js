/* eslint-disable import/no-cycle */
import { getState, dispatch } from '../../store/state/state';
import Component from '../component';
import { changeLang, changeUseCelsius } from '../../store/actions/controlPanel';

export default class ControlPanel extends Component {
    render() {
        const html = `
      <button class="button control-panel__update"></button>
      <select class="dropdown control-panel__lang">
        <option class="dropdown__item" value="en">en</option>
        <option class="dropdown__item" value="ru">ru</option>
      </select>
      <button class="button control-panel__faringate">&deg; F</button>
      <button class="button button--selected control-panel__celsius">&deg; C</button>`;
        super.render(html);
        this.addEvents();
    }

    addEvents() {
        const { lang, isCelsius } = getState().controlPanel;
        const buttonLang = this.node.querySelector('.control-panel__lang');
        const buttonFaringate = this.node.querySelector('.control-panel__faringate');
        const buttonCelsius = this.node.querySelector('.control-panel__celsius');

        buttonLang.value = lang;

        if (isCelsius) {
            buttonFaringate.classList.remove('button--selected');
            buttonCelsius.classList.add('button--selected');
        } else {
            buttonFaringate.classList.add('button--selected');
            buttonCelsius.classList.remove('button--selected');
        }

        buttonLang.addEventListener('change', () => {
            dispatch(changeLang(buttonLang.value));
            localStorage.setItem('lang', buttonLang.value);
        });

        buttonFaringate.addEventListener('click', () => {
            dispatch(changeUseCelsius(false));
            localStorage.setItem('isCelsius', false);
        });

        buttonCelsius.addEventListener('click', () => {
            dispatch(changeUseCelsius(true));
            localStorage.setItem('isCelsius', true);
        });
    }
}
