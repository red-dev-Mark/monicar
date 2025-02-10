import { create } from 'zustand'

interface VehicleVisibleState {
    inputValue: string
    selectedVehicleId: string | null
    isSelectedVehicleVisible: boolean
    isSearchedVehicleVisible: boolean

    setInputValue: (inputValue: string) => void
    setSelectedVehicleVisible: (show: boolean) => void
    setSearchedVehicleVisible: (show: boolean) => void
    setSelectVehicleId: (vehicleId: string | null) => void
}

export const useVehicleVisibleStore = create<VehicleVisibleState>((set) => ({
    inputValue: '',
    selectedVehicleId: null,
    isSelectedVehicleVisible: false,
    isSearchedVehicleVisible: false,

    setInputValue: (inputValue: string) => set({ inputValue }),
    setSelectVehicleId: (vehicleId: string | null) => set({ selectedVehicleId: vehicleId }),
    setSelectedVehicleVisible: (show: boolean) => set({ isSelectedVehicleVisible: show }),
    setSearchedVehicleVisible: (show: boolean) => set({ isSearchedVehicleVisible: show }),
}))
