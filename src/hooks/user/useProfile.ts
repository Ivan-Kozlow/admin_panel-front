import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { transformUserToState } from '@/utils/getServerAuth/types'
import authService from '@/services/auth/auth.service'
import { saveTokenStorage } from '@/services/auth/auth.helper'
import { queriesKeys } from '@/constants/queriesKeys.constants'

export const useProfile = () => {
	const USER_QUERY_KEYS = queriesKeys.user
	const AUTH_QUERY_KEYS = queriesKeys.auth

	const { data, isLoading } = useQuery({
		queryKey: [USER_QUERY_KEYS.profile],
		queryFn: () => authService.profile(),
		refetchInterval: 1800000, // 30 minutes (in milliseconds)
	})

	const { data: dataTokens, isSuccess } = useQuery({
		queryKey: [AUTH_QUERY_KEYS.tokens.new],
		queryFn: () => authService.getNewTokens(),
		enabled: !data?.data,
	})

	useEffect(() => {
		if (!isSuccess) return
		if (dataTokens.data.accessToken) saveTokenStorage(dataTokens.data.accessToken)
	}, [isSuccess])

	const profile = data?.data
	const userState = profile ? transformUserToState(profile) : null

	return {
		isLoading,
		user: {
			...profile,
			...userState,
		},
	}
}
