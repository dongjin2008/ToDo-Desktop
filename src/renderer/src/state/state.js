import { proxy } from 'valtio';
import supabase from '../apis/db';

const store = proxy({
  todos: [],
  folders: [],
  name: '',
  loggedIn: false,
  folderId: 4,
  dailyGoal: '',

  setFolders: (value) => {
    store.folders = value;
  },
  setName: (value) => {
    store.name = value;
  },
  setTodos: (value) => {
    store.todos = value;
  },
  setLoggedIn: (value) => {
    store.loggedIn = value;
  },
  setFolderId: (value) => {
    store.folderId = value;
    store.updateTodo()
    store.getTodos()
  },
  setDailyGoal: (value) => {
    store.dailyGoal = value;
  },

  getTodos: async () => { 
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('task', { ascending: true })
      .eq('folderId', store.folderId)
    store.setTodos(data)
  },

  updateTodo: async () => {
    const { data, error } = await supabase
      .from('folders')
      .select('*')
      .eq('id', store.folderId)
    console.log(data[0].name)
    store.setName(data[0].name)
  },

  createTodo: async () => {
    const { error } = await supabase
      .from('todos')
      .insert([
        { task: 'Click the task to change', folderId: store.folderId },
      ])
    console.log(error)
    store.getTodos()
  },

  deleteTodo: async (todo) => {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', todo.id)
    store.getTodos()
  },

  handleCheck: async (todo) => {
    const { error } = await supabase
      .from('todos')
      .update({ isDone: !todo.isDone })
      .eq('id', todo.id)
    store.getTodos()
    console.log(todo.isDone)
  },

  deleteFolder: async () => {
    const { error } = await supabase
      .from('folders')
      .delete()
      .eq('id', store.folderId)
    const { error2 } = await supabase
      .from('todos')
      .delete()
      .eq('folderId', store.folderId)
    store.getFolders()
  },

  createFolder: async () => {
    const { error } = await supabase
      .from('folders')
      .insert([
        { name: 'Click to change', userId: localStorage.getItem('userId') },
      ])
    console.log("created")
    console.log(error)
    store.getFolders()
  },

  getFolders: async () => {
    const { data, error } = await supabase
      .from('folders')
      .select('*')
      .order('name', { ascending: true })
      .eq('userId', localStorage.getItem('userId'))
    store.setFolders(data)
    console.log(store.folders)
  },
  
  updateFolder: async (folder, name) => {
    const { error } = await supabase
      .from('folders')
      .update({ name: name })
      .eq('id', folder.id)
    console.log(error)
    console.log('setted name')
    store.getFolders()
  },

  getDailyGoal: async () => {
    const { data, error } = await supabase
      .from('goals')
      .select('*')
      .eq('userId', localStorage.getItem('userId'))
    if (data.length === 0) {
      const { error } = await supabase
        .from('goals')
        .insert([
          { goal: '', userId: localStorage.getItem('userId') },
        ])
      console.log("created")
      console.log(error)
    }
    store.setDailyGoal(data[0].goal)
  },

  updateDailyGoal: async () => {
    const { error } = await supabase
      .from('goals')
      .update({ goal: store.dailyGoal })
      .eq('userId', localStorage.getItem('userId'))
    console.log(error)
  }
});

export default store;