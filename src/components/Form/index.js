import React from 'react';
import PropTypes from 'prop-types';
import {gray} from '../../utils/colors';
import ButtonGroup from './ButtonGroup';
import Layout from '../Layout';
import {Input, SubTitle, Title} from '../styled';

/**
 * Form component
 * @component
 * @param {{title: string, inputCount: number}} props
 * @return {object} - The UI DOM object
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
const Form = ({title, inputs, buttons, subTitle, children}) => (
  <Layout>
    {title && <Title>{title}</Title>}
    {subTitle && <SubTitle>{subTitle}</SubTitle>}

    {inputs.map(({name}) => (
      <Input
        key={name}
        placeHolder={name}
        defaultValue={name}
        placeHolderTextColor={gray}
        autoCorrect={true}
      />
    ))}

    {buttons && <ButtonGroup buttons={buttons} />}

    {children}
  </Layout>
);

Form.propTypes = {
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
  title: PropTypes.string,
  /**
   * Form inputs
   */
  inputs: PropTypes.array,
};

Form.defaultProps = {
  buttons: [],
  children: <></>,
  subTitle: '',
  title: '',
  inputs: [],
};

// Form export
export default Form;
