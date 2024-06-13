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
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

interface Props {
  inline?: any;
  className?: any;
  children: any;
  language: string;
}

const CodeBlock: React.FC<Props> = ({ inline, className, language, children, ...rest }) => {
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
    <>
      {/* Top bar with rounded top left and right corners */}
      <div className="bg-zinc-600 bg-opacity-40 text-white p-4 rounded-t-2xl flex justify-between overflow-auto mt-2 relative w-full">
        {/* Copy button */}
        <p className="text-gray-300 text-sm">
          {language}
        </p>
        <CopyToClipboard text={String(children).replace(/\n$/, "")}>
          <button className="flex items-center space-x-2 text-gray-300 text-sm hover:text-white" onClick={onCopy}>
            <Copy className="mr-2 w-4 h-4" />
            {copied ? "copied!" : "copy"}
          </button>
        </CopyToClipboard>
      </div>
      {/* Code block */}
      <Highlight
        code={String(children).replace(/\n$/, "")}
        language={language === "tsx" ? "jsx" : language}
        prism={Prism}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className="p-4 rounded-b-2xl border border-t-0 border-zinc-700 bg-zinc-800 bg-opacity-30 border-opacity-40" {...rest}>
            {tokens?.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="text-gray-300 opacity-60 select-none pr-4 min-w-12 inline-block">{i + 1}</span>
                {line?.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};

export default CodeBlock;
