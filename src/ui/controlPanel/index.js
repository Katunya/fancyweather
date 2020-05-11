/* eslint-disable import/no-cycle */
import ControlPanel from "./controlPanel-component";

export default (className) => {
    const controlPanel = new ControlPanel(className);
    controlPanel.render();
};
