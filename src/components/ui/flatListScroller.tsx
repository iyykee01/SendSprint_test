import React, { ReactElement, ReactNode } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControlProps,
  StyleProp,
  ViewStyle,
} from "react-native";

interface FlatListScrollerProps<T> {
  listHeader?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  refreshControl?: ReactElement<RefreshControlProps>;
  scrollEnabled?: boolean;
  fetchMoreData?: () => void;
  isLoadingMore?: boolean;
  data: T[];
  renderItem: ({ item }: { item: T }) => ReactElement | null;
}

export const FlatListScroller = <T,>(props: FlatListScrollerProps<T>) => (
  <FlatList
    refreshControl={props.refreshControl}
    showsVerticalScrollIndicator={false}
    data={props.data}
    keyExtractor={(_, index) => index.toString()}
    renderItem={props.renderItem}
    style={props.style}
    contentContainerStyle={props.contentContainerStyle}
    ListHeaderComponent={<>{props.listHeader}</>}
    scrollEnabled={props.scrollEnabled}
    onEndReached={props.fetchMoreData}
    onEndReachedThreshold={0.5}
    ListFooterComponent={
      props.isLoadingMore ? <ActivityIndicator size="small" /> : null
    }
  />
);
