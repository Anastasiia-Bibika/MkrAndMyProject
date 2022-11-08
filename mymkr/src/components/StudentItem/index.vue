<template>
  <div>
    <div class="student-item">
      <div><strong> П.І.Б:</strong> : {{ student.namestudent }}</div>
      <div><strong>Дата остання чергування:</strong> : {{ student.date }}</div>
      <div><strong> Стать:</strong> : {{ student.sex }}</div>
      <div><strong>Адреса:</strong> : {{ student.street }}</div>
    </div>
    <button @click="$emit('remove', student)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.student-item {
  margin: 10px;
}
</style>
