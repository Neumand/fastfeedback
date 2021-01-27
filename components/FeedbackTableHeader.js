import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading } from "@chakra-ui/react";

const FeedbackTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink color="gray.700">Feedback</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={4} color="black">
        My Feedback
      </Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
