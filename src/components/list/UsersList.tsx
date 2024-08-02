import { User } from '@homework-task/components/list/types/index';
import useFetchUsers from '@homework-task/components/list/hooks/fetchUsersHook';
import clsx from 'clsx';

const liClass = clsx(
    'p-4',
    'border',
    'border-gray80',
    'rounded-lg',
    'shadow-sm',
    'bg-white'
);

const h3Class = clsx('text-xl', 'font-semibold', 'text-gray60', ' mb-2');

const ulClass = clsx(
    'max-w-md',
    'overflow-auto',
    'max-h-[400px]',
    'space-y-4',
    'px-3'
);

const UsersList: React.FC = () => {
    const { data, isLoading, isError } = useFetchUsers();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching data. Please try again later.</p>;
    }

    if (!data || data.length === 0) {
        return <p>No users found.</p>;
    }

    return (
        <ul className={ulClass}>
            {data.map((user: User) => (
                <li key={user.id} className={liClass}>
                    <h3 className={h3Class}>{user.name}</h3>
                    <p className="text-gray60">
                        <strong className="font-medium">Username:</strong>{' '}
                        {user.username}
                    </p>
                    <p className="text-gray60">
                        <strong className="font-medium">Email:</strong>{' '}
                        {user.email}
                    </p>
                    <p className="text-gray60">
                        <strong className="font-medium">Phone:</strong>{' '}
                        {user.phone}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default UsersList;
