const state={
  buycar:[
    // {_id:1,name:'xx',price:'',num:1}
  ]
}

const actions = {
  addItem:({commit,state},payload)=>{
    let arr = [...state.buycar];
    
    let find = false;
    
    arr.forEach((item,index)=>{
      if(item._id==payload._id){
        item.number++;//数量递增
        find=true;
      }
    })
    
    if(!find){
      payload.number = 1;
      arr.push(payload)
    }
    
    commit('ADD_ITEM',arr)
  },
  
  changeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item._id == payload._id){
        item.number += payload.num
      }
    })
    
    commit('CHANGE_ITEM',[...state.buycar])
    
  },
  
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item._id==payload._id){
        state.buycar.splice(index,1)
      }
    })
    commit('REMOVE_ITEM',[...state.buycar])
  },
  
  clearBuycar:({commit,state})=>commit('CLEAR_BUYCAR',[])
  
}


const mutations={
  ADD_ITEM:(state,payload)=>{
    state.buycar=payload
  },
  CHANGE_ITEM:(state,payload)=>{
    state.buycar=payload
  },
  REMOVE_ITEM:(state,payload)=>{
    state.buycar=payload
  },
  CLEAR_BUYCAR:(state,payload)=>{
    state.buycar=payload
  }
}


export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}