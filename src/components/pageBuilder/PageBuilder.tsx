import { TrustBar } from '@homework-task/components/TrustBar';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { ReactNode } from 'react';

const componentMap: { [key: string]: React.ElementType } = {
    componentTrustBar: TrustBar,
    componentItemsShowcase: ItemsShowcase,
};

const layoutMap: { [key: string]: React.ElementType } = {
    layoutSection: ({
        children,
        style,
    }: {
        children: ReactNode;
        style?: React.CSSProperties;
    }) => {
        return (
            <div className={`layout-section`} style={style}>
                {children}
            </div>
        );
    },
};

interface Layout {
    type: string;
    props: {
        [key: string]: string;
    };
    components: Array<{
        type: string;
        props: any;
    }>;
}

interface PageBuilderProps {
    data: Layout[];
}

const PageBuilder: React.FC<PageBuilderProps> = ({ data }) => {
    return (
        <div>
            {data.map((layout, index) => {
                const LayoutComponent = layoutMap[layout.type] || 'div';
                return (
                    <LayoutComponent
                        key={index}
                        style={{
                            backgroundColor: layout.props.backgroundColor,
                        }}
                    >
                        {layout.components.map((component, compIndex) => {
                            const Component: React.ElementType =
                                componentMap[component.type];
                            return Component ? (
                                <Component
                                    key={compIndex}
                                    {...component.props}
                                />
                            ) : null;
                        })}
                    </LayoutComponent>
                );
            })}
        </div>
    );
};

export default PageBuilder;
