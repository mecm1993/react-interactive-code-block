import * as React from 'react';
import { create } from 'react-test-renderer';
import { CodeBlock } from '.';

describe('CodeBlock Component', () => {
  test('Matches the snapshot', () => {
    const component = create(<CodeBlock message="This is a test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("It shows the expected message", () => {
    const component = create(<CodeBlock message="This is a test" />);
    const instance = component.root;
    expect(instance.props.message).toBe("This is a test");
  });

  test("It should be equal the expected typing", () => {
    const component = create(<CodeBlock message="This is a test" typing />);
    const instance = component.root;
    expect(instance.props.typing).toBe(true);
  });

  test("It should be equal to expected speed", () => {
    const component = create(<CodeBlock message="This is a test" speed={30} />);
    const instance = component.root;
    expect(instance.props.speed).toBe(30);
  });

  test("It should be equal to expected className", () => {
    const component = create(<CodeBlock message="This is a test" className="this-is-a-class" />);
    const instance = component.root;
    expect(instance.props.className).toBe("this-is-a-class");
  });

  test("It should be strict equal to expected CSS property", () => {
    const component = create(<CodeBlock message="This is a test" style={{ color: 'red' }} />);
    const instance = component.root;
    expect(instance.props.style).toStrictEqual({color: 'red'});
  });

});
