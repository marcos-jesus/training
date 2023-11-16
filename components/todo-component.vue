<script setup>
  const useTodo = useTodoStore()
  const newTasks = reactive({
    title: '',
    description: ''
  })

  function addTask() {
    if (newTasks.title.trim() === '' || newTasks.title.length < 3) return
    if (newTasks.description.trim() === '' || newTasks.description.length < 3) return
    
    useTodo.createTask(newTasks)

    newTasks.title = ''
    newTasks.description = ''
  }

  function deleteTask(task) {
    useTodo.deleteTask(task.id)
  }

  onMounted(() => {
    useTodo.doGetTasks()
  })
</script>

<template>
  <LoadingComponent :display-loading="useTodo.loadingTodo" />
  <div class="flex justify-center">
    <div class="p-10">
      <h1 class="text-3xl mb-4 text-center">Todo List</h1>
      <div class="flex justify-center space-x-2">
        <input
        v-model="newTasks.title"
        placeholder="Titulo"
        class="mb-4 p-2 border rounded focus:outline-none"
      />
        <input 
          v-model="newTasks.description"
          placeholder="Descrição"
          class="mb-4 p-2 border rounded focus:outline-none"
        />

        <button class="bg-blue-500 w-[10rem] h-10 hover:bg-blue-300 text-white px-3 py-1 rounded" @click="addTask()">
          Criar
        </button>
      </div>
      <ul class="space-y-2">
        <li
          v-for="(task, index) in useTodo.tasks.data"
          :key="index"
          class="flex items-center justify-between border p-2 rounded gap-x-10"
        >
          <span>{{ task.title }} {{ task.description }}</span>
          <div class="flex items-end gap-x-2">
          <button
            @click="deleteTask(task)"
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            <Icon name="ic:baseline-delete" />
          </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.completed {
  text-decoration: line-through
}
</style>
