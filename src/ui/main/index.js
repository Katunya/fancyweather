/* eslint-disable import/no-cycle */
import Main from "./main-component";

export default (className) => {
    const main = new Main(className);
    main.render();
};
