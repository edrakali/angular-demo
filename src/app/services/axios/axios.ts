import axios from 'axios';
import { AxiosInstance } from 'axios';
import { ErrorHandler } from '@angular/core';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

export interface Params {
	[ key: string ]: any;
}

export interface GetOptions {
	url: string;
	params?: Params;
}

export interface DeleteOptions {
	url: string;
	id: string;
}

export interface PostOptions {
	url: string;
	params?: Params;
	body?: Params;
}

export interface ErrorResponse {
	id: string;
	code: string;
	message: string;
}

@Injectable({
	providedIn: 'root'
})
export class ApiClient {

	private axiosClient: AxiosInstance;
	private errorHandler: ErrorHandler;

	// Initialize the ApiClient.
	constructor( errorHandler: ErrorHandler ) {

		this.errorHandler = errorHandler;

		// The ApiClient wraps calls to the underlying Axios client.
		this.axiosClient = axios.create({
			timeout: 3000,
			// baseURL: "https://jsonplaceholder.typicode.com/",
			// baseURL: "",
			headers: {
			}
		});

		const onFullfilled = (response: AxiosResponse<any>): AxiosResponse<any> => {
			console.log('Response Fullfilled: ', response);
			return response;
		};
		const onRejected = (error: any): number => {
			console.log('Rejected!', error);

			console.log('Error response', error.response);

			return -1;
		};
		// this.axiosClient.interceptors.response.use(onFullfilled, onRejected);

		const onRequestFulfilled = (value: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
			console.log('requestFullfilled', value);
			return value;
		};

		const onRequestRejected = (error: any): any => {
			console.log('Request rejected: ', error);
		};
		// this.axiosClient.interceptors.request.use(onRequestFulfilled, onRequestRejected);
	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I perform a GET request with the given options.
	public async get<T>( options?: GetOptions ): Promise<T> {

		try {

			const axiosResponse: AxiosResponse = await this.axiosClient.request<T>({
				method: 'get',
				url: options.url,
				params: options.params
			});

			return( axiosResponse.data );

		} catch ( error ) {

			return( Promise.reject( this.normalizeError( error ) ) );

		}

	}

	public async delete<T>( options?: DeleteOptions ): Promise<T> {

		try {

			let config: AxiosRequestConfig;
			const axiosResponse: AxiosResponse = await this.axiosClient.request<T>({
				method: 'delete',
				url: options.url + '/' + options.id,
			});

			return( axiosResponse.data );

		} catch ( error ) {

			return( Promise.reject( this.normalizeError( error ) ) );

		}

	}

	public async post<T>(options?: PostOptions) {
		try {

			const axiosResponse: AxiosResponse = await this.axiosClient.post<T>(options.url, options.body);

			return( axiosResponse.data );

		} catch ( error ) {

			return( Promise.reject( this.normalizeError( error ) ) );
		}

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// Errors can occur for a variety of reasons. I normalize the error response so that
	// the calling context can assume a standard error structure.
	private normalizeError( error: any ): ErrorResponse {

		this.errorHandler.handleError( error );

		// NOTE: Since I'm not really dealing with a production API, this doesn't really
		// normalize anything (ie, this is not the focus of this demo).
		return({
			id: '-1',
			code: 'UnknownError',
			message: 'An unexpected error occurred.'
		});

	}

}
