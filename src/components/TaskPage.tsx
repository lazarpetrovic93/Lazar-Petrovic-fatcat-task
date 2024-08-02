import PageBuilder from '@homework-task/components/pageBuilder/PageBuilder';
import Form from '@homework-task/components/form/Form';
import UsersList from '@homework-task/components/list/UsersList';
import clsx from 'clsx';

const ExamplePageData = [
    {
        type: 'layoutSection',
        props: { backgroundColor: 'lightgray' },
        components: [
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    ],
                },
            },
        ],
    },
];

const TaskPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen pb-3">
            <PageBuilder data={ExamplePageData} />
            <div className="w-full flex flex-row justify-around border-b p-3">
                <UsersList />
                <a
                    className={clsx(
                        'flex',
                        'items-center',
                        'gap-2',
                        'rounded-lg',
                        'px-4',
                        'py-2',
                        'bg-black',
                        'text-white',
                        'w-[180px]',
                        'h-[100px]'
                    )}
                    href="/"
                >
                    <span className={clsx('text-lg')}>Go to Landing Page</span>
                    <img src="/media/landing/arrow.svg" alt="Arrow icon" />
                </a>
            </div>
            <Form />
        </div>
    );
};

export default TaskPage;
