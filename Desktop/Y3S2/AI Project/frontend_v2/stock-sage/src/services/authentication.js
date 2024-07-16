// const API_URL = "http://localhost:3000/api"; // Adjust the port as needed

// export const register = async (username, email, password) => {
//   try {
//     const response = await fetch(`${API_URL}/auth/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, email, password }),
//     });
//     if (!response.ok) throw new Error("Registration failed");
//     return await response.json();
//   } catch (error) {
//     console.error("Registration error:", error);
//     throw error;
//   }
// };

// export const login = async (username, password) => {
//   try {
//     const response = await fetch(`${API_URL}/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });
//     if (!response.ok) throw new Error("Login failed");
//     const data = await response.json();
//     if (data.token) {
//       localStorage.setItem("user", JSON.stringify(data));
//     }
//     return data;
//   } catch (error) {
//     console.error("Login error:", error);
//     throw error;
//   }
// };

// export const logout = () => {
//   localStorage.removeItem("user");
// };

// export const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

// export const isLoggedIn = () => {
//   const user = getCurrentUser();
//   return !!user && !!user.token;
// };

// export const getToken = () => {
//   const user = getCurrentUser();
//   return user?.token;
// };
