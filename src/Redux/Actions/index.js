import {UniqueTypeOne, uniqueTypeTwo, hello, goodbye, maybe, abc, josh, Dan} from './constraints'


export const myAction = () => {
    return {
        type:UniqueTypeOne
    }
}

export const myActionTwo = (payload) => {
    return{
        type:uniqueTypeTwo,
        payload,
    }
}