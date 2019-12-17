/* eslint-disable import/no-cycle */
import Page from "./page-component";

export default (className) => {
    const page = new Page(className);
    page.render();
};
