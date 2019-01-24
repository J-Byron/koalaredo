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

function* koalaWatcher(){
    yield takeEvery('ADD_KOALA' , addKoala)
    yield takeEvery('GET_KOALA' , getKoala)
}

export default koalaWatcher