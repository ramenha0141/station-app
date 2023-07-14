import { AppShell, Box, Button, Text } from '@mantine/core';

import { getNearestStation } from './utils/station';
import { useGeolocationPosition } from './utils/useGeolocationPosition';

export default function App() {
    const position = useGeolocationPosition();
    const latitude = position?.coords.latitude;
    const longitude = position?.coords.longitude;

    const nearestStation = position && getNearestStation(latitude!, longitude!);

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
                <Text>{latitude}</Text>
                <Text>{longitude}</Text>
                <Button
                    onClick={() => {
                        if (!latitude || !longitude) return;

                        window.open(
                            `https://www.google.com/maps/search/?api=1&query=${nearestStation?.geometry.coordinates[0][0][1]},${nearestStation?.geometry.coordinates[0][0][0]}`,
                            '_blank'
                        );
                    }}
                >
                    Open GoogleMap
                </Button>
                <Text>{nearestStation && JSON.stringify(nearestStation)}</Text>
            </Box>
        </AppShell>
    );
}
