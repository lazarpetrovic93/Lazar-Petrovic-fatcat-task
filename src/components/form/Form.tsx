import React from 'react';
import FormGenerator from '@homework-task/components/form/FormGenerator';
import axios from 'axios';
import * as yup from 'yup';
import { Control, Controller } from 'react-hook-form';
import { clsx } from 'clsx';
import {
    FormValues,
    PostDataPayload,
} from '@homework-task/components/form/types/index';

const inputContainer = clsx('flex', 'flex-col');

const Form: React.FC = () => {
    const postFormData = (data: PostDataPayload) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts', data);
    };

    const validationSchema = yup.object().shape({
        title: yup
            .string()
            .required('Title is required')
            .max(50, 'Title must be at most 50 characters'),
        body: yup
            .string()
            .required('Body is required')
            .max(200, 'Body must be at most 200 characters'),
    });

    const renderForm = (
        control: Control<FormValues>,
        errors: { body: { message: string }; title: { message: string } }
    ) => {
        return (
            <div className="p-3 max-w-sm w-80">
                <div className={inputContainer}>
                    <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div className="h-28 flex flex-col ">
                                <label className="block mb-2 text-sm font-medium text-red-700 ">
                                    Title:
                                </label>
                                <input
                                    {...field}
                                    id="title"
                                    type="text"
                                    className={clsx(
                                        'text-sm',
                                        'border',
                                        'rounded-lg',
                                        'block',
                                        'w-full',
                                        'p-2.5',
                                        'border-gray80',
                                        errors.title &&
                                            errors.title.message &&
                                            'border-mainRed'
                                    )}
                                />
                                <p className="mt-2 text-xs text-red-600 ">
                                    {errors.title && (
                                        <span className="font-medium text-red">
                                            {errors.title.message}
                                        </span>
                                    )}
                                </p>
                            </div>
                        )}
                    />
                </div>
                <div className={inputContainer}>
                    <Controller
                        name="body"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div>
                                <label className="block mb-2 text-sm font-medium text-red-700">
                                    Body:
                                </label>
                                <textarea
                                    {...field}
                                    id="body"
                                    className={clsx(
                                        'text-sm',
                                        'border',
                                        'min-h-[120px]',
                                        'rounded-lg',
                                        'block',
                                        'w-full',
                                        'p-2.5',
                                        'border-gray80',
                                        errors.body &&
                                            errors.body.message &&
                                            'border-mainRed'
                                    )}
                                />
                                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                                    {errors.body && (
                                        <span className="font-medium text-red">
                                            {errors.body.message}
                                        </span>
                                    )}
                                </p>
                            </div>
                        )}
                    />
                </div>
            </div>
        );
    };
    return (
        <FormGenerator
            validationSchema={validationSchema}
            apiCall={postFormData}
            renderForm={renderForm}
        />
    );
};

export default Form;
