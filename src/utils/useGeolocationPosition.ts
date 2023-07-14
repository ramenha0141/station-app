import { useEffect, useState } from 'react';

export const useGeolocationPosition = () => {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(setPosition);
        return () => navigator.geolocation.clearWatch(watchId);
    });

    return position;
};
