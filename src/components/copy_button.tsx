import React from "react";
import { Button, Tooltip } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export function CopyButtonComponent({ text }: { text: string }) {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <Tooltip className="z-[999999]" content={copied ? "Copied" : "Copy"}>
      <Button
        placeholder="copy button"
        onMouseLeave={() => setCopied(false)}
        onClick={() => {
          copy(text);
          setCopied(true);
        }}
        className="flex items-center gap-x-3 px-2 py-2.5 lowercase bg-transparent hover:bg-gray-100 !shadow-none"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-blue-gray-500" />
        ) : (
          <DocumentDuplicateIcon className="h-4 w-4 text-blue-gray-500" />
        )}
      </Button>
    </Tooltip>
  );
}
