/* eslint-disable import/no-cycle */
import Header from "./header-component";

export default (className) => {
    const header = new Header(className);
    header.render();
};
