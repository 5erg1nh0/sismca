import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;

}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Sergio Barbosa</Text>
                    <Text color="gray.300" fontSize="small">
                        sergio.alves@unasp.edu.br</Text>
                </Box>
            )}

            <Avatar size="md" nome="Sergio Barbosa" src="https://github.com/5erg1nh0.png" />

        </Flex>
    );
}