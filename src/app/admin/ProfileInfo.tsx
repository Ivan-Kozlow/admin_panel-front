import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { LogOut } from 'lucide-react'

import { useProfile } from '@/hooks/user/useProfile'
import { useLogout } from '@/hooks/user/useLogout'
import { PATHS_ROUTES_APP } from '@/constants/pathsRoutesApp'

export function ProfileInfo() {
	const { push } = useRouter()
	const { user } = useProfile()
	const { mutate: mutateLogout, isPending: isLogoutPending } = useLogout(() => {
		push(PATHS_ROUTES_APP.auth.login)
	})

	return (
		user && (
			<div className='mb-8 flex gap-5'>
				{user.avatarUrl && <Image src={user.avatarUrl} alt='Avatar' width={100} height={100} />}
				<div>
					<h2 className='text-2xl font-bold'>Добрый день!</h2>
					<p className='text-lg'>Ваш email: {user.email}</p>
					<p className='text-lg'>Роль: {user.role}</p>

					<button onClick={() => mutateLogout()} disabled={isLogoutPending}>
						<LogOut />
					</button>
				</div>
			</div>
		)
	)
}
