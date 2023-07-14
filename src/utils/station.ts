import _station from '../assets/station.json';

const station = _station as Station[];

export interface Station {
    properties: {
        N02_001: string;
        N02_002: string;
        N02_003: string;
        N02_004: string;
        N02_005: string;
    };
    geometry: {
        type: string;
        coordinates: [[[number, number], [number, number]]];
    };
}

export const getNearestStation = (latitude: number, longitude: number) => {
    const nearestStation = station.reduce((prev, current) => {
        const prevDistance = getDistance(
            latitude,
            longitude,
            prev.geometry.coordinates[0][0][1],
            prev.geometry.coordinates[0][0][0]
        );
        const currentDistance = getDistance(
            latitude,
            longitude,
            current.geometry.coordinates[0][0][1],
            current.geometry.coordinates[0][0][0]
        );
        return prevDistance < currentDistance ? prev : current;
    });
    return nearestStation;
};

const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
) => {
    const R = 6371e3; // metres
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d;
};
