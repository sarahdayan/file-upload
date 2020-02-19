<template>
  <div>
    <h2 class="title">Uploading {{ files.length }} files</h2>
    <span class="size">
      {{ filesize }}
    </span>
    <div class="progressbar" :style="{ width: `${progression}%` }"></div>
  </div>
</template>

<script>
import getPowerAndUnit from "@/utils/getPowerAndUnit";

export default {
  props: {
    files: {
      type: Array
    },
    progression: {
      type: Number
    }
  },
  computed: {
    filesize() {
      const totalSize = this.files.reduce((acc, { size }) => acc + size, 0);
      const { power, unit } = getPowerAndUnit(totalSize);

      return totalSize / 10 ** power + " " + unit;
    }
  }
};
</script>
