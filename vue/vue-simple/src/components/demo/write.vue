<template>
  <div>
    <el-form
      :model="numberValidateForm"
      :inline="true"
      ref="numberValidateForm"
      class="demo-form-inline"
    >
      <el-form-item
        label="数值"
        prop="value"
        :rules="[
      { required: true, message: '数值不能为空'},
      { type: 'number', message: '数值必须为数字值'}
    ]"
      >
        <el-input type="value" v-model.number="numberValidateForm.value" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      numberValidateForm: {
        value: ""
      }
    };
  },
  methods: {
    // ...mapMutations(['saveTag']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.saveTag(this.numberValidateForm.value);
          //   this.$store.commit("saveTag", this.numberValidateForm.value);
          this.$store.dispatch("saveTagAsync", this.numberValidateForm.value).then((res)=>{
            this.$message({
              message: res,
              type: "success"
            });
            this.resetForm("numberValidateForm");
          });
          // this.$message({
          //   message: "恭喜你，提交成功！",
          //   type: "success"
          // });
          // this.resetForm("numberValidateForm");
        } else {
          this.$message.error("很遗憾，提交失败！");
          this.resetForm("numberValidateForm");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>