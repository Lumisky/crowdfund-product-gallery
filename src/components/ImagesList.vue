<template>
  <div>
    <modal-pic :show="!!modalVisible" :title="title" @close="closeModal">
      <img class="modalImg" :src="`${url}`" />
    </modal-pic>
    <div class="container">
      <div class="gallery" v-for="img in gallery" :key="img.id">
        <img
          :src="`${img.thumbnailUrl}`"
          alt="thumbnailUrl"
          @click="focusImage(img)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import ModalPic from "./ui/ModalPic.vue";

export default {
  components: {
    ModalPic,
  },
  data() {
    return {
      modalVisible: false,
      title: null,
      url: null,
    };
  },
  methods: {
    ...mapActions(["loadGallery"]),
    loadGallery() {
      this.$store.dispatch("loadGallery");
    },
    focusImage(imgId) {
      this.modalVisible = true;
      this.title = imgId.title;
      this.url = imgId.url;
    },
    closeModal() {
      this.modalVisible = false;
    },
  },

  computed: {
    gallery() {
      const gallery = this.$store.getters["getGallery"];
      return gallery;
    },
  },
  created() {
    this.loadGallery();
  },
};
</script>

<style scoped>
div.gallery {
  border: 1px solid #ccc;
  margin: 1rem 1rem;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 150;
  height: 150;
}

.container {
  width: 100%;
  margin-top: 0.5rem;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 6rem;
}

.modalImg {
  width: 600px;
  height: 600px;
}
</style>
