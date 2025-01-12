export interface DateTime {
    year: string
    month: string
    date: string
    hour: string
    minute: string
}

export interface SelectedDateTime {
    startDate: DateTime
    endDate: DateTime
}

export interface SearchableDateTime {
    firstDateAt: string
    lastDateAt: string
}
