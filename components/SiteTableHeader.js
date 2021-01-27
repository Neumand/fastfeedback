import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading } from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";

const SiteTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink color="gray.700">Sites</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={4} color="black">
        My Sites
      </Heading>
      <AddSiteModal>+ Add Site</AddSiteModal>
    </Flex>
  </>
);

export default SiteTableHeader;
