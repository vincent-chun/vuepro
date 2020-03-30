import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
   column:[],
}

let actions = {
  [types.COLUMN]({commit,state},payload){
    get({apiname:'column',params:{_page:1,_limit:6}}).then(
      result=>commit('COLUMN',result)
    )
  },
}

let mutations = {
  [types.COLUMN]:(state,payload)=>state.column=payload,
}


export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}