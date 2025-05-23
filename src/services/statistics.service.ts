import { instance } from '@/api/axios'

export interface IUserRegistrationsByMonth {
	month: string
	year: number
	count: number
}

export interface ICountryCount {
	country: string
	count: number
}

interface IGetNumbers {
	name: string
	value: string
}

class StatisticsService {
	private base = '/statistics'

	async getRegistrationsByMonth() {
		return instance.get<IUserRegistrationsByMonth[]>(`${this.base}/registrations-by-month`)
	}

	async getNumbers() {
		return instance.get<IGetNumbers[]>(`${this.base}/numbers`)
	}

	async getCountByCountry() {
		return instance.get<ICountryCount[]>(`${this.base}/count-by-country`)
	}
}

export default new StatisticsService()
