export type InitStateType = {
    themeId: number
}

const initState: InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
