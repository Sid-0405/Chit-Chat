import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react"; // Updated import from `@chakra-ui/layout` to `@chakra-ui/react` to match Chakra UI v2

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Box
      px={3}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="purple"
      color="white"
      cursor="pointer"
      display="flex"
      alignItems="center"
      onClick={handleFunction}
      _hover={{ bg: "purple.100" }} // Optional: hover effect for better UI
    >
      {user.name}
      {admin === user._id && <span> (Admin)</span>}
      <CloseIcon pl={2} aria-label="Remove user" />
    </Box>
  );
};

export default UserBadgeItem;
