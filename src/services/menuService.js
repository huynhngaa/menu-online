import api from './api';

export const menuService = {
  // Get all menu items
  getAllMenuItems: async () => {
    try {
      const response = await api.get('/menu');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get menu item by ID
  getMenuItemById: async (id) => {
    try {
      const response = await api.get(`/menu/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new menu item
  createMenuItem: async (menuData) => {
    try {
      const response = await api.post('/menu', menuData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update menu item
  updateMenuItem: async (id, menuData) => {
    try {
      const response = await api.put(`/menu/${id}`, menuData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete menu item
  deleteMenuItem: async (id) => {
    try {
      const response = await api.delete(`/menu/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}; 