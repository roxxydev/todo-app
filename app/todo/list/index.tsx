import AppDivider from "@/components/app_divider";
import SearchBar from "@/components/search_bar";
import { useAppState } from "@/modules/api/state";
import { Todo } from "@/modules/api/types";
import { useAppStyle } from "@/modules/utils/style";
import { useRouter } from "expo-router";
import _ from 'lodash';
import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { List, useTheme } from "react-native-paper";
import { Skeleton } from "react-native-skeletons";

function TodoList () {
  const theme = useTheme();
  const router = useRouter();
  const style = useAppStyle();
  const appState = useAppState();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Todo[]>([]);

  const listItem = ({
    item,
    index
  }: {
    item: Todo,
    index: number
  }) => {
    return (
      <View key={index}>
        <List.Item
          description={item.content}
          title={item.id}
          onPress={() => {
            router.navigate(`./todo/${item.id}`)
          }}
        />
        <AppDivider />
      </View>
    )
  }

  return (
    <View>
      <SearchBar
        placeholder={'Search for To Do'}
        onChangeText={() => {
          setIsLoading(true);
          _.debounce((value: string) => {
            if (value.length >= 2) {
              setResult(appState.findTodo(value))
            } else {
              setResult([])
            }
            setIsLoading(false);
          }, 500)
        }}
        autoFocus
      />
      {
        (result != null && result.length) && isLoading ? (
          _.times(result.length, (index: number) => (
            <Skeleton
              key={index}
              count={1}
              width="30%"
              height={80}
              color={theme.colors.surfaceVariant}
            />
          ))
        ) : (
          <ScrollView
            contentContainerStyle={[{ gap: 12 }, style.container]}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
          >
            {!_.isEmpty(result) && (
              <FlatList
                style={style.container}
                keyboardShouldPersistTaps="always"
                keyboardDismissMode="on-drag"
                data={result}
                renderItem={listItem}
              />
            )}
          </ScrollView>
        )
      }
    </View>
  );
}

export default TodoList
