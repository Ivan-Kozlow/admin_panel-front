export const queriesKeys = {
	auth: {
		login: 'login',
		register: 'register',
		logout: 'logout',
		tokens: { new: 'new tokens', refresh: 'refresh tokens' },
	},
	user: { profile: 'profile' },
} as const
