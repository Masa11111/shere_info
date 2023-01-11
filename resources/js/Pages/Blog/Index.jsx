import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Index(props) {
    const {delete: destroy} = useForm();
    const handleDelete = (id) => {
        destroy(route("blog.destroy", id),{
            preserveScroll: true,
        })
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blog</h2>}
        >
            <Head title="Blog Index" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='p-6 bg-white border-b border-gray-200'>
                            <div className='flex items-center justify-end mt-4'>
                                <Link href={route("blog.create")}>
                                    <PrimaryButton type="button">新規作成</PrimaryButton>
                                </Link>
                            </div>
                            <table className='mt-4'>
                                <thead>
                                    <tr>
                                        <th>タイトル</th>
                                        <th>コンテンツ</th>
                                        <th>削除</th>
                                        <th>編集</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.blogs.map((blog) => {
                                        return (
                                            <tr kay={blog.id}>
                                                <td className='border px-4 py-2 col-3'>{blog.title}</td>
                                                <td className='border px-4 py-2 col-5'>{blog.content}</td>
                                                <td className='border px-4 py-2 col-2'>
                                                    <Link href={route('blog.edit', blog.id)}>
                                                        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg text-xs font-semibold'>Edit</button>
                                                    </Link>
                                                </td>
                                                <td className='border px-4 py-2 col-2'>
                                                    <button key={blog.id} onClick={() => handleDelete(blog.id)} className='px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
