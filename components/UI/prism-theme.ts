import { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    color: "#e2e8f0",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#64748b",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#a5d6ff",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#e2e8f0",
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: "#f97316",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#c084fc",
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#c084fc",
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#7dd3fc",
      },
    },
  ],
};

export default theme;
