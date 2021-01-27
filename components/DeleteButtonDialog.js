import React from "react";
import {
  Button,
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { mutate } from "swr";

import { deleteFeedback } from "@lib/db";
import { useAuth } from "@lib/auth";

function DeleteButtonDialog({ id }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const { user } = useAuth();

  const onDeleteFeedback = () => {
    deleteFeedback(id);
    mutate(["/api/feedback", user.token], async data => {
      return {
        feedback: data.feedback.filter(fb => fb.id !== id),
      };
    });
    onClose();
  };

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Delete Feedback"
        icon={<DeleteIcon />}
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDeleteFeedback} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default DeleteButtonDialog;
