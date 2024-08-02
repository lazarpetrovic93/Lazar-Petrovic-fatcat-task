import { useState, useEffect } from 'react';
import axios from 'axios';
import { FetchUsersResponse, User } from '../types';

const useFetchUsers = (): FetchUsersResponse => {
    const [data, setData] = useState<User[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, isError };
};

export default useFetchUsers;
