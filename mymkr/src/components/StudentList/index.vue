<template>
  <div>
    <div>
      <h1>Фільтр:</h1>
      <label>
        П.І.Б
        <input type="text" v-model="searchPib" />
      </label>
    </div>
    <div>
      <h1>Сортування</h1>
      <label>
        Сортувати за :
        <select v-model="sortField">
          <option value="namestudent">П.І.Б</option>
          <option value="date">Дата чергування</option>
          <option value="sex">Стать</option>
          <option value="street">Адреса</option>
        </select>
      </label>
    </div>
    <student-item
      v-for="student in filteredStudents"
      :student="student"
      :key="student.id"
      @remove="$emit('remove', student)"
    />
  </div>
</template>

<script>
import StudentItem from "@/components/StudentItem";
export default {
  components: {
    StudentItem,
  },
  data() {
    return {
      searchPib: null,
      sortField: null,
    };
  },
  props: {
    students: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredStudents() {
      let list = this.students;
      if (this.searchPib)
        list = this.students.filter((item) =>
          item.namestudent.startsWith(this.searchPib)
        );
      if (this.sortField) {
        list.sort((item1, item2) => {
          let val1 = item1[this.sortField];
          let val2 = item2[this.sortField];
          if (typeof val1 === "string") {
            val1 = val1.toUpperCase();
            val2 = val2.toUpperCase();
          }
          if (val1 === val2) return 0;
          if (val1 > val2) return 1;
          return -1;
        });
      }

      return list;
    },
  },
};
</script>

<style scoped></style>
