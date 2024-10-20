"use client";

import { useEffect, useState } from "react";

interface UseCoordsState {
    latitude?: number;
    longitude?: number;
}

export function useCoords() {
    const [coords, setCoords] = useState<UseCoordsState>({});

    const onSuccess = ({
        coords: { latitude, longitude },
    }: GeolocationPosition) => setCoords({ latitude, longitude });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onSuccess);
    }, []);

    return coords;
}
