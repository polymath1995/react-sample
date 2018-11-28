export const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
}

export const initPorfolioData = (data) => dispatch => {
    dispatch({
        type: 'PORTFOLIO_DATA',
        payload: data
    })
}

