import { create } from 'zustand'

interface VehicleVisibleState {
    isSelectedVehicleVisible: boolean
    isSearchedVehicleVisible: boolean

    setSelectedVehicleVisible: (show: boolean) => void
    setSearchedVehicleVisible: (show: boolean) => void
}

export const useVehicleVisibleStore = create<VehicleVisibleState>((set) => ({
    isSelectedVehicleVisible: false,
    isSearchedVehicleVisible: false,

    setSelectedVehicleVisible: (show: boolean) => set({ isSelectedVehicleVisible: show }),
    setSearchedVehicleVisible: (show: boolean) => set({ isSearchedVehicleVisible: show }),
}))
