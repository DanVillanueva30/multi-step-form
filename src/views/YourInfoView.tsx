import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";



export default function YourInfoView() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const {register, handleSubmit, formState: {errors} } =  useForm({defaultValues:{
        name: '',
        email: '',
        phone: ''
    }});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleData = () => {
        navigate('/select-plan');
    }
    return (
        <form onSubmit={handleSubmit(handleData)} className=" flex flex-col justify-between gap-8 h-full" noValidate>
            <div className="space-y-4 lg:space-y-5 bg-white py-8 px-6 rounded-lg border lg:border-none w-11/12 lg:w-4/5 mx-auto -mt-16 lg:mt-0">
                <h2 className="text-marine font-bold text-xl lg:text-4xl">Personal Info</h2>
                <p className="text-cool-gray my-4 lg:text-lg">Please provide your name, email address, and phone number.</p>
                <div>
                    <div className="flex justify-between">
                        <label className="text-marine block mb-1" htmlFor="name">Name</label>
                        {errors.name && <p className="text-red-500 font-bold">{errors.name.message}</p>}
                    </div>
                    <input 
                        type="text" 
                        {...register('name', {required: 'This field is required'})}
                        id="name" 
                        placeholder="e.g. Stephen King"
                        className={`${errors.name ? 'border-red-500 hover:border-red-500': 'focus-visible:border-purple-900'} border border-cool-gray hover:border-purple-900 w-full py-2 lg:py-3 px-4 rounded outline-none`}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="flex justify-between">
                        <label className="text-marine block mb-1" htmlFor="email">Email</label>
                        {errors.email && <p className="text-red-500 font-bold">{errors.email.message}</p>}
                    </div>
                    <input 
                        type="email" 
                        {...register('email', {
                            required: 'This field is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "The email is not valid",
                            }
                        })}
                        id="email" 
                        placeholder="e.g. stephenking@lorem.com"
                        className={`${errors.email ? 'border-red-500 hover:border-red-500': 'focus-visible:border-purple-900'} border border-cool-gray hover:border-purple-900 w-full py-2 lg:py-3 px-4 rounded outline-none`}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="flex justify-between">
                        <label className="text-marine block mb-1" htmlFor="phone">Phone Number</label>
                        {errors.phone && <p className="text-red-500 font-bold">{errors.phone.message}</p>}
                    </div>
                    <input 
                        type="tel" 
                        {...register('phone', { required: 'This field is required' })}
                        id="phone" 
                        placeholder="e.g. +1 234 567 890"
                        className={`${errors.phone ? 'border-red-500 hover:border-red-500': 'focus-visible:border-purple-900'} border border-cool-gray hover:border-purple-900 w-full py-2 lg:py-3 px-4 rounded outline-none`}
                        onChange={handleChange}
                        
                    />
                </div>
            </div>
            <div className="py-6 lg:pr-8 bg-white w-full">
                <div className="w-11/12 lg:w-4/5 mx-auto flex justify-end">
                    <button 
                        type="submit"
                        className="bg-marine text-white py-3 hover:opacity-80 transition-colors px-8 rounded-lg font-medium"
                    >Next Step</button>
                </div>
            </div>
        </form>
    )
}
