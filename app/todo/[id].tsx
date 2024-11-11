import AppDivider from "@/components/app_divider";
import CtaButton from "@/components/cta_button";
import Header from "@/components/header";
import { useAppState } from "@/modules/api/state";
import { useAppStyle } from "@/modules/utils/style";
import { router, Stack, useLocalSearchParams } from "expo-router";
import _ from 'lodash';
import { Alert, ScrollView, View } from "react-native";
import { Appbar, Text, TextInput } from "react-native-paper";

function TodoDetails () {
  const style = useAppStyle()
  const params = useLocalSearchParams<{
    id: string;
  }>();
  const appState = useAppState();

  // Default to -1 if params.id is null since we only generate positive number for id
  const todo = appState.getTodo(Number(params.id));

  const onUpdateStatus = () => {
    if (todo != null) {
      const newStatus =  todo?.status === 'pending' ? 'inprogress' : 'completed'
      appState.updateTodo({
        ...todo,
        status: newStatus
      });
    }
  }

  const onEditTodo = () => {
    router.replace(`./upsert?id=${params.id}`);
  }

  const onDeleteTodo = () => {
    Alert.alert('Delete To Do', 'Are you sure you want to delete this To Do?', [
      {
        text: 'Yes',
        onPress: () => {
          if (appState.deleteTodo(Number(params.id))) {
            router.dismissAll();
          }
        },
      },
      {
        text: 'No',
        style: 'cancel',
      }
    ]);
  }

  return (
    <View style={style.container}>
      <Stack.Screen
        options={{
          header: () => {
            return (
              <Header title={todo?.title}>
                <Appbar.Action icon="pen" onPress={onEditTodo} />
                <Appbar.Action icon="delete" onPress={onDeleteTodo} />
              </Header>
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
            <Text variant="titleSmall">Status: {todo.status}</Text>
            <AppDivider />
            <Text variant="titleMedium">{todo.content}</Text>
            {todo?.status != 'completed' && (
              <CtaButton
                onPress={onUpdateStatus}
                style={{ marginTop: 6 }}
                >
                {`Mark as ${todo.status === 'pending' ? 'In Progress' : 'Completed'}`}
              </CtaButton>
            )}
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
