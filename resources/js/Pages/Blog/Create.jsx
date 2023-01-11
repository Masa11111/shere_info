import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/inertia-react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';


export default function Create(props) {

    const {data, setData, post, processing, errors} = useForm({
        title: '',
        content: ''
    })

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('blog.store'))
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blog</h2>}
        >
            <Head title="Blog Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='p-6 bg-white border-b border-gray-200'>
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel forInput="title" value="title"/>

                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        idFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError messages={errors.title} className="mt-2" />

                                </div>

                                <div>
                                    <InputLabel forInput="content" value="content"/>

                                    <TextInput
                                        id="content"
                                        name="content"
                                        value={data.content}
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                        idFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.content} className="mt-2" />

                                </div>

                                <div className='flex items-center justify-end mt-4'>
                                <PrimaryButton className="ml-4" processing={processing}>
                                    作成
                                </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
