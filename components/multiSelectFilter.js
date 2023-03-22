import {
    Box,
    CloseButton
} from '@mantine/core';

export default function MultiSelector({
                                          value,
                                          label,
                                          onRemove,
                                          classNames,
                                          ...others
                                      }) {
    return (
        <div {...others}>
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    cursor: 'default',
                    alignItems: 'center',
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                    border: `1px solid`,
                    paddingLeft: 10,
                    borderRadius: 4,
                })}
            >
                <Box sx={{ lineHeight: 1, fontSize: 12 }}>{label}</Box>
                <CloseButton
                    onMouseDown={onRemove}
                    variant="transparent"
                    size={22}
                    iconSize={14}
                    tabIndex={-1}
                />
            </Box>
        </div>
    );
}