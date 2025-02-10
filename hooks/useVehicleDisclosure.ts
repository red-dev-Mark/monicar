import { useVehicleVisibleStore } from '@/stores/useVehicleVisibleStore'

export const useVehicleDisclosure = () => {
    const { isSelectedVehicleVisible, isSearchedVehicleVisible, setSelectedVehicleVisible, setSearchedVehicleVisible } =
        useVehicleVisibleStore()

    const showSearchedVehicle = () => {
        setSearchedVehicleVisible(true)
    }

    const hideSearchedVehicle = () => {
        setSearchedVehicleVisible(false)
    }

    const showSelectedVehicle = () => {
        setSelectedVehicleVisible(true)
    }

    const hideSelectedVehicle = () => {
        setSelectedVehicleVisible(false)
    }

    return {
        isSelectedVehicleVisible,
        isSearchedVehicleVisible,
        showSearchedVehicle,
        hideSearchedVehicle,
        showSelectedVehicle,
        hideSelectedVehicle,
    }
}
