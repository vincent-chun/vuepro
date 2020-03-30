import {
  UPDATE_FOOT,UPDATE_LOADING,UPDATE_NAV
} from './types';

export default {
  [UPDATE_NAV]:(state,payload)=>state.bNav=payload,
  [UPDATE_FOOT]:(state,payload)=>state.bFoot=payload,
  [UPDATE_LOADING]:(state,payload)=>state.bLoading=payload,
}
