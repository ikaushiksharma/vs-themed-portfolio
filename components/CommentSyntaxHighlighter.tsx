// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
type Props = {
  children: React.ReactNode;
  responsiveContent: string;
};

const CommentSyntaxHighlighter = ({ children, responsiveContent }: Props) => {
  const customTheme = {
    background: 'transparent',
    // fontSize: "18px",
    // margin: 0,
  };
  return (
    <article data-aos="fade-left">
      <span className="hidden lg:block">
        <SyntaxHighlighter
          language="javascript"
          style={atelierLakesideDark}
          customStyle={customTheme}
          showLineNumbers
        >
          {children}
        </SyntaxHighlighter>
      </span>

      <p
        className="md:hidden mb-3 w-full text-left px-5"
        dangerouslySetInnerHTML={{ __html: responsiveContent }}
      ></p>
    </article>
  );
};

export default CommentSyntaxHighlighter;
