<template>
  <div class="weather-container q-pa-md">
    <div class="form-container">
      <h4 class="q-mb-md form-title">Cek Derajat</h4>
      <form @submit.prevent="getCuaca" class="q-gutter-md form-inline">
        <q-input
          outlined
          square
          v-model="kota"
          label="Silahkan masukkan"
          autofocus
          class="form-input"
        />
        <q-btn square type="submit" label="cari" color="blue" size="21px" />
      </form>
    </div>

    <q-spinner-puff
      v-if="sedangMemuat"
      color="dark"
      size="5em"
      class="q-mt-lg"
    />

    <p v-if="!sedangMemuat && !dataCuacaAda" class="q-mt-lg">
      Masukkan untuk melihat Lokasi.
    </p>

    <div v-if="dataCuacaAda && !sedangMemuat" class="q-mt-lg weather-info">
      <p>Lokasi: {{ lokasi }}</p>
      <p>Temperatur: {{ suhu }}°C</p>
      <p>Deskripsi: {{ cuacaSaatIni }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "Weather",
  setup() {
    const kota = ref("");
    const lokasi = ref("");
    const sedangMemuat = ref(false);
    const dataCuacaAda = ref(false);
    const cuacaSaatIni = ref("");
    const suhu = ref(0);
    const kelembaban = ref(0);
    const kecepatanAngin = ref(0);

    const getCuaca = async () => {
      sedangMemuat.value = true;
      dataCuacaAda.value = false;
      const apiKey = "df2b1482f6ee583e98478587d187fbda";

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${kota.value}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        cuacaSaatIni.value = data.weather[0].description;
        suhu.value = data.main.temp;
        kelembaban.value = data.main.humidity;
        kecepatanAngin.value = data.wind.speed;
        lokasi.value = data.name;
        dataCuacaAda.value = true;

        setTimeout(() => {
          sedangMemuat.value = false;
        }, 2000);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        sedangMemuat.value = false;
      }
    };

    return {
      kota,
      lokasi,
      sedangMemuat,
      dataCuacaAda,
      cuacaSaatIni,
      suhu,
      kelembaban,
      kecepatanAngin,
      getCuaca,
    };
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}
</style>
