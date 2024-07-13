const REQUIRED_FIELD = 'Поле является обязательно'

export const validationForm = {
	auth: {
		email: {
			required: REQUIRED_FIELD,
			pattern: {
				value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				message: 'Поле email имеет неверный формат',
			},
		},
		password: {
			required: REQUIRED_FIELD,
		},
	},
}
