import CtaButton from "@/components/cta_button";
import Header from "@/components/header";
import { useAppState } from "@/modules/api/state";
import { useAppStyle } from "@/modules/utils/style";
import { Stack, useLocalSearchParams } from "expo-router";
import _ from 'lodash';
import { ScrollView, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

function TodoDetails () {
  const style = useAppStyle()
  const params = useLocalSearchParams<{
    id: string;
  }>();

  const appState = useAppState();

  // Default to -1 if params.id is null since we only generate positive number for id
  const todo = appState.getTodo(Number(params.id ?? -1));

  return (
    <View>
      <Stack.Screen
        options={{
          header: () => {
            return (
              <Header title="To Do Details"/>
            )
          }
        }}
      />
      <ScrollView
        style={[style.container, style.safeBottom]}
        contentContainerStyle={{ gap: 11, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {todo != null ? (
          <>
            <Text variant="titleMedium">{todo.content}</Text>
          </>) : (
            <Text variant="titleMedium">
              Sorry the Todo you are looking for could not be found
            </Text>
          )}
      </ScrollView>
    </View>
  );
}

export default TodoDetails
