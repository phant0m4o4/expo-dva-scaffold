import { create } from "dva-core";
import createLoading from "dva-loading";
import immer from "dva-immer";
/**
 * 创建app
 * @param {array} models
 * @param {object} initialState
 * @param {array} middlewares
 */
const createApp = (models, initialState = {}, middlewares = []) => {
    const app = create(initialState);
    app.use(immer());
    app.use(createLoading());
    app.use({
        onError(error) {
            console.warn("Dva Error:", error);
        },
    });
    for (const middleware of middlewares) {
        app.use(middleware);
    }
    for (const model of models) {
        app.model(model);
    }
    app.start();
    app.getStore = () => app._store;
    return app;
};

export default createApp;
