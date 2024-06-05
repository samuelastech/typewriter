import { useEffect, useRef, useState } from "react";
import { renderToString } from 'react-dom/server';
import parse from 'html-react-parser';

interface TypingTextProps {
  className?: string;
  children?: React.ReactNode;
  cursorColor?: string;
  elementType?: React.ElementType;
}

export const TypingText = ({ children, className = '', cursorColor = 'black', elementType = 'h1' }: TypingTextProps) => {
  const Element = elementType;
  const [text, setText] = useState<string>(renderToString(children));
  const [display, setDisplay] = useState<string>('');
  const typingRef = useRef<number>(0);
  const elementRef = useRef<HTMLHeadingElement>(null);

  const type = () => {
    setTimeout(() => {
      const textChar = text.charAt(typingRef.current);
      setDisplay((prev) => `${prev}${textChar}`);
      typingRef.current++;
      if (typingRef.current === text.length + 1) {
        setText('');
      }
    }, 100);
  }

  useEffect(() => {
    type();
    elementRef.current?.style.setProperty('--blink-color', cursorColor);
  }, [display]);

  return (
    <>
      <Element className={`after:content-['|'] after:font-normal after:animate-blink after:pl-1 ${className}`} ref={elementRef}>
        {parse(display)}
      </Element>
    </>
  );
};
