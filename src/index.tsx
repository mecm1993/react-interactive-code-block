import * as React from 'react'
import styles from './styles.module.css'

interface CodeBlockProps {
  message: string,
  typing?: boolean,
  speed?: number,
  icon?: string,
  className?: string,
  style?: React.CSSProperties,
}

export const CodeBlock = (codeBlockProps: CodeBlockProps) => {
  const _message: string = codeBlockProps.message;
  const _typing: boolean = codeBlockProps.typing ? codeBlockProps.typing : false;
  const _speed: number = codeBlockProps.speed ? codeBlockProps.speed : 30;
  const text = useTyping(_message, _typing, _speed);

  return renderComponent(text, codeBlockProps.icon, codeBlockProps.className, codeBlockProps.style);
}

const useTyping = (message: string, isTyping: boolean, speed: number) => {
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    if (isTyping) {
      handleTyping(setText, message, text, speed);
    } else {
      setText(message);
    }
  }, [text]);

  return text;
}

const handleTyping = (setText: Function, message: string, text: string, speed: number) => {
  const timer = setTimeout(() => {
    setText(message.substring(0, text.length + 1));
  }, speed);
  return () => clearTimeout(timer);
}

const renderComponent = (text: string, icon?: string, className?: string, style?: React.CSSProperties) => {
  const _className: string = className ? className : '';
  const _style: React.CSSProperties = style ? style : {};
  return <div className={styles.block + ' ' + _className} style={_style}>
      {text}
      <div className={styles.actions}>
        <button
          className={styles.btn}
          onClick={() => onCopyPress(text)}
        >
          <img
            className={styles.img}
            src={icon ? icon : 'https://rb.gy/c9wi3z'}
          />
        </button>
      </div>
    </div>
}

const onCopyPress = (text: string) => {
  const textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
}
