export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export interface FetchUsersResponse {
    data: User[] | null;
    isLoading: boolean;
    isError: boolean;
}
