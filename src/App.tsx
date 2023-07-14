import { AppShell, Box, Text } from '@mantine/core';

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
                <Text>{nearestStation?.properties.N02_003}</Text>
                <Text>{nearestStation?.properties.N02_005}</Text>
            </Box>
        </AppShell>
    );
}
