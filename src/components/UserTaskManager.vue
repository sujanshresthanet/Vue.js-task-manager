<template>
  <div class="container mt-5">
    <!-- Page Title with Username -->
    <h2 class="text-center">Your Tasks, {{ username }}</h2>

    <!-- Task Form -->
    <div class="row justify-content-center mb-4">
      <div class="col-md-6">
        <form @submit.prevent="addTask">
          <div class="mb-3">
            <input
              v-model="newTask"
              type="text"
              class="form-control"
              placeholder="Enter a new task"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Add Task</button>
        </form>
      </div>
    </div>

    <!-- Task List -->
    <div class="row justify-content-center">
      <div class="col-md-6">
        <ul class="list-group">
          <li
            v-for="(task, index) in tasks"
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <input
                v-model="task.text"
                type="text"
                class="form-control-plaintext"
                readonly
                :class="{ 'text-decoration-line-through': task.completed }"
              />
            </span>

            <div>
              <button
                class="btn btn-sm btn-warning me-2"
                @click="showEditModal(index)"
              >
                Edit
              </button>
              <button
                class="btn btn-sm btn-danger"
                @click="showDeleteModal(index)"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>

        <!-- Clear All Tasks Button -->
        <div class="mt-3">
          <button
            class="btn btn-danger w-100"
            @click="clearAllTasks"
            v-if="tasks.length > 0"
          >
            Clear All Tasks
          </button>
        </div>
      </div>
    </div>

    <!-- Edit Task Modal -->
    <div class="modal fade" id="editTaskModal" tabindex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editTaskModalLabel">Edit Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input
              v-model="currentTaskText"
              type="text"
              class="form-control"
              placeholder="Edit your task"
              required
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateTask">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Task Confirmation Modal -->
    <div class="modal fade" id="deleteTaskModal" tabindex="-1" aria-labelledby="deleteTaskModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteTaskModalLabel">Delete Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this task?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="confirmDeleteTask">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global bootstrap */ // Ensures Bootstrap's JavaScript functionality is available

export default {
  data() {
    return {
      newTask: '', // A data property bound to the input for a new task
      tasks: [],   // Array that stores all tasks (each task is an object with properties like text and completed)
      username: '', // Stores the logged-in user's name (fetched from localStorage)
      currentTaskIndex: null, // Stores the index of the task currently being edited
      currentTaskText: '', // Stores the text of the task currently being edited
    };
  },
  created() {
    // The `created` lifecycle hook runs when the component is first created
    // It fetches the username and loads the tasks for the user from localStorage
    this.username = localStorage.getItem('username') || 'User';
    this.loadTasks(); // Load tasks from localStorage
  },
  methods: {
    loadTasks() {
      // Loads tasks specific to the logged-in user from localStorage
      const storedTasks = localStorage.getItem(`tasks_${this.username}`);
      this.tasks = storedTasks ? JSON.parse(storedTasks) : []; // Parse tasks if available
    },
    addTask() {
      // Adds a new task to the list
      if (this.newTask.trim()) {
        // Only add the task if the input isn't empty or just whitespace
        this.tasks.push({ text: this.newTask, completed: false }); // Add a new task object to the tasks array
        this.newTask = ''; // Reset the input field after adding the task
        this.saveTasks(); // Save the updated task list to localStorage
      }
    },
    showEditModal(index) {
      // Opens the edit modal and sets the current task for editing
      this.currentTaskIndex = index; // Store the index of the task being edited
      this.currentTaskText = this.tasks[index].text; // Set the current task text
      const editModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
      editModal.show(); // Show the edit modal using Bootstrap's modal API
    },
    updateTask() {
      // Updates the edited task and saves the changes
      if (this.currentTaskText.trim()) {
        // Only update if the task text isn't empty or just whitespace
        this.tasks[this.currentTaskIndex].text = this.currentTaskText; // Update the task text
        this.saveTasks(); // Save the updated tasks to localStorage
        const editModal = bootstrap.Modal.getInstance(document.getElementById('editTaskModal'));
        editModal.hide(); // Close the edit modal
      }
    },
    showDeleteModal(index) {
      // Opens the delete confirmation modal
      this.currentTaskIndex = index; // Store the index of the task to be deleted
      const deleteModal = new bootstrap.Modal(document.getElementById('deleteTaskModal'));
      deleteModal.show(); // Show the delete confirmation modal
    },
    confirmDeleteTask() {
      // Deletes the selected task
      this.tasks.splice(this.currentTaskIndex, 1); // Remove the task at the stored index
      this.saveTasks(); // Save the updated task list to localStorage
      const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteTaskModal'));
      deleteModal.hide(); // Close the delete confirmation modal
    },
    clearAllTasks() {
      // Clears all tasks after confirmation
      if (confirm('Are you sure you want to clear all tasks?')) {
        this.tasks = []; // Clear the tasks array
        this.saveTasks(); // Save the updated empty task list to localStorage
      }
    },
    saveTasks() {
      // Save the tasks to localStorage under the user's specific key
      localStorage.setItem(`tasks_${this.username}`, JSON.stringify(this.tasks));
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
