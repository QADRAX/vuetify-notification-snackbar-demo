import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/types';
import { notificationModule as notification } from './notification';

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
    state: {
    },
    modules: {
        notification,
    },
};

const store = new Vuex.Store<RootState>(storeOptions);

export default store;
