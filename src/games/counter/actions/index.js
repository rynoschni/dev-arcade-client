export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const ADDSCORE = 'ADDSCORE';

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

export function actionAddScore(payload) {
  return {
    type: ADDSCORE,
    payload: payload
  };
}