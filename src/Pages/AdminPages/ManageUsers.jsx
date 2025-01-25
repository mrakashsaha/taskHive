import React from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BiSolidCoinStack } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ["allusers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/allUsers")
            return res.data;
        }
    })
    console.log(allUsers)


    const handleDeleteUser = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteUserByAdmin?id=${id}`)
                    .then(res => {
                        console.log (res.data);
                        if (res?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user deleted sucessfully",
                                icon: "success"
                            });

                            refetch();
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Opps..",
                            text: "Somthing went Wrong!",
                            icon: "error"
                        });
                        console.log(error);
                    })
            }
        });

    }

    const handleChangeUserRole = (e, id) => {
        const newRoleDoc = { userId: id, newRole: e.target.value };
        Swal.fire({
            title: "Are you sure?",
            text: `Selected user role will be ${newRoleDoc?.newRole}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch("/changeRole", newRoleDoc)
                    .then(res => {
                        if (res?.data?.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: "Success!",
                                text: `The user is now ${newRoleDoc.newRole}.`,
                                icon: "success"
                            });



                        }
                    })
                    .catch(error => {
                        console.log(error)
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                    })
            }
        });
    }
    return (
        <div>
            {/* Manage User Section */}
            <div className='py-4 px-2'>
                <h2 className='text-2xl'>Manage Users</h2>
            </div>
            <div className="card-body bg-base-100 rounded-md">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Profile</th>
                                <th>Email</th>
                                <th className='text-right'>Coin Balance</th>
                                <th>Change Role</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((user, idx) => <tr key={user._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-10 w-10">
                                                    <img
                                                        src={user?.photoURL}
                                                        alt={user?.displayName} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-medium">{user?.displayName}</div>
                                                <div className='flex items-center text-xs opacity-50 gap-x-1'><p className=""> Role:  <span className='font-semibold'>{user?.role?.[0].toUpperCase() + user?.role?.slice(1)}</span> </p></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user?.email}
                                    </td>
                                    <td className='text-right'> <span className='flex items-center justify-end gap-x-1'>{user?.coin} <BiSolidCoinStack className='text-right'></BiSolidCoinStack></span> </td>
                                    <td>
                                        <select onChange={(e) => handleChangeUserRole(e, user?._id)} defaultValue={user?.role} className="select select-sm select-bordered">
                                            <option value="admin">Admin</option>
                                            <option value="buyer">Buyer</option>
                                            <option value="worker">Worker</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user?._id)} className="btn btn-circle btn-sm"> <RiDeleteBin6Line className='text-xl'></RiDeleteBin6Line> </button>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;