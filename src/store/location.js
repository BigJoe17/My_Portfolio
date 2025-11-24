import {immer} from "zustand/middleware/immer";
import {create} from "zustand";
import {locations} from "@constants";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(immer((set) => (
        {
            activeLocation: DEFAULT_LOCATION,
            setActiveLocation: (location) =>
                set((state) => {
                    state.activeLocation = location || state.activeLocation;
                }),

            resetActiveLocation: () => set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            }),
        })),
);

export default useLocationStore;