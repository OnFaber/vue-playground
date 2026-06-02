<script setup lang="ts">
import { reactive, ref, computed, onMounted, watch } from 'vue';

const props = defineProps({
    msg: String
})

const emit = defineEmits(['response']);
emit('response', 'hello from child');

const counter = reactive({ count: 0 });
const message = ref('Hello world!');
const titleClass = ref('title');
const awesome = ref(true);
const count = ref(0);
const text = ref('');
const newTodo = ref('');
const hideCompleted = ref(false);
const todoId = ref(1);
const todoData = ref(null);
let id = 0;
const todos = ref([
    { id: id++, text: 'learn HTML', done: true },
    { id: id++, text: 'learn JavaScript', done: true },
    { id: id++, text: 'learn Vue', done: false },
]);
const filteredTodos = computed(() => {
    return hideCompleted.value
        ? todos.value.filter((t) => !t.done)
        : todos.value;
})

counter.count++;
message.value = 'Change Me';

const increment = () => count.value++;
const toggle = () => awesome.value = !awesome.value;
function addTodo() {
    todos.value.push({ id: id++, text: newTodo.value, done: false });
    newTodo.value = '';
};

const removeTodo = (id: number) => todos.value = todos.value.filter(t => t.id != id);

async function fetchData() {
    todoData.value = null;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    );
    todoData.value = await res.json();
}

const pElementRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (pElementRef != null && pElementRef.value != undefined) {    
      pElementRef.value.textContent = 'cucu';
    }
    fetchData();
});

watch(todoId, () => {
    console.log(`new id is: ${todoId.value}`);
    fetchData();
});

</script>

<template>
    <div>
        <h1>{{msg}}</h1>
        <p>Todo id: {{ todoId}}</p>
        <button @click="todoId++" :disabled="!todoData">Fetch next Todo</button>
        <p v-if="!todoData">Loading...</p>
        <pre v-else>{{todoData}}</pre>

        <p ref="pElementRef">Hello</p>
        <form @submit.prevent="addTodo">
            <input v-model="newTodo" required placeholder="new Todo" />
            <button>Add todo</button>
            <ul>
                <li v-for="todo in filteredTodos" :key="todo.id">
                    <input v-model="todo.done" type="checkbox" />
                    <span :class="{ done: todo.done }">{{ todo.text }}</span>
                    <button @click="removeTodo(todo.id)">X</button>
                </li>
            </ul>
        </form>
        <button @click="hideCompleted = !hideCompleted">{{ hideCompleted ? 'Show all' : 'Hide completed' }}</button>

        <button @click="toggle">toggle</button>
        <h1 v-if="awesome" v-bind:class="titleClass">Vue is awesome</h1>
        <h1 v-else>Oh no</h1>
        <h2>{{ message.split('').reverse().join('') }}</h2>
        <button v-on:click="increment">Count is: {{ count }}</button>
        <p>Count is: {{ counter.count }}</p>
        <input v-model="text" type="text" placeholder="type here" />
        <p>{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    background: v.$clr-primary;
}

.done {
    text-decoration: line-through;
}

.title {
    color:red;
}
</style>
