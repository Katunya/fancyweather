/* eslint-disable import/no-cycle */
import Component from '../component';
import { getState, dispatch } from '../../store/state/state';
import { changeSearchString } from '../../store/actions/controlPanel';
import translate from "../../utils/translate";
import { getWeatherByCity } from '../../store/actions/weather';

export default class Search extends Component {
    render() {
        const { lang } = getState().controlPanel;
        const html = `
      <form class="search__form">
        <input
          class="search__input"
          type="text"
          placeholder='${translate(lang, 'words', 'searchPlaceholder')}'
        />
        <button
          class="button search__button"
        >${translate(lang, 'words', 'search')}</button>
      </form>`;
        super.render(html);
        this.addEvents();
    }

    addEvents() {
        const searchForm = this.node.querySelector('.search__form');
        const input = this.node.querySelector('.search__input');

        searchForm.addEventListener('submit', (event) => {
            dispatch(changeSearchString(input.value));
            getWeatherByCity(input.value);
            event.preventDefault();
        });
    }
}
