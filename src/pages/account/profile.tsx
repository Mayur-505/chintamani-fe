import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Profile = () => {
    const { apiAction } = useApi()
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})
    const { user, token } = useSelector((state: any) => state.auth)
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        setFormData(user)
    }, [user])

    const handleImageChange = (file) => {
        setImageFile(file);
    };

    const updateUser = async () => {
        const urlencoded = new URLSearchParams();
        const updatedFormData = { ...formData, image: imageFile };
        urlencoded.append('firstname', updatedFormData.firstname);
        urlencoded.append('lastname', updatedFormData.lastname);
        urlencoded.append('email', updatedFormData.email);
        urlencoded.append('mobile', updatedFormData.mobile);
        urlencoded.append('Address', updatedFormData.Address);
        urlencoded.append('userid', user.id);
        if (imageFile) {
            urlencoded.append('image', imageFile);
        }
        try {
            const response = await apiAction({
                method: 'patch',
                url: `${apiPath?.auth?.updateUser}`,
                data: urlencoded,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            toast.success("User Updated Successfully")
            console.log('Update successful:', response);
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    const OnSubmit = () => {
        updateUser()
    }

    const handleChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value })
        setError({ ...error, [name]: "" })
    }
    return (
        <div>
            <div className="px-5 pb-5">

                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                    <div className="w-full flex items-center">
                        <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                            <img src={formData?.image} className="object-fill h-full" alt="" />
                        </div>
                        <label
                            htmlFor="profileImage"
                            className="flex ml-2 text-xs items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize bg-[#211c50] rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                        >
                            <span className="pl-2 mx-1">Upload</span>
                            <input
                                type="file"
                                id="profileImage"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e.target.files[0])}
                            />
                        </label>
                    </div>
                </div>

                <div className="flex">

                    <div className="flex-grow w-1/4 pr-2">
                        <input
                            placeholder="First Name"
                            type="text"
                            value={formData?.firstname}
                            onChange={(e) => handleChange("firstname", e.target.value)}
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                        {error?.firstname && <p className="text-red-500 text-xs mt-2">{error?.firstname}</p>}
                    </div>

                    <div className="flex-grow">
                        <input
                            placeholder="Last Name"
                            type="text"
                            value={formData?.lastname}
                            onChange={(e) => handleChange("lastname", e.target.value)}
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                        {error?.lastname && <p className="text-red-500 text-xs mt-2">{error?.lastname}</p>}
                    </div>

                </div>

                <input
                    placeholder="Email"
                    type="text"
                    value={formData?.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                {error?.email && <p className="text-red-500 text-xs mt-2">{error?.email}</p>}

                <input
                    placeholder="Mobile"
                    type="tel"
                    maxLength={13}
                    value={formData?.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                {error?.mobile && <p className="text-red-500 text-xs mt-2">{error?.mobile}</p>}

                <input
                    placeholder="Address"
                    type="text"
                    value={formData?.Address}
                    onChange={(e) => handleChange("Address", e.target.value)}
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                {error?.Address && <p className="text-red-500 text-xs mt-2">{error?.Address}</p>}

                <div className='flex justify-end px-5 my-6'>
                    <button onClick={() => OnSubmit()} type="button" className="flex items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize   bg-[#211c50] rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">

                        <span className="pl-2 mx-1">Save</span>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Profile