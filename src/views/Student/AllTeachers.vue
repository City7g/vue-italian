<template>
  <div class="all-teachers">
    <h1 class="title-h2--bold all-teachers__title">Выбери своего первого преподавателя!</h1>

    <TeacherInformation v-for="teacherInfo in teacherList" :key="teacherInfo.id" :teacherInfo="teacherInfo" />
  </div>
</template>

<script>
import TeacherInformation from "@/components/Student/TeacherInformation.vue";

export default {
  name: "AllTeachers",
  components: { TeacherInformation },
  data() {
    return {
      teacherList: [
        {
          id: 0,
          name: 'Tomothy Murphy',
          avatar: 'teacher-1.png',
          nationality: 'Итальянец',
          description: 'Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.<br>Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.'
        },
        {
          id: 1,
          name: 'Tomothy Murphy',
          avatar: 'teacher-2.png',
          nationality: 'Итальянец',
          description: 'Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.<br>Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.'
        },
        {
          id: 2,
          name: 'Morris Richards',
          avatar: 'teacher-3.png',
          nationality: 'Итальянец',
          description: 'Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.<br>Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.'
        },
        {
          id: 3,
          name: 'Lily Fisher',
          avatar: 'teacher-4.png',
          nationality: 'Итальянец',
          description: 'Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.<br>Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.'
        },
        {
          id: 4,
          name: 'Stella Flores',
          avatar: 'teacher-5.png',
          nationality: 'Итальянец',
          description: 'Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.<br>Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.'
        },
        {
          id: 5,
          name: 'Harold Miles',
          avatar: 'teacher-6.png',
          nationality: 'Итальянец',
          description: 'Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.<br>Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum. Irure fugiat magna deserunt labore veniam cupidatat veniam minim ea quis laborum.Exercitation officia ad officia sit amet laboris Lorem Lorem. Veniam sunt est eu voluptate ut officia proident pariatur sint amet in cupidatat ea cillum.'
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.all-teachers {
  max-width: 900px;

  padding: 40px 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  &__title {
    margin-bottom: 60px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }
}
</style>