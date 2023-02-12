import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                const stateCopy = state.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                return stateCopy;
            } else if (action.payload === 'down') {
                const stateCopy = state.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                return stateCopy;
            } else {
                return state;
            }
        }
        case 'check': {
            return state.filter(item => item.age >= action.payload);
        }
        default:
            return state
    }
}
