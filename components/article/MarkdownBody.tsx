import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MdNode = { type: string; value?: string; children?: MdNode[]; data?: Record<string, unknown> };

const MARKER_SPLIT = /(\[(?:VERIFY|ISI)\b[^\]]*\])/;

/** Plugin remark: bungkus [VERIFY ...] / [ISI: ...] dengan <mark class="todo"> agar mencolok di draf. */
function remarkTodoMarkers() {
  const walk = (node: MdNode) => {
    if (!node.children) return;
    node.children = node.children.flatMap((child) => {
      if (child.type !== "text" || !MARKER_SPLIT.test(child.value!)) {
        walk(child);
        return [child];
      }
      return child
        .value!.split(MARKER_SPLIT)
        .filter(Boolean)
        .map((part): MdNode =>
          MARKER_SPLIT.test(part)
            ? {
                type: "todoMarker",
                data: { hName: "mark", hProperties: { className: ["todo"] } },
                children: [{ type: "text", value: part }],
              }
            : { type: "text", value: part },
        );
    });
  };
  return (tree: MdNode) => walk(tree);
}

export default function MarkdownBody({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkTodoMarkers]}
      components={{
        a: ({ href, children, ...props }) => {
          const isExternal = href?.startsWith("http://") || href?.startsWith("https://");
          return (
            <a
              href={href}
              {...props}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {children}
            </a>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
