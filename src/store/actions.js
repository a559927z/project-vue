import axios from 'axios'


export function modifyAName({ commit }, params) {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8080/dict-sb/user/findUserNameByTel?tel=123456').then((r) => {
      console.log(r);
      commit('modifyAName', r.data);
      // resolve(r);
    })
  });
}

// 给action注册事件处理函数，当这个函数被触发时候，将状态提交到mutations中处理
export function modifyANameBase({ commit }, name) {
  commit('modifyANameBase', name)
}

export function modifyBNameBase({ commit }, name) {
  return commit('modifyBNameBase', name)
}

// export const modifyBName = ({commit}, name) => commit('modifyBName', name)


// const actions = {
// };
// export default actions;
