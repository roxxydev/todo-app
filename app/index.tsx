import AppDivider from "@/components/app_divider";
import CtaButton from "@/components/cta_button";
import SearchBar from "@/components/search_bar";
import { useAppState } from "@/modules/api/state";
import { Todo } from "@/modules/api/types";
import { useAppStyle } from "@/modules/utils/style";
import { useRouter } from "expo-router";
import _ from 'lodash';
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { List, useTheme } from "react-native-paper";
import { Skeleton } from "react-native-skeletons";

export default function Main() {
  const theme = useTheme();
  const router = useRouter();
  const style = useAppStyle();
  const appState = useAppState();
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState<string | undefined>();
  const [result, setResult] = useState<Todo[]>(appState.todos);

  useEffect(() => {
    if (_.isEmpty(query)) {
      setResult(appState.todos);
    } else {
      setResult(appState.findTodo(query ?? ''));
    }
    setIsLoading(false);
  }, [query])

  const onCreateClick = () => {
    router.navigate('./todo/upsert')
  }

  const listItem = ({
    item,
    index
  }: {
    item: Todo,
    index: number
  }) => {
    if (item != null) {
      return (
        <View key={index}>
          <List.Item
            description={item.content}
            title={item.title}
            onPress={() => {
              router.navigate(`/todo/${item.id}`)
            }}
            style={{
              marginTop: 8
            }}
          />
          <AppDivider />
        </View>
      )
    }
    return null;
  }


  return (
    <View style={{flex: 1}}>
      <SearchBar
        placeholder={'Search for To Do'}
        onChangeText={(value) => {
          if (!_.isEmpty(value)) {
            setIsLoading(true);
          }
          (_.debounce(() => {
            setQuery(value.length >= 1 ? value : undefined)
          }, 250))()
        }}
        isLoading={isLoading}
        searchQuery={query}
        autoFocus
      />
      {
        isLoading === true ? (
          _.times(result.length, (index: number) => (
            <Skeleton
              key={index}
              count={1}
              height={80}
              color={theme.colors.surfaceVariant}
            />
          ))
        ) : (
          <FlatList
            style={style.container}
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            data={result}
            renderItem={listItem}
          />
        )
      }
      <CtaButton
        onPress={onCreateClick}
        style={[
          style.safeHorizontal,
          { marginBottom: style.safeBottom.marginBottom }
        ]}
      >
        CREATE
      </CtaButton>
    </View>
  );
}
