'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { useAuthMutate } from '@/hooks/auth'
import { validationForm } from '@/constants/validateionsForms'
import { queriesKeys } from '@/constants/queriesKeys.constants'

import { IAuthFormData } from '@/types'
import { Field } from '@/components/ui/field/Field'
import { Button } from '@/components/ui/button/Button'
import { Loader } from '@/components/ui/loader/Loader'
import { FIELDS } from './FIELDS'

type TypeProps = {
	type: keyof typeof queriesKeys.auth
}

export function AuthForm({ type }: TypeProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IAuthFormData>()
	const router = useRouter()
	const { mutate, isPending } = useAuthMutate({ reset, mode: type, router })

	const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
		mutate(data)
	}

	const validate = validationForm.auth

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='max-w-sm mx-auto'>
			{FIELDS.map((el) => (
				<>
					<Field
						extra='mb-4'
						label={el.label}
						type={el.type}
						placeholder={`Enter ${el.name}: `}
						{...register(el.name, { ...validate.email })}
					/>
					{errors && <p className='text-red-500'>{errors[el.name]?.message}</p>}
				</>
			))}

			<div className='mb-4'>
				<Button type='submit' variant={type === 'login' ? 'primary' : 'secondary'} disabled={isPending}>
					{isPending ? <Loader /> : type === 'login' ? 'Войти' : 'Зарегистрироваться'}
				</Button>
			</div>
		</form>
	)
}
