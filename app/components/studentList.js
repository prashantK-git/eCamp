import React, { Component } from "react";
import { View, Text, Image, FlatList,StyleSheet, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
      console.log(JSON.stringify(this.state.data));
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style = {styles.imageDataContainer}>
              <View style={styles.imageContainer}>
               <Image source={{uri: item.picture.medium}} style={styles.image}/>
              </View>
              <View style={styles.dataContainer}>
               <Text> Name:{`${item.name.first} ${item.name.last}`}</Text>
               <Text> Gender:{`${item.gender}`}</Text>
               <Text> Street:{`${item.location.street}`}</Text>
               <Text> City: {`${item.location.city}`}</Text>
               <Text> Email: {`${item.email}`}</Text>
               <Text>{`${item.location.coordinates.latitude} ${item.location.coordinates.longitude}`}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </List>
    );
  }
}
const styles = StyleSheet.create({
  imageDataContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#55E6C1',
    alignItems:'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  dataContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
   width: 150,
   height: 150,
   borderWidth: 1,
   borderColor: 'grey'
 },
});

export default StudentList;
