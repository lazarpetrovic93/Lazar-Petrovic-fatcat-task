import clsx from 'clsx';

interface PanelItem {
    title: string;
    description: string;
    image: string;
}

interface PanelShowcaseProps {
    items: PanelItem[];
}

export const PanelShowcase: React.FC<PanelShowcaseProps> = ({ items }) => {
    return (
        <div className={clsx('flex', 'justify-center', 'items-center')}>
            <div
                className={clsx(
                    'grid',
                    'grid-cols-3',
                    'gap-8',
                    'w-8/12',
                    'justify-center',
                    'items-center'
                )}
            >
                {items.map(({ title, description, image }) => (
                    <div
                        key={title}
                        className={clsx(
                            'flex',
                            'flex-col',
                            'gap-2',
                            'justify-center',
                            'items-center',
                            'text-center'
                        )}
                    >
                        <img src={image} width="50" height="50" alt={title} />
                        <div className={clsx('text-xl', 'font-bold')}>
                            {title}
                        </div>
                        <div>{description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
