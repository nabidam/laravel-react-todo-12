import { useState } from "react";

interface ConfirmDialogOptions {
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive";
}

export function useConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmDialogOptions>({
    title: "",
    description: "",
  });
  const [onConfirmCallback, setOnConfirmCallback] = useState<() => void>(() => {});
  const [loading, setLoading] = useState(false);

  const confirm = (
    options: ConfirmDialogOptions,
    onConfirm: () => Promise<void> | void
  ) => {
    setOptions(options);
    setOnConfirmCallback(() => onConfirm);
    setIsOpen(true);
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirmCallback();
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    options,
    confirm,
    handleConfirm,
    loading,
  };
}