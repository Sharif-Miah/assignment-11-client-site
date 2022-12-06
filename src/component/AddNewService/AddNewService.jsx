import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const AddNewService = () => {
    const navigate = useNavigate();
    const notify = () => toast.success('Successfully Service Added')
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.title.value;
        const img = form.imgUrl.value;
        const price = form.price.value;
        const description = form.description.value;

        const addService = {
            name,
            img,
            price,
            description,
        }
        console.log(addService);


        fetch('https://server-site-reviw-website-farhan-sharif.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                console.log(data);
                notify()
                navigate('/')
            })

    }

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <h1 className="text-2xl font-semibold">New Service</h1>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Tittle</label>
                            <input name='title' type="text" placeholder="title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Img Url</label>
                            <input id="website" name='imgUrl' type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Price in usd</label>
                            <input id="website" name='price' type="number" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">description</label>
                            <textarea name='description' id="bio" placeholder="Please Write description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-700 text-gray-900"></textarea>
                            <input className='btn' type="submit" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}

export default AddNewService