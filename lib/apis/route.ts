import mockRoutesData from '@/mock/vehicle_route_data.json'

export const routeService = {
    // getVehicleRoutesData: async () => {
    // getVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
    fetchVehicleRoutesData: async () => {
        // fetchVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
        // const formattedStartDate = formatToISODate(startDate)
        // const formattedEndDate = formatToISODate(endDate)
        // const response = await apiClient.get(
        //     `${API_URL}/api/vi/vehicle/${vehicleId}/routes?startTime=${formattedStartDate}&endTime=${formattedEndDate}&interval=${interval}`,
        // )
        // console.log(formattedStartDate, formattedEndDate, vehicleId, interval)

        // return response.result

        return mockRoutesData
    },
}
