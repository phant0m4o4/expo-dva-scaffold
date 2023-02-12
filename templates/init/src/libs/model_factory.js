import * as Storage from "./storage";

export const CreateModel = (options) => {
  const { namespace, initState, reducers, effects, subscriptions } = options;
  return {
    namespace: namespace,
    state: JSON.parse(JSON.stringify(initState)),
    reducers: {
      init() {
        return JSON.parse(JSON.stringify(initState));
      },
      save(state, action) {
        return { ...state, ...action.payload };
      },
      ...reducers,
    },
    effects: { ...effects },
    subscriptions: { ...subscriptions },
  };
};

export const CreatePersistModel = (options) => {
  const { namespace, initState, reducers, effects, subscriptions } = options;
  return {
    namespace: namespace,
    state: JSON.parse(JSON.stringify(initState)),
    reducers: {
      _init() {
        return JSON.parse(JSON.stringify(initState));
      },
      _save(state, action) {
        return { ...state, ...action.payload };
      },
      ...reducers,
    },
    effects: {
      *init(_, { put, call, select }) {
        yield put({
          type: "_init",
        });
        const NewState = select((state) => state[namespace]);
        yield call(Storage.set, {
          key: namespace,
          value: NewState,
        });
      },
      *save({ payload }, { put, call, select }) {
        yield put({
          type: "_save",
          payload: payload,
        });
        const NewState = yield select((state) => {
          // console.log(state[namespace]);
          return state[namespace];
        });
        yield call(Storage.set, {
          key: namespace,
          value: NewState,
        });
      },
      ...effects,
    },
    subscriptions: {
      setup({ dispatch }) {
        Storage.get({ key: namespace }).then((state) => {
          dispatch({
            type: "save",
            payload: state,
          });
        });
      },
      ...subscriptions,
    },
  };
};
