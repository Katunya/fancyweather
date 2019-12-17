/* eslint-disable import/no-cycle */
import Component from '../component';
import ControlPanel from '../controlPanel';
import Search from '../search';

export default class Header extends Component {
    render() {
        const html = `
      <div class="control-panel"></div>
      <div class="search"></div>
    `;
        super.render(html);
        ControlPanel('.control-panel');
        Search('.search');
    }
}
