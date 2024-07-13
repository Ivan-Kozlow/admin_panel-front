import { InputHTMLAttributes } from 'react'

import { IAuthFormData } from '@/types'

type TypeFields = {
	name: keyof IAuthFormData
	label: string
} & InputHTMLAttributes<HTMLInputElement>

export const FIELDS: TypeFields[] = [
	{ name: 'email', label: 'Email', type: 'email' },
	{
		name: 'password',
		label: 'Пароль',
		type: 'password',
	},
]
