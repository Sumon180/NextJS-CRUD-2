import { BiEdit, BiTrash } from 'react-icons/bi';
import { getUsers } from '@/lib/helper';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChangeAction, updateAction } from '@/redux/reducer';

interface User {
    _id: any;
    name: string;
    avatar: string;
    email: string;
    salary: number;
    date: string;
    status: string;
}

interface TrProps extends User { }

const Table = () => {
    const { isLoading, isError, data, error } = useQuery('users', getUsers);

    if (isLoading) return <div>Employee is Loading...</div>;
    if (isError) return <div>Got Error</div>;

    return (
        <table className="table min-w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Birthday</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((obj: User, i: number) => (
                    <Tr key={i} {...obj} />
                ))}
            </tbody>
        </table>
    );
};

function Tr({ _id, name, avatar, email, salary, date, status }: TrProps) {
    const visible = useSelector((state: any) => state.app.client.toggleForm);
    const dispatch = useDispatch();

    const onUpdate = () => {
        dispatch(toggleChangeAction(_id));
        if (visible) {
            dispatch(updateAction(_id));
        }
    };

    return (
        <tr>
            <td className="flex items-center gap-5">
                <Image
                    src={avatar || '#'}
                    alt={name || 'Unknown user'}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                />
                <span>{name || 'Unknown'}</span>
            </td>
            <td>{email || 'Unknown'}</td>
            <td>{salary || 'Unknown'}</td>
            <td>{date || 'Unknown'}</td>
            <td>
                <button
                    className={`${status === 'Active' ? 'bg-green-500' : 'bg-rose-500'
                        } text-white px-5 py-1 rounded-full`}
                >
                    {status || 'Unknown'}
                </button>
            </td>
            <td className="flex gap-10">
                <BiEdit
                    onClick={onUpdate}
                    className="cursor-pointer"
                    size={25}
                    color="rgb(34, 197, 94)"
                />
                <BiTrash
                    className="cursor-pointer"
                    size={25}
                    color="rgb(197, 34, 34)"
                />
            </td>
        </tr>
    );
}

export default Table;
