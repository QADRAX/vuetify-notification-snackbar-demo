import { RootState, INotificationState, INotificationRequest } from '@/types';
import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

const NOTIFICATION_DELAY = 200;

const state: INotificationState = {
    isOpen: false,
    message: '',
    color: 'info',
    keepNotificationOpen: false,
};

const getters: GetterTree<INotificationState, RootState> = {
    isOpen(currentState) {
        return currentState.isOpen;
    },
    getMessage(currentState) {
        return currentState.message;
    },
    getColor(currentState) {
        return currentState.color;
    },
    getKeepNotificationOpen(currentState) {
        return currentState.keepNotificationOpen;
    },
};

const mutations: MutationTree<INotificationState> = {
    setOpen(state, isOpen: boolean) {
        state.isOpen = isOpen;
    },
    setMessage(state, message: string) {
        state.message = message;
    },
    setColor(state, color: string) {
        state.color = color;
    },
    setKeepNotificationOpen(state, keepNotificationOpen: boolean) {
        state.keepNotificationOpen = keepNotificationOpen;
    },
};

const actions: ActionTree<INotificationState, RootState> = {
    showNotification(context, request: INotificationRequest) {
        const isCurrentlyOpen: boolean = context.getters['isOpen'];
        context.commit('setOpen', false);
        if (isCurrentlyOpen) {
            setTimeout(() => {
                context.commit('setMessage', request.message);
                context.commit('setColor', request.color);
                context.commit('setKeepNotificationOpen', request.keepNotificationOpen ?? false);
                context.commit('setOpen', true);
            }, NOTIFICATION_DELAY);
        } else {
            context.commit('setMessage', request.message);
            context.commit('setColor', request.color);
            context.commit('setKeepNotificationOpen', request.keepNotificationOpen ?? false);
            context.commit('setOpen', true);
        }
    },
    showErrorNotification(context) {
        const errorMessage = 'This is an error message and persists forever!';
        const request: INotificationRequest = {
            message: errorMessage,
            color: 'red',
            keepNotificationOpen: true,
        };
        context.dispatch('showNotification', request);
    },
};

export const notificationModule: Module<INotificationState, RootState> = {
    actions,
    state,
    mutations,
    getters,
    namespaced: true,
};
