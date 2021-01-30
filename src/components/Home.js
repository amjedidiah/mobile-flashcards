import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';
import {SubTitle, Title} from './styled';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getDecks} from '../redux/selectors';
import Form from './Form';

/**
 * @component
 * @example
 * return <Home />
 */
class Home extends Component {
  static propTypes = {
    decks: PropTypes.array,
    navigation: PropTypes.object,
  };

  static defaultProps = {
    decks: [],
    navigation: {},
  };

  /**
   * Renders the FlatList items
   * @param {{item: object}} param0
   * @return {object}
   */
  renderItem = ({item, index}) => (
    <TouchableOpacity
      key={item?.title}
      onPress={() => this.toDeck(item?.title)}
    >
      <Title>{item?.title}</Title>
      <SubTitle>
        {(item?.questions || []).length}
        <Text> cards</Text>
      </SubTitle>
    </TouchableOpacity>
  );

  /**
   * Goes to a deck
   * @param {string} title
   * @return {Promise}
   */
  toDeck = (title) => this.props.navigation.navigate('Deck', {title});

  /**
   * Renders Home UI
   * @return {object} - The UI DOM object
   */
  render = () => {
    return this.props.decks.length > 0 ? (
      <FlatList
        data={this.props.decks}
        renderItem={this.renderItem}
        keyExtractor={({title}) => title}
      />
    ) : (
      <Form
        title="No Decks Yet"
        buttons={[
          {
            value: 'Add a deck',
            submit: () => this.props.navigation.navigate('Add Deck'),
          },
        ]}
      />
    );
  };
}

const mapStateToProps = ({decks}) => ({decks: getDecks(decks)});

export default connect(mapStateToProps)(Home);
