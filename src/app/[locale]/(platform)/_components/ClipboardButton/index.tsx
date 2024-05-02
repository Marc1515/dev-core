import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ClipboardJS from "clipboard";
import { toast } from "sonner";
import { FaCopy } from "react-icons/fa";

interface ClipboardButtonProps {
  textToCopy: string;
}

const ClipboardButton = ({ textToCopy }: ClipboardButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const clipboard = new ClipboardJS(buttonRef.current, {
      text: () => textToCopy,
    });

    return () => {
      clipboard.destroy();
    };
  }, [textToCopy]);

  return (
    <Button
      className="text-xl p-0 h-0 mt-6 mr-4 text-foreground dark:text-foreground"
      onClick={() => toast.success("Copied!")}
      ref={buttonRef}
    >
      <FaCopy />
    </Button>
  );
};

export default ClipboardButton;
