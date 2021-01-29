import React from 'react';
import {FlatList, View} from 'react-native';
import Layout from './Layout';
import {SubTitle, Title} from './styled';

const DATA = [
  {
    subTitle: '10 cards',
    title: 'Deck 1',
  },
  {
    subTitle: '10 cards',
    title: 'Deck 2',
  },
  {
    subTitle: '10 cards',
    title: 'Deck 3',
  },
];

const renderItem = ({item}) => (
  <View>
    <Title>{item.title}</Title>
    <SubTitle>{item.subTitle}</SubTitle>
  </View>
);

const Home = () => (
  <Layout>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={({title}) => title}
    />
  </Layout>
);

export default Home;
