import { toast } from '@zerodevx/svelte-toast'

export function success(msg: string): void {
	toast.push(` ${msg}`, {
		theme: {
			'--toastBackground': 'green',
			'--toastColor': 'white',
		}
	})
}

export function error(msg: string): void {
	toast.push(` ${msg}`, {
		theme: {
			'--toastBackground': 'red',
			'--toastColor': 'white',
		}
	})
}

export function info(msg: string): void {
	toast.push(` ${msg}`, {
		theme: {
			'--toastBackground': 'blue',
			'--toastColor': 'white',
		}
	})
}