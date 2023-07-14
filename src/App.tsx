import { useState } from 'react';

import { AppShell, Box, Button, Text } from '@mantine/core';

export default function App() {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);

    return (
        <AppShell>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button
                    onClick={() =>
                        navigator.geolocation.watchPosition(
                            setPosition,
                            console.log
                        )
                    }
                >
                    Start
                </Button>
                <Text>{position && JSON.stringify(position)}</Text>
            </Box>
        </AppShell>
    );
}
