import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import CodeBlock from "./CodeBlock";

const Markdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          return (
            <CodeBlock
              inline={inline}
              className={className}
              language={match ? match[1] : "jsx"}
            >
              {children}
            </CodeBlock>
          );
        },
      }}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
