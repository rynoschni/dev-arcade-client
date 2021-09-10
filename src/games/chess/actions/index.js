export const PLAYER1 = 'PLAYER1';
export const PLAYER2 = 'PLAYER2';

export function actionPlayer1({name, score}) {
  return {
    type: PLAYER1,
    payload: {
      name,
      score
    }
  };
}


export function actionPlayer2({name, score}) {
  return {
    type: PLAYER2,
    payload: {
      name,
      score
    }
  };
}

