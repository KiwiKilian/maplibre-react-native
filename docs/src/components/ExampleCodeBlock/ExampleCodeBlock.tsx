import CodeBlock from "@theme/CodeBlock";

type ExampleCodeBlockProps = { source: string };

export function ExampleCodeBlock({ source }: ExampleCodeBlockProps) {
  return <CodeBlock language="tsx">{source}</CodeBlock>;
}
