import toast from 'react-hot-toast'
import { UseFormReset } from 'react-hook-form'
import router from 'next/router'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useMutation } from '@tanstack/react-query'

import authService from '@/services/auth/auth.service'
import { queriesKeys } from '@/constants/queriesKeys.constants'

import { IAuthFormData } from '@/types'

type TypeProp = {
	mode: keyof typeof queriesKeys.auth
	reset: UseFormReset<IAuthFormData>
	router: AppRouterInstance
}

export const useAuthMutate = ({ mode, reset }: TypeProp) => {
	return useMutation({
		mutationKey: [mode],
		mutationFn: (data: IAuthFormData) => {
			return authService.main(mode, data)
		},
		onSuccess() {
			reset()
			router.push('/')
			toast.success(`${mode.replace(mode[0], mode[0].toUpperCase())} successful`)
		},
		onError(error) {
			toast.error('Что-то пошло не так. Попробуйте ещё раз')
		},
	})
}
