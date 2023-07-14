import { useEffect, useState } from 'react';

import { AppShell, Box, Text } from '@mantine/core';

export default function App() {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);

    useEffect(() => {
        const w = navigator.geolocation.watchPosition(setPosition);
        return () => navigator.geolocation.clearWatch(w);
    });

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
                <Text>{position && position.coords.latitude}</Text>
                <Text>{position && position.coords.longitude}</Text>
            </Box>
        </AppShell>
    );
}
