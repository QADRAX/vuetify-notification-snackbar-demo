<template>
    <v-snackbar v-model="snackbar" :multi-line="true" :color="color" :timeout="timeout" :top="true">
        {{ message }}
        <v-btn dark text @click="setOpen(false)">
            <v-icon>mdi-close-circle</v-icon>
        </v-btn>
    </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const NOTIFICATION_TIMEOUT = 3000;
const NotificationModule = namespace('notification');

@Component({})
export default class NotificationSnackbar extends Vue {
    @NotificationModule.Getter('getKeepNotificationOpen') keepNotificationOpen: boolean;
    @NotificationModule.Getter('isOpen') isOpen: boolean;
    @NotificationModule.Getter('getColor') color: string;
    @NotificationModule.Getter('getMessage') message: string;
    @NotificationModule.Mutation('setOpen') setOpen: any;

    get snackbar() {
        return this.isOpen;
    }
    set snackbar(value: boolean) {
        this.setOpen(value);
    }
    
    get timeout() {
        return this.keepNotificationOpen ? 0 : NOTIFICATION_TIMEOUT;
    }
}
</script>
