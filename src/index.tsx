import * as React from 'react'
import styles from './styles.module.css'

interface CodeBlockProps {
  message: string,
  typing?: boolean,
  speed?: number,
  className?: string,
  style?: React.CSSProperties,
}

export const CodeBlock = (codeBlockProps: CodeBlockProps) => {
  const [text, setText] = React.useState('');
  const fullText: string = codeBlockProps.message;
  const speed: number = codeBlockProps.speed ? codeBlockProps.speed : 30;

  React.useEffect(() => {
    if (codeBlockProps.typing) {
      handleTyping(setText, fullText, text, speed);
    } else {
      setText(fullText);
    }
  }, [text]);

  return getHtml(text, codeBlockProps.className, codeBlockProps.style);
}

const getHtml = (text: string, className?: string, style?: React.CSSProperties) => {
  const _className: string = className ? className : '';
  const _style: React.CSSProperties = style ? style : {};
  return <div className={styles.block + ' ' + _className} style={_style}>
      {text}
    </div>
}

const handleTyping = (setText: Function, message: string, text: string, speed: number) => {
  const timer = setTimeout(() => {
    setText(message.substring(0, text.length + 1));
  }, speed);
  return () => clearTimeout(timer);
}