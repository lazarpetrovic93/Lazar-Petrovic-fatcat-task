import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@homework-task/components/Button';
import {
    FormGeneratorProps,
    PostDataPayload,
} from '@homework-task/components/form/types/index';

const FormGenerator: React.FC<FormGeneratorProps> = ({
    validationSchema,
    apiCall,
    renderForm,
}) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    const onSubmit = async (data: PostDataPayload) => {
        try {
            await apiCall(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center"
        >
            {renderForm(control, errors)}
            <div className="w-24 flex text-center justify-center h-9 items-center font-medium">
                <Button
                    type="submit"
                    className="disabled:opacity-40 disabled:pointer-events-none"
                    disabled={
                        isSubmitting ||
                        !isValid ||
                        !!(
                            errors &&
                            (errors.body?.message || errors.title?.message)
                        )
                    }
                >
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default FormGenerator;
