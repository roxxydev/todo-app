import CtaButton from "@/components/cta_button";
import Header from "@/components/header";
import { useAppState } from "@/modules/api/state";
import { useAppStyle } from "@/modules/utils/style";
import { generateId } from "@/modules/utils/utils";
import { router, Stack, useLocalSearchParams } from "expo-router";
import _ from 'lodash';
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";

function TodoCreate () {
  const style = useAppStyle()
  const params = useLocalSearchParams<{
    id?: string
  }>();

  const appState = useAppState();
  const existingTodo = params.id != null ? appState.getTodo(Number(params.id)) : undefined
  const [title, setTitle] = useState(existingTodo?.title ?? '');
  const [content, setContent] = useState(existingTodo?.content ?? '');

  const onSaveTodo = () => {
    if (params.id != null) {
      void appState.updateTodo({
        id: Number(params.id),
        title: _.trim(title),
        content: _.trim(content),
        status: 'pending'
      })
      router.navigate(`/todo/${params.id}`)
    } else {
      const newToDoId = generateId();
      void appState.createTodo({
        id: newToDoId,
        title: _.trim(title),
        content: _.trim(content),
        status: 'pending'
      })
      router.navigate(`/todo/${newToDoId}`)
    }
  }

  return (
    <View>
      <Stack.Screen
        options={{
          header: () => {
            const headerPrefix = params.id != null ? 'Update' : 'Create'
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
          placeholder="Title"
          value={title}
          multiline={false}
          maxLength={40}
          focusable
          autoFocus
          showSoftInputOnFocus
          onChangeText={(text) => {
            setTitle(text)
          }}
          style={{
            textAlignVertical: 'top',
          }}
        />
        <TextInput
          placeholder="Content"
          value={content}
          multiline={true}
          maxLength={400}
          focusable
          autoFocus
          showSoftInputOnFocus
          onChangeText={(text) => {
            setContent(text)
          }}
          style={{
            textAlignVertical: 'top',
            flex: 1,
            minHeight: 200,
            maxHeight: 200
          }}
        />
        <CtaButton
          disabled={_.isEmpty(title) || _.isEmpty(content)}
          onPress={onSaveTodo}
          style={{ marginBottom: 12 }}
        >
          {params.id != null ? 'UPDATE' : 'SAVE'}
        </CtaButton>
      </ScrollView>
    </View>
  );
}

export default TodoCreate
