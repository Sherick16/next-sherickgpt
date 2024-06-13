import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/libs/utils";
import { Cross2Icon } from "@radix-ui/react-icons";

const Modal = ({
  children,
  open,
  onClose,
  className,
  ...props
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <>
      {isOpen && (
        <>
          <div
            className={cn(
              "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 animate-fade",
              className
            )}
            onClick={onClose}
            {...props}
          >
            <div
              className="relative w-full max-w-3xl p-8 bg-gray-600 bg-opacity-20 backdrop-blur-xl rounded-xl drop-shadow-lg animate-zoom border border-gray-400 border-opacity-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute z-50 top-8 right-8 cursor-pointer hover:bg-gray-700 rounded-4xl p-2 transition-all"
                onClick={onClose}
              >
                <Cross2Icon className="w-6 h-6 text-gray-300" />
              </div>
              {children}
            </div>
          </div>
        </>

      )}
    </>
  );
}

export default Modal;