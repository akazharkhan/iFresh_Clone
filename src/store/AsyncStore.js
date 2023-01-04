// import AsyncStorage from '@react-native-async-storage/async-storage'
// const addToCart = async () => {
//     try {
//       await AsyncStorage.setItem("cart", JSON.stringify(value));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getUser = async () => {
//     try {
//       const savedUser = await AsyncStorage.getItem("user");
//       const currentUser = JSON.parse(savedUser);
//       console.log(currentUser);
//     } catch (error) {
//       console.log(error);
//     }
//   };    

//   const removeUser = async () => {
//     try {
//       await AsyncStorage.removeItem("user");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const mergeUser = async () => {
//     try {
//       await AsyncStorage.mergeItem("user", JSON.parse(value));
//     } catch (error) {
//       console.log(error);
//     }
//   };