import { useState, useContext } from 'react';
import {
    Image, Navbar, Center, Tooltip, UnstyledButton,
    createStyles, Stack, ActionIcon,
    useMantineColorScheme
} from '@mantine/core';
import {
    TablerIcon,
    IconHome2,
    IconCalendarStats,
    IconUser,
    IconLogout,
    IconSwitchHorizontal,
    IconSun,
    IconMoonStars
} from '@tabler/icons';

import { useRouter } from "next/router";
import { AuthContext } from '../contexts/AuthContext';

const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionDuration={0}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Icon stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    { icon: IconHome2, label: 'home' },
    { icon: IconCalendarStats, label: 'project' },
    { icon: IconUser, label: 'account' },
];


export function NavbarMinimal() {
    const [active, setActive] = useState(0);
    const router = useRouter()
    const { logout }: any = useContext(AuthContext)

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const switchPage = (pageName: string) => {
        if (pageName === "home") {
            router.replace("/")
        } else {
            router.replace(pageName)
        }
    }

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => { setActive(index), switchPage(link.label) }}
        />
    ));

    const handleLogout = () => {
        logout()
            .then(() => {
                router.replace("/login")
            })
            .catch((err: any) => {
                console.log(err.message)
            })
    }

    return (
        <Navbar height={'100vh'} width={{ base: 80 }} fixed={true} p="md">
            <Center>
                <Image alt="Logo" src="logo.png" />
            </Center>
            <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <Center inline mb={10}>
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                        </ActionIcon>
                    </Center>
                    <NavbarLink icon={IconLogout} label="Logout" onClick={() => handleLogout()} />
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}