<template>
  <div>
    <el-tag
      v-for="tag in tags"
      :key="tag.id"
      closable
      :type="tag.type"
      @close="handleClose(tag)"
    >{{tag.name}}</el-tag>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      tags: this.$store.getters.getTags
    };
  },
  methods: {
    // ...mapMutations(['deleteTag']),
    ...mapActions(["deleteTagAsync"]),
    handleClose(tag) {
      // this.deleteTag(tag.id)
      this.deleteTagAsync(tag.id).then(res => {
        this.$message({
          message: res,
          type: "success"
        });
      });
    }
  }
};
</script>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>