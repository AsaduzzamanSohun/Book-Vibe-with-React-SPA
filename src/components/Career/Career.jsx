
const Career = () => {
    return (
        <div className="h-[800px] flex items-center bg-[#1313130e] rounded-xl">
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Information</p>
                            <p className="text-xs">If you are interested? Join Us!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">First name</label><br />
                                <input type="text" placeholder="First name" className="w-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered max-w-xs" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Last name</label><br />
                                <input type="text" placeholder="Last name" className="w-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered max-w-xs" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Email</label><br />
                                <input type="text" placeholder="Email" className="w-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered max-w-xs" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Address</label><br />
                                <input type="text" placeholder="Address" className="w-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered max-w-xs" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Position</label><br />
                                <input type="text" placeholder="Position" className="w-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered max-w-xs" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Expected Salary</label><br />
                                <input type="text" placeholder="Salary" className="w-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered max-w-xs" />
                            </div>
                            <div className="lg:col-span-2 col-span-full">
                                <fieldset className="w-full space-y-1 dark:text-gray-800">
                                    <label className="block text-sm font-medium">Attachments: Drop your CV</label>
                                    <div className="flex w-full">
                                        <input type="file" name="files" id="files" className="w-full px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-800 dark:text-gray-600 dark:bg-gray-100" />
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default Career;