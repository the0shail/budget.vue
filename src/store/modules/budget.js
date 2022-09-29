const budget = {
    namespaced: true,
    state: {
        budget: {
            1: {
                id: 1,
                title: 'Payday',
                value: 100
            },
            2: {
                id: 2,
                title: 'Rent house',
                value: -130
            },
            3: {
                id: 3,
                title: 'Work',
                value: 100
            }
        }
    },
    getters: {
        budgetList: ({ budget }) => budget
    },
    mutations: {
        ADD_LAYOUT(state, info){
            state.budget[info.id] = info;
        },

        DELETE_LAYOUT(state, deleteItem){
            let keyBudgetList = Object.keys(state.budget);

            keyBudgetList.forEach(item => {
                if (item === deleteItem){
                    delete state.budget[item];
                }
            });
        }
    },
    actions: {
        addNewRep({ commit }, info){
            let newLayout = {
                id: Math.random() * 1000,
                ...info,
                };
            commit("ADD_LAYOUT", newLayout)
        },

        itemDelete({ commit }, deleteItem) {
            commit('DELETE_LAYOUT', deleteItem)
        }
    }
}

export default budget;