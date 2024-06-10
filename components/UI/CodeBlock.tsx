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
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { cn } from "@/libs/utils";

interface Props {
  inline?: any;
  className?: any;
  children: any;
  language: string;
}

const CodeBlock: React.FC<Props> = ({ inline, className, language, children, ...rest }) => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(true);

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
    <div
      className="bg-zinc-700 bg-opacity-40 text-white p-4 rounded-xl w-full overflow-auto my-2 relative w-full"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" onClick={() => setOpen(!open)} />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" onClick={() => setOpen(!open)} />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" onClick={() => setOpen(true)} />
        </div>
        <CopyToClipboard text={String(children).replace(/\n$/, "")}>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white" onClick={onCopy}>
            <ClipboardCopyIcon className="mr-2" />
            {copied ? "copied!" : "copy"}
            &nbsp;-&nbsp;{language}
          </button>
        </CopyToClipboard>
      </div>
      {/* @ts-ignore */}
      <Highlight
        code={String(children).replace(/\n$/, "")}
        language={language === "tsx" ? "jsx" : language}
        prism={Prism}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className={cn('p-4 rounded-xl', open ? "visible" : "invisible h-0 overflow-hidden p-0 px-4")} {...rest}>
            {tokens?.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line?.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
