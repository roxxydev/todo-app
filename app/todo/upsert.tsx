import CtaButton from "@/components/cta_button";
import Header from "@/components/header";
import { useAppState } from "@/modules/api/state";
import { useAppStyle } from "@/modules/utils/style";
import { generateId } from "@/modules/utils/utils";
import { Stack, useLocalSearchParams } from "expo-router";
import _ from 'lodash';
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";

function TodoCreate () {
  const style = useAppStyle()
  const params = useLocalSearchParams<{
    id: string
    data?: string
  }>();

  const appState = useAppState();
  const [todo, setTodo] = useState(params.data ?? '');

  const onSaveTodo = () => {
    void appState.createTodo({
      id: generateId(),
      content: todo,
      status: 'pending'
    })
  }

  return (
    <View>
      <Stack.Screen
        options={{
          header: () => {
            const headerPrefix = params.data != null ? 'Create' : 'Update'
            return (
              <Header title={`${headerPrefix} To Do`}/>
            )
          }
        }}
      />
      <ScrollView
        style={[style.container, style.safeBottom]}
        contentContainerStyle={{ gap: 11, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          value={todo}
          multiline={true}
          maxLength={400}
          focusable
          autoFocus
          showSoftInputOnFocus
          onChangeText={(text) => {
            setTodo(_.trim(text))
          }}
          style={{
            textAlignVertical: 'top',
            flex: 1,
            minHeight: 200,
            maxHeight: 200
          }}
        />
        <CtaButton
          disabled={_.isEmpty(todo)}
          onPress={onSaveTodo}
          style={{ marginBottom: 12 }}
        >
          {params.data != null ? 'UPDATE' : 'SAVE'}
        </CtaButton>
      </ScrollView>
    </View>
  );
}

export default TodoCreate
