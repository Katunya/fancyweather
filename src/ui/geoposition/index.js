/* eslint-disable import/no-cycle */
import Geoposition from "./geopisition-component";

export default (className) => {
    const geoposition = new Geoposition(className);
    geoposition.render();
};
