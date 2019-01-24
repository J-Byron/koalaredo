import {takeEvery , call, put as dispatch} from 'redux-saga/effects'
import axios from 'axios'

function* getKoala(){
    try{
        const getResponse = yield call(axios.get , '/koalas')
        yield dispatch({type: 'SET_KOALA' , payload: getResponse.data})
    }catch(error){
        console.log('error in get koala' , error);
        
    }
}



function* addKoala(action){
    try{
        yield call(axios.post, '/koalas' , action.payload)
        yield dispatch({type: 'GET_KOALA'})
    }catch(error){
        console.log('error in add koala saga' , error);
        
    }
}

function* toggleReady(action) {
    try {
        yield call(axios.put, `/koalas/${action.payload.id}`, action.payload.val)
        yield dispatch({ type: 'GET_KOALA' })
    } catch (error) {
        console.log('error in add koala saga', error);
    }
}

function* koalaWatcher(){
    yield takeEvery('ADD_KOALA' , addKoala)
    yield takeEvery('GET_KOALA' , getKoala)
    yield takeEvery('TOGGLE_READY' , toggleReady)
}

export default koalaWatcher