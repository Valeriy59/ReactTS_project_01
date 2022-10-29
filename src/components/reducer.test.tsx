import {TOGGLE_CONSTANT, StateType, reducer} from "./reducer";


test("collapsed should be true", () => {
    // data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    // expectation
    expect(newState.collapsed).toBe(true)
})