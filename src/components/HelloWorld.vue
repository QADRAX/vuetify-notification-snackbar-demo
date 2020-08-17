<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>
      <v-col cols="12">
        <v-btn
          color="success"
          :loading="isSuccessButtonLoading"
          @click="sendSuccessNotification"
        >Send success notification!</v-btn>
        <v-btn
          color="info"
          :loading="isInfoButtonLoading"
          @click="sendInfoNotification"
        >Send info notification!</v-btn>
        <v-btn
          color="error"
          :loading="isErrorButtonLoading"
          @click="sendErrorNotification"
        >Send error notification :S</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { INotificationRequest } from "@/types";

const NotificationModule = namespace("notification");

@Component({})
export default class HelloWorld extends Vue {
  isSuccessButtonLoading = false;

  isInfoButtonLoading = false;

  isErrorButtonLoading = false;

  @NotificationModule.Action("showNotification")
  showNotification: (request: INotificationRequest) => void;
  @NotificationModule.Action("showErrorNotification")
  showErrorNotification: () => void;

  sendSuccessNotification() {
    this.isSuccessButtonLoading = true;
    setTimeout(() => {
      this.isSuccessButtonLoading = false;
      const request: INotificationRequest = {
        color: "success",
        message: "This is a success notification!",
        keepNotificationOpen: false,
      };
      this.showNotification(request);
    }, 500);
  }

  sendInfoNotification() {
    this.isInfoButtonLoading = true;
    setTimeout(() => {
      this.isInfoButtonLoading = false;
      const request: INotificationRequest = {
        color: "info",
        message: "This is a info notification!",
        keepNotificationOpen: false,
      };
      this.showNotification(request);
    }, 500);
  }

  sendErrorNotification() {
    this.isErrorButtonLoading = true;
    setTimeout(() => {
      this.isErrorButtonLoading = false;
      this.showErrorNotification();
    }, 500);
  }
}
</script>
