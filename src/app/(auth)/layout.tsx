import { PropsWithChildren } from 'react'
import { redirect } from 'next/navigation'

import { getServerAuth } from '@/utils/getServerAuth/getServerAuth'

type TypeProps = PropsWithChildren

export async function Layout({ children }: TypeProps) {
	const user = await getServerAuth()

	if (user?.isLoggedIn) return redirect(user.isAdmin ? '/' : '/')
	return children
}
