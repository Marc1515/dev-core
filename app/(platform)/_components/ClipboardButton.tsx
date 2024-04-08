import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ClipboardJS from "clipboard";
import { toast } from "sonner";

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
    <Button onClick={() => toast.success("Copied!")} ref={buttonRef}>
      Copiar
    </Button>
  );
};

export default ClipboardButton;
