import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
            
            >
            

            <Stack spacing="12" align="flex-start">
                {/* Section */}
                <NavSection title="GERAL">
                  
                       

                        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>

                  

                    <NavLink icon={RiContactsLine} href="/users">Chart</NavLink>
                </NavSection>
                {/* and Section */}

                {/* Section */}
                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
                    <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
                </NavSection>
                {/* and Section */}

            </Stack>
        </Box>
    );
}