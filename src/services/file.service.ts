import { instance } from '@/api/axios'

interface IFile {
	url: string
	name: string
}

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return instance.post<IFile[]>(`/media`, file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
