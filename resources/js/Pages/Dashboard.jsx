import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 text-center">
                            <p>ようこそ {props.auth.user.name} さん！</p>
                            <p>このブログでは、プログラミングの情報をシェアしています。</p>
                            <hr />
                            <div className='row'>
                                <div className='mt-5'>ユーザ一覧</div>
                                {props.users.map((user) => {
                                    return (
                                        <div className='mt-2' key={user.id}>{user.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
