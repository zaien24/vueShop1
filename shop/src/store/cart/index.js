export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        totalPrice(state) {
            return state.items.reduce((sum, item) => sum + item.price, 0);
        }
    },
    mutations: {
        addItem(state, item) {
            state.items.push({
                ...item
            });
        },
        delItem(state, id) {
            state.items = state.items.filter(item => item.id !== id);
        }
    },
    actions: {
        addItem({ commit }, item) {
            commit('addItem', item);
        },
        delItem({ commit }, id) {
            commit('delItem', id);
        }
    }
}