import React, { useState } from "react";
import { Highlight } from "prism-react-renderer";
import Prism from "prismjs";

// import every language
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-diff";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-git";
import "prismjs/components/prism-go";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-java";
import "prismjs/components/prism-json";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-tomorrow.css";
import { Copy, Check } from "lucide-react";
import { cn } from "@/libs/utils";
import theme from "./prism-theme";

interface Props {
  inline?: any;
  className?: any;
  children: any;
  language: string;
}

const CodeBlock: React.FC<Props> = ({
  inline,
  className,
  language,
  children,
  ...rest
}) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  if (inline) {
    return (
      // Small inline code block, that should be used in a sentence
      <code className="bg-stone-800 text-white p-1 rounded" {...rest}>
        {children}
      </code>
    );
  }

  return (
    <div className="group relative mt-4">
      <div className="absolute right-4 top-4 z-10">
        <button
          onClick={onCopy}
          className={cn(
            "flex items-center space-x-1 rounded-md px-2 py-1 text-xs",
            "bg-gray-700/50 text-gray-300 transition-colors",
            "hover:bg-gray-600/50 hover:text-gray-200"
          )}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <Highlight
        code={children.trim()}
        language={language === "tsx" ? "jsx" : language}
        theme={theme}
        prism={Prism as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              "overflow-x-auto rounded-3xl p-4 text-sm leading-6",
              "bg-gray-800/80 backdrop-blur-xl",
              "border border-gray-700/50",
              className
            )}
            style={style}
          >
            <code className="inline-block min-w-full">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="mr-4 inline-block w-4 text-right text-gray-500 select-none">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
