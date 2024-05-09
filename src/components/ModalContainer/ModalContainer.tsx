import {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import useModalHandler from "../../hooks/useModalHandler";
import { StyledModalContainerBackdrop } from "./ModalContainer.styled";
import { createPortal } from "react-dom";
import { containerVariants } from "../../helpers/componentsData";

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer: FC<ModalContainerProps> = ({ children }) => {
  const element = useMemo(() => document.createElement("div"), []);
  const modalRootElementRef = useRef<HTMLElement>(
    document.getElementById("ModalRoot")
  );
  const { handleCloseModal, openModal } = useModalHandler();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && openModal) {
        handleCloseModal();
      }
    },
    [openModal, handleCloseModal]
  );

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    const currentModalRootElement = modalRootElementRef.current;
    if (!currentModalRootElement) return;

    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    currentModalRootElement.appendChild(element);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (!currentModalRootElement) return;
      currentModalRootElement.removeChild(element);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element, handleKeyDown, openModal]);

  return createPortal(
    <AnimatePresence>
      {openModal && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <StyledModalContainerBackdrop onClick={handleBackdropClick}>
            {children}
          </StyledModalContainerBackdrop>
        </motion.div>
      )}
    </AnimatePresence>,
    element
  );
};

export default ModalContainer;
