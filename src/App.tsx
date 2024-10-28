import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Relative imports
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import BookshelfScreen from './screens/BookshelfScreen';
import {StackParamList} from './types';
import useBookshelves from './store';

// Create a client
const queryClient = new QueryClient();

// Stack navigator
const Stack = createStackNavigator<StackParamList>();

const App = () => {
  const {loadFromStorage} = useBookshelves();

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="Bookshelves" component={BookshelfScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
