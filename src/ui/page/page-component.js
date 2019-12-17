/* eslint-disable import/no-cycle */
import Component from '../component';
import Header from '../header/index';
import Main from '../main/index';

export default class Page extends Component {
    render() {
        const html = `
    <div class="wrapper">
      <header class="header">
      </header>
      <main class="main"></main>
    </div>`;
        super.render(html);
        Header('.header');
        Main('.main');
    }
}
