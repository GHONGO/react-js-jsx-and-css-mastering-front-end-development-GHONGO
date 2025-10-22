const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const jsonPlaceholderAPI = {
  // Posts
  getPosts: () => fetch(`${BASE_URL}/posts`).then(res => res.json()),
  getPost: (id) => fetch(`${BASE_URL}/posts/${id}`).then(res => res.json()),
  
  // Users
  getUsers: () => fetch(`${BASE_URL}/users`).then(res => res.json()),
  getUser: (id) => fetch(`${BASE_URL}/users/${id}`).then(res => res.json()),
  
  // Comments
  getComments: () => fetch(`${BASE_URL}/comments`).then(res => res.json()),
  getPostComments: (postId) => fetch(`${BASE_URL}/posts/${postId}/comments`).then(res => res.json()),
  
  // Photos
  getPhotos: () => fetch(`${BASE_URL}/photos`).then(res => res.json()),
  getPhoto: (id) => fetch(`${BASE_URL}/photos/${id}`).then(res => res.json()),
};