import { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { createSite } from "@lib/db";

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const { register, handleSubmit, errors } = useForm();

  const onCreateSite = data => {
    console.log(data);
    createSite(data);
    onClose();
  };

  return (
    <>
      <Button fontWeight="medium" maxW="200px" onClick={onOpen}>
        Add Your First Site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                id="site-input"
                placeholder="My site"
                name="name"
                ref={register({
                  required: "Required",
                })}
              />
              {errors.name && <Text color="red.500">{errors.name.message}</Text>}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                id="link-input"
                placeholder="https://example.com"
                name="url"
                ref={register({
                  required: "Required",
                })}
              />
              {errors.url && <Text color="red.500">{errors.url.message}</Text>}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} fontWeight="bold" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" backgroundColor="#99FFFE" color="#194D4C" fontWeight="bold">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
