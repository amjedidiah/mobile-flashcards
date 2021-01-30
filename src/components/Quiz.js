// Module imports
import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getDeck, getDeckCardsCount} from '../redux/selectors';
import {green, purple, red} from '../utils/colors';
import Form from './Form';
import {InfoText} from './styled';
import {saveDeckScore, saveDeckProgress} from '../redux/actions/decks';

/**
 * @component
 * @constructor
 */
class Quiz extends Component {
  state = {
    subTitle: '',
    done: false,
    answerIsShown: false,
  };

  static propTypes = {
    deck: PropTypes.object,
    deckCardsCount: PropTypes.number,
    navigation: PropTypes.object,
    route: PropTypes.object,
    saveDeckScore: PropTypes.func,
    saveDeckProgress: PropTypes.func,
  };

  static defaultProps = {
    deck: {},
    deckCardsCount: 0,
    navigation: {},
    route: {},
    saveDeckScore: () => {},
    saveDeckProgress: () => {},
  };

  /**
   * moveOn on button click
   * @param {boolean} ifCorrect
   */
  moveOn = (ifCorrect) => {
    const {current, score, title} = this.props.deck;
    const newCurrent = current + 1;
    const newScore = score + 1;

    this.props.saveDeckProgress(
        title,
        newCurrent,
      ifCorrect === true ? newScore : score,
    );

    if (newCurrent >= this.props.deckCardsCount) {
      // Show score
      console.log('Quiz e have end');
      this.setState({
        done: true,
        subTitle: `out of ${(this.props.deck?.questions || []).length}`,
      });
    } else {
      // Continue quiz
      this.props.navigation.push('Quiz', {
        title,
        newCurrent,
      });
    }
  };

  componentDidMount = () => {
    if (
      this.props.deck?.current === (this.props.deck?.questions || []).length &&
      this.state.done === false
    ) {
      this.setState({
        done: true,
        subTitle: `out of ${(this.props.deck?.questions || []).length}`,
      });
    }
  };

  render = () => {
    const {deck, deckCardsCount, navigation, route} = this.props;
    const {subTitle, done, ifAnswerIsShown} = this.state;

    const {current, score} = deck;

    const title = ifAnswerIsShown ?
      deck?.questions[current]?.answer :
      deck?.questions[current]?.question;

    return deckCardsCount > 0 ? (
      <Form
        title={done ? score : title}
        buttons={
          done ?
            [
              {
                value: 'Reset Quiz',
                submit: () =>
                  this.setState(
                      () => ({done: false}),
                      () =>
                        this.props.saveDeckProgress(route.params.title, 0, 0),
                  ),
              },
              {
                value: 'Back to Deck',
                submit: () =>
                  navigation.navigate('Deck', {title: route.params.title}),
              },
            ] :
            [
              {
                value: ifAnswerIsShown ? 'Question' : 'Answer',
                style: purple,
                submit: () =>
                  this.setState((state) => ({
                    ifAnswerIsShown: !state.ifAnswerIsShown,
                  })),
              },
              {
                value: 'Correct',
                style: green,
                submit: () => this.moveOn(true),
              },
              {
                value: 'Incorrect',
                style: red,
                submit: this.moveOn,
              },
            ]
        }
        subTitle={subTitle}
      >
        <InfoText>
          {!done && <Text>{`${current + 1} / ${deckCardsCount}`}</Text>}
        </InfoText>
      </Form>
    ) : (
      <Form
        subTitle="Sorry, you cannot take a
      quiz because there are no cards in the deck"
      />
    );
  };
}

const mapStateToProps = ({decks}, {route}) => ({
  deck: getDeck(decks, route?.params?.title),
  deckCardsCount: getDeckCardsCount(decks, route?.params?.title),
});

export default connect(mapStateToProps, {saveDeckScore, saveDeckProgress})(
    Quiz,
);
