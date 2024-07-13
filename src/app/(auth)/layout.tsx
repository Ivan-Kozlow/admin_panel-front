import { PropsWithChildren } from 'react'
import { redirect } from 'next/navigation'

type TypeProps = PropsWithChildren

export async function Layout({ children }: TypeProps) {
	const user = await getServerAuth()
	if (user?.isLoggedIn) return redirect(user.isAdmin && '/')
	return children
}
