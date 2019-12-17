// eslint-disable-next-line import/no-cycle
import Search from "./search-component";

export default (className) => {
    const search = new Search(className);
    search.render();
};
