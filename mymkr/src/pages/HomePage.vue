<template>
  <div>
    <router-link class="link" to="/">Головна</router-link>
    <router-link class="link" to="/second">Home</router-link>
    <router-link class="link" to="third">Second </router-link>

    <student-form @create="createStudent" />
    <student-list :students="students" @remove="removeStudent" />
  </div>
</template>

<script>
import StudentForm from "@/components/StudentForm";
import StudentList from "@/components/StudentList";
export default {
  name: "HomePage",
  components: {
    StudentForm,
    StudentList,
  },
  data() {
    return {
      students: [
        {
          id: 1,
          namestudent: "Kovaluk Irina Sergiivna",
          date: "2 листопада",
          sex: "Жіноча",
          street: "Університетська",
        },
      ],
    };
  },
  methods: {
    createStudent(student) {
      this.students.push(student);
    },
    removeStudent(student) {
      this.students = this.students.filter((s) => s.id !== student.id);
    },
  },
};
</script>

<style scoped>
.link {
  margin: 15px;
  text-decoration: none;
}
</style>
