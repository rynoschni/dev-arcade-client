export const INCREMENT="increment";
export const DECREMENT="decrement";
export const INCREASEMOVE="increasemove";

export function actionIncrement() {
  return {
    type: INCREMENT
  };
}
export function actionDecrement() {
  return {
    type: DECREMENT
  };
}

export function actionIncreaseMove() {
  return {
    type: INCREASEMOVE
  };
}
