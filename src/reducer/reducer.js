export const initialState = {
  score: 0,
  counter: 0,
  compScore: 0,
  winMessage: "",
  showWinMessage: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'WIN':
      return {
        ...state,
        score: state.score + 1,
        winMessage: "you win"
      }
    case 'LOOSE':
      return {
        ...state,
        compScore: state.compScore + 1,
        winMessage: "you loose"

      };
    case 'TIE':
      return {
        ...state,
        winMessage: "it's a tie"

      };
    case 'INCREASE_COUNTER':
      return {
        ...state,
        counter: state.counter + 1

      };
    case 'RESET_COUNTER':
      return {
        ...state,
        counter: 0

      };
    case 'SHOW_WIN_MESSAGE':
      return {
        ...state,
        showWinMessage: true

      };
    case 'HIDE_WIN_MESSAGE':
      return {
        ...state,
        showWinMessage: false

      };

  }
}