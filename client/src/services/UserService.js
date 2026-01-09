import axios from 'axios';

// Replace this with your backend URL
const BASE_URL = 'http://localhost:8000/api/users';

const API = axios.create({
  baseURL: BASE_URL,
});

// Fetch users
export const fetchUsers = () => API.get('/');

// Create user
export const createUser = (user) => API.post('/', user);

// Update user
export const updateUser = (id, user) => API.put(`/${id}`, user);

// Delete user
export const deleteUser = (id) => API.delete(`/${id}`);

// Login user
export const loginUser = (credentials) => API.post('/login', credentials);
