import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {gray} from '../../utils/colors';
import ButtonGroup from './ButtonGroup';
import Layout from '../Layout';
import {Input, SubTitle, Title} from '../styled';

/**
 * Form component
 * @component
 * @constructor
 * @example
 * const subTitle = ''
 * const title = ''
 * const inputs = []
 * const buttons = []
 *
 * return <Form
 *          subTitle={subTitle}
 *          title={title}
 *          inputs={inputs}
 *          buttons={buttons}
 *        ><Text>hello</Text></Form>
 */
class Form extends Component {
  state = {};

  static propTypes = {
    /**
     * Form buttons
     */
    buttons: PropTypes.array,
    /**
     * Form children
     */
    children: PropTypes.element,
    /**
     * Form subTitle
     */
    subTitle: PropTypes.string,
    /**
     * Form title
     */
    title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Form inputs
     */
    inputs: PropTypes.array,
  };

  static defaultProps = {
    buttons: [],
    children: <></>,
    subTitle: '',
    title: '',
    inputs: [],
  };

  componentDidMount = () => {
    const state = {};

    for (let i = 0; i < this.props.inputs.length; i++) {
      const input = this.props.inputs[i];

      state[input.name] = input.name;
    }

    this.setState(state);
  };

  render = () => {
    const {title, inputs, buttons, subTitle, children} = this.props;

    return (
      <Layout>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>

        {inputs.map(({name}) => (
          <Input
            key={name}
            placeHolder={name}
            placeHolderTextColor={gray}
            autoCorrect={true}
            value={this.state[name]}
            onChangeText={(text) =>
              this.setState((state) => ({...state, [name]: text}))
            }
          />
        ))}

        {buttons && <ButtonGroup inputs={this.state} buttons={buttons} />}

        {children}
      </Layout>
    );
  };
}

// Form export
export default Form;
