<template>
  <div>
    <h4>Додати Студента</h4>
    <label>
      П.І.Б:
      <input type="text" v-model="student.namestudent" />
    </label>
    <label>
      Дата остання чергування:
      <input type="text" v-model="student.date" />
    </label>
    <label>
      Стать:
      <input type="text" v-model="student.sex" />
    </label>
    <label>
      Адреса:
      <input type="text" v-model="student.street" />
    </label>
    <button @click="createStudent">Додати студента</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        namestudent: "",
        date: "",
        sex: "",
        street: "",
      },
    };
  },
  methods: {
    createStudent() {
      this.student.id = Date.now();
      this.$emit("create", this.student);
      this.student = {
        namestudent: this.namestudent,
        date: this.date,
        sex: this.sex,
        street: this.street,
      };
    },
  },
};
</script>

<style lang="less" scoped></style>
