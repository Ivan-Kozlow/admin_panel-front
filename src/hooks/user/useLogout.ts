import { useMutation } from '@tanstack/react-query'

import authService from '@/services/auth/auth.service'
import { queriesKeys } from '@/constants/queriesKeys.constants'

type TypeProp = () => void

export const useLogout = (onSuccess: TypeProp) =>
	useMutation({
		mutationKey: [queriesKeys.auth.logout],
		mutationFn: () => authService.logout(),
		onSuccess,
	})
