# To Do App 👋

This is a ToDo mobile app created with [Expo](https://expo.dev) via [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Or simply run

```bash
yarn ios
```

## Reasons behind choosing the libraries used in this project

- <h4>State Management</h4>
  For the state management we used [zustand](https://zustand-demo.pmnd.rs/) since it is a lightweight library which has easy-to-use API and provides sychronous updates, unlike Redux’s centralized store. It also reduces boilerplate code showing simplicity and user-friendliness.

- <h4>Performance and Optimization</h4>
  I've also integrated the persistence of data through zustand middleware which for the persistence storage I used the [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) as it offers a super fast key value storage as benchmaked with other storage libraries in react-native. Though the drawback of implementing it is you'll have to prebuild it if you are using expo which in my case I used expo in the project since the react native community recommended framework for React Native is Expo which is seen in the latest react native [documentation](https://reactnative.dev/docs/environment-setup).
  In terms of UI I have used react-native-paper it follows material design and since I don't need to custom much of the UI I want so I prefer using this over other react-native UI libraries. It is also easy to customize and their documentation is great and easy to navigate through if you want to check a specific component you want to style or customize.
  I've also considered and added [react-native-skeletons](https://github.com/kyawthura-gg/react-native-skeletons) just to show any shimmer effect when we're loading any data. The good thing with this library is that it doesn't have any native implementation and has zero dependencies. If in the future there will be api, this can be use in other components/screens as well along with [swr](https://swr.vercel.app/) for data fetching.

- <h4>Code Structure</h4>
  For the structure, we just follow the straightforward "atomic design" but in our case retain the screens/pages on how expo interpret the paths e.g. [todo].tsx. This approach makes it easier to navigate to certain domains in app like if I want to look for something related to "todo" then I'll just navigate through the folder of todo or say if I want to look for "profile" (which we can add in the future 🙂) then again I'll just look for the folder "profile". Also under "components" we have those reusable components/ui elements that we can use in other screens as well. While under "modules" are where I put those app specific logic like managing states, utility function which for now is just todo id generator, and related styling constants.
