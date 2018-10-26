const initialState = {
  socket: {
    isConnected: false,
    messages: [],
    reconnectError: false
  }
};
export const state = Object.assign({}, initialState);

export const actions = {
  clearMessages({ commit }) {
    commit("clearMessages");
  }
};

export const mutations = {
  SOCKET_ONOPEN(state) {
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    console.error(state, event);
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    state.socket.messages.push(message);
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
  clearMessages(state) {
    state.socket.messages.splice(0, state.socket.messages.length);
  }
};

const getters = {
  getMessages: state => {
    return state.socket.messages;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
