// @flow
export type ImageType = Array<{
  id: string,
  isPublic?: boolean,
}>

export type LocationType = {
  latitude?: number,
  localityId?: number,
  subLocalityName?: string,
  subwayIds?: Array<number>,
  countryName?: string,
  longitude?: number,
  postalCode?: number,
  countryId?: number,
  house?: number,
  localityName?: string,
  street?: string,
  regionId?: number,
  regionName?: string,
};

export type ComplexType = {
  commissioningYear?: number,
  adjacentTerritory: {
    area?: number,
    playgrounds?: number,
    isAccessOpen?: boolean,
    isAllowedCars?: boolean,
    isGreeneryPlanted?: boolean,
  },
  name: string,
  updatedAt?: string,
  location: LocationType,
  state: string,
  statistics?: {
    resalePropertiesCount: number,
    price: {
      from: {
        usd: number,
        eur: number,
        rub: number,
      },
      to: {
        usd: number,
        eur: number,
        rub: number,
      },
    },
    totalResaleArea: {
      from: number,
      to: number,
    },
    resalePrice: {
      from: {
        usd: number,
        eur: number,
        rub: number,
      },
      to: {
        usd: number,
        eur: number,
        rub: number,
      },
    },
    propertiesCount: number,
    totalPrimaryArea: {
      from: number,
      to: number,
    },
    primaryPrice: {
      from: {
        usd: number,
        eur: number,
        rub: number,
      },
      to: {
        usd: number,
        eur: number,
        rub: number,
      },
    },
    primaryPropertiesCount: number,
    totalArea: {
      from: number,
      to: number,
    },
  },
  purchaseTimeConditions?: {
    oralReservation?: number,
    agreementPreparation?: number,
    developerAgreement?: number,
    stateRegistrationPreparation?: number,
    signing?: number,
    stateRegistration?: number,
    documentDelivery?: number,
    payment?: number,
  },
  commissioningQuarter?: 1,
  linkedContactIds: ?Array<number>,
  responsibleUser?: {
    id: number,
    departmentId: number,
  },
  createdByUserId: ?number,
  id: string,
  updatedByUserId?: number,
  createdAt: string,
  images: ImageType,
  accreditors: ?Array<number>,
};
