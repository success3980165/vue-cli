export const mutationsMsg = (state, payload) => {
  // 载荷应该是一个对象，记录的 mutation 会更易读：
  state.msg = payload.msg;
}
