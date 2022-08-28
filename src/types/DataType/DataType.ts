export interface ICarrier {
    uid: string
    caption: string
    airlineCode?: string
}

interface IExchangeDeparture {
    amount: string
    currency: string
    currencyCode: string
}


interface ISegments {
    aircraft: ICarrier
    airline: ICarrier
    arrivalAirport: ICarrier
    arrivalCity: ICarrier
    arrivalDate: string
    classOfService: ICarrier
    classOfServiceCode: string
    departureAirport: ICarrier
    departureCity: ICarrier
    departureDate: string
    flightNumber: string
    servicesDetails: any
    starting: boolean
    stops: number
    techStopInfos: []
    travelDuration: number
}
export interface ILegs {
    duration: number
    segments: ISegments[]
}

interface IPriceDetais {
    amount: string
    currency?: string
    currencyCode: string
}

interface IPassangerPrices {
    feeAndTaxes: IPriceDetais
    passengerCount: number
    passengerType: ICarrier
    singlePassengerTotal: IPriceDetais
    tariff: IPriceDetais
    total: IPriceDetais
}

interface IPrice{
    passengerPrices: IPassangerPrices[]
    rates:{totalEur: IPriceDetais, totalUsd: IPriceDetais}
    total: IPriceDetais
    totalFeeAndTaxes: IPriceDetais
}


interface IAdult {
    exchangeAfterDeparture: IExchangeDeparture
    exchangeBeforeDeparture: IExchangeDeparture
    exchangeableAfterDeparture: boolean
    exchangeableBeforeDeparture: boolean
}

interface IServicesStatus {
    caption: string
    uid: string
}
interface IServicesStatuses {
    baggage: IServicesStatus
    exchange: IServicesStatus
    refund: IServicesStatus
}

export interface IFlight {
    carrier: ICarrier
    international:boolean
    isTripartiteContractDiscountApplied: boolean
    airlineAlliance?: ICarrier
    exchange: {ADULT: IAdult}
    legs: ILegs[]
    price: IPrice
    refund: any
    seats: {count: number , type:{caption: string, uid: string}}[]
    servicesStatuses: IServicesStatuses
}

export interface IFlights {
    flight: IFlight
    flightToken: string
    hasExtendedFare: boolean
}


interface IBestFlight {
    carrier: ICarrier
    price: IPriceDetais
}

interface IDIRECT {
    bestFlights: IBestFlight[]
}

interface IONE_CONNECTION {
    bestFlights:IBestFlight[]
}

interface IBestPrices{
    DIRECT: IDIRECT
    ONE_CONNECTION: IONE_CONNECTION
}

export interface IData{
    result: { bestPrices: IBestPrices, flights: IFlights[] }
}
