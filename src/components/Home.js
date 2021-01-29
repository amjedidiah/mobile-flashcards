import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';
import {SubTitle, Title} from './styled';
import {TouchableOpacity} from 'react-native-gesture-handler';

/**
 * @component
 * @example
 * return <Home />
 */
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: {},
  };

  DATA = [
    {
      questions: [],
      title: 'Deck 1',
    },
    {
      questions: [],
      title: 'Deck 2',
    },
    {
      questions: [],
      title: 'Deck 3',
    },
    {
      questions: [],
      title: 'Deck 4',
    },
    {
      questions: [],
      title: 'Deck 5',
    },
    {
      questions: [],
      title: 'Deck 6',
    },
    {
      questions: [],
      title: 'Deck 7',
    },
    {
      questions: [],
      title: 'Deck 8',
    },
    {
      questions: [],
      title: 'Deck 9',
    },
  ];

  /**
   * Renders the FlatList items
   * @param {{item: object}} param0
   * @return {object}
   */
  renderItem = ({item, index}) => (
    <TouchableOpacity onPress={() => this.toDeck(item?.title)}>
      <Title>{item?.title}</Title>
      <SubTitle>
        {(item?.questions || []).length}<Text>{' '}cards</Text>
      </SubTitle>
    </TouchableOpacity>
  );

  /**
   * Goes to a deck
   * @param {string} title
   * @return {Promise}
   */
  toDeck = (title) => this.props.navigation.navigate('Deck', {title})

  /**
   * Renders Home UI
   * @return {object} - The UI DOM object
   */
  render = () => (
    <FlatList
      data={this.DATA}
      renderItem={this.renderItem}
      keyExtractor={({title}) => title}
    />
  );
}

export default Home;
