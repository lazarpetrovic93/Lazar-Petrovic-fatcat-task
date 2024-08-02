import * as yup from 'yup';

export interface FormGeneratorProps {
    validationSchema: yup.ObjectSchema<any>;
    apiCall: (data: { title: string; body: string }) => void;
    renderForm: (control: any, errors: any) => React.ReactNode;
}

export interface PostDataPayload {
    title: string;
    body: string;
}

export interface FormValues {
    title: string;
    body: string;
}
