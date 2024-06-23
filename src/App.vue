<template>
  <div class="q-pa-none">
    <q-layout>
      <q-header elevated class="bg-blue">
        <q-toolbar inset></q-toolbar>
        <q-toolbar>
          <q-toolbar-title> <strong>WEATHER LOKASI</strong> </q-toolbar-title>
          <q-btn-dropdown color="dark" label="TUGAS RIFKI" dropdown-icon="">
            <q-list>
              <q-item
                v-for="task in tasks"
                :key="task.name"
                clickable
                @click="openInNewTab(task.path)"
              >
                <q-item-section>{{ task.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
        <q-toolbar inset></q-toolbar>
      </q-header>

      <q-page-container>
        <q-page>
          <router-view></router-view>
        </q-page>
      </q-page-container>

      <q-footer class="bg-blue text-white q-pa-md">
        <div class="text-center">© Rifki Nul Arif. UAS Praktikum.</div>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";

export default {
  name: "App",
  components: {
    Weather,
  },
  data() {
    return {
      tasks: [
        {
          name: "Tugas 1",
          path: "https://rifki-project-cv.netlify.app/?authuser=0&hl=id",
        },
        {
          name: "Tugas 2",
          path: "https://tugas2-prakpbk-tau.vercel.app/?authuser=0&hl=id",
        },
        {
          name: "Tugas 3",
          path: "https://tugas3-prak-pbk-rifki.vercel.app/?authuser=0&hl=id",
        },
        {
          name: "Tugas 4",
          path: "https://tugas4-prakpbk.vercel.app/?authuser=0&hl=id",
        },
        {
          name: "Tugas 5",
          path: "https://tugas5-prakpbk.vercel.app/?authuser=0&hl=id",
        },
        {
          name: "Tugas 6",
          path: "https://tugas6-prakpbk.vercel.app/?authuser=0&hl=id",
        },
        {
          name: "Tugas 7",
          path: "https://tugas-7prakpbk.vercel.app/?authuser=0&hl=id",
        },
      ],
    };
  },
  methods: {
    openInNewTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.weather-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.form-container {
  width: 100%;
  max-width: 400px;
}

.form-title {
  text-align: center;
}

.form-inline {
  display: flex;
  align-items: center;
}

.form-input {
  flex: 1;
}

.form-button {
  margin-left: 8px;
}

.weather-info {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 100, 0, 0.7); /* Updated to dark green */
  max-width: 400px;
  width: 100%;
  text-align: center;
}
</style>
