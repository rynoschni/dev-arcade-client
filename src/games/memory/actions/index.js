export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const UPDATE = "update";

export function actionIncrement() {
  return {
    type: INCREMENT,
  };
}

export function actionDecrement() {
  return {
    type: DECREMENT,
  };
}

export function actionUpdateUsername({ name }) {
  return {
    type: UPDATE,
    payload: { name },
  };
}
