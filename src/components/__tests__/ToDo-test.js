import 'react-native';
import React from 'react';
import Todo from '../Todo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Todo id={1} body={"This is a test"} complete={false} created={"2018-06-05T17:51:09.000+0000"} />).toJSON();

    expect(tree).toMatchSnapshot();
});
