"use client";

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/libs/utils";
import { X } from "lucide-react";
import { ModalContent } from "./ModalContent";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

export default function Modal({
  children,
  open,
  onClose,
  className,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      modalRef.current?.focus(); // Ensure the modal gets focus.

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
        previouslyFocusedElement.current?.focus(); // Restore focus.
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div
            ref={modalRef}
            tabIndex={-1} // Make the modal focusable.
            className={cn(
              "relative w-full max-w-xl bg-zinc-800/80 backdrop-blur-xl",
              "rounded-3xl shadow-xl border border-gray-700/50",
              "transform transition-all duration-200",
              "animate-in fade-in zoom-in-95",
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className={cn(
                "absolute right-4 top-4 p-2 rounded-full",
                "text-gray-400 hover:text-gray-200",
                "bg-gray-700/50 hover:bg-gray-600/50",
                "transition-colors"
              )}
            >
              <X className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </button>

            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
