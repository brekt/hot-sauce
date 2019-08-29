import actions from './actions';

export default (state, action) => {

    console.log(state, action);
    switch (action.type) {
        case actions.DECREASE_HEAT:
            return {
                ...state,
                heatIndex: clampHeatIndex(state.heatIndex + 10)
            };
        case actions.INCREASE_HEAT:
            return {
                ...state,
                heatIndex: clampHeatIndex(state.heatIndex - 10)
            }
      default:
        // don't do anything
    }
  }

  function clampHeatIndex(heatIndex) {
    let newHeatIndex = heatIndex;
    if (newHeatIndex < 0) {
        newHeatIndex = 0;
    } else if (newHeatIndex > 120) {
        newHeatIndex = 120;
    }
    return newHeatIndex;
  }