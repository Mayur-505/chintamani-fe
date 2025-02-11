import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PaymentComponent from './PaymentComponent'
import SideComponent from './SideComponent'

const CheckoutComponent = () => {
    const { auth: { user, token }, cart: { cartProduct } } = useSelector((state: any) => state)

    const handleTotalAmount = () => {
        const totalAmount = cartProduct?.reduce((prev: number, products: any) => {
            let product = products?.product || products
            return prev + (product?.quantity || 1) * product?.price
        }, 0)
        return totalAmount

    }

    useEffect(() => {
        // updateProduct()
    }, [])

    const updateProduct = async () => {
        var urlencoded = new URLSearchParams();
        urlencoded.append("title", "1 1.07 Carat Radiant fef saf dsvd fdbfdb dsvfdsv");
        urlencoded.append("productId", "7c2cdfe1-b2b2-4d21-a31a-60d5390f3afb");
        var requestOptions :any= {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlNjE5ZjlhOC00OWQ5LTQwYzItYTExMi1kYjczMTk2NzI2ZjIiLCJpYXQiOjE3MDUxMjI1MTQsImV4cCI6MTcwNTU1NDUxNH0.8vWEolFbvSMhLgQJN8NaPeUjJbuDx8uKpE2qltWzai8`
            },
            body: urlencoded,
            redirect: 'follow'
        };

       await  fetch("http://192.168.0.171:8080/api/v1/product/update", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div className='container mx-auto'>

            <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                <div className="w-full">
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-5/12">
                            <SideComponent />

                            <PaymentComponent />
                            {/* <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                <div className="w-full p-3 border-b border-gray-200">
                                    <div className="mb-5">
                                        <label htmlFor="type1" className="flex items-center cursor-pointer">
                                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3" />
                                        </label>
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                            <div>
                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                            <div>
                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                                            </div>
                                        </div>
                                        <div className="mb-3 -mx-2 flex items-end">
                                            <div className="px-2 w-1/4">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                                <div>
                                                    <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                        <option value="01">01 - January</option>
                                                        <option value="02">02 - February</option>
                                                        <option value="03">03 - March</option>
                                                        <option value="04">04 - April</option>
                                                        <option value="05">05 - May</option>
                                                        <option value="06">06 - June</option>
                                                        <option value="07">07 - July</option>
                                                        <option value="08">08 - August</option>
                                                        <option value="09">09 - September</option>
                                                        <option value="10">10 - October</option>
                                                        <option value="11">11 - November</option>
                                                        <option value="12">12 - December</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="px-2 w-1/4">
                                                <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2026">2026</option>
                                                    <option value="2027">2027</option>
                                                    <option value="2028">2028</option>
                                                    <option value="2029">2029</option>
                                                </select>
                                            </div>
                                            <div className="px-2 w-1/4">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                                <div>
                                                    <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-3">
                                    <label htmlFor="type2" className="flex items-center cursor-pointer">
                                        <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" className="ml-3" />
                                    </label>
                                </div>
                            </div> */}
                            <div>
                                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                            </div>
                        </div>
                        <div className="px-3 md:w-7/12 lg:pr-10">
                            {
                                cartProduct?.map(prod => {
                                    let product = prod?.product || prod
                                    console.log("🚀 ~ CheckoutComponent ~ product:", product)
                                    return (
                                        <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                            <div className="w-full flex items-center">
                                                <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                    <img src={product?.productimage?.[0]} className='object-fill h-full' alt="" />
                                                </div>
                                                <div className="flex-grow pl-3">
                                                    <h6 className="font-semibold uppercase text-gray-600">{product?.maintitle}</h6>
                                                    <p className="text-gray-400">{product?.quantity || 1}</p>
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-gray-600 text-xl">${product?.price}</span><span className="font-semibold text-gray-600 text-sm">.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                            {/* <div className="mb-6 pb-6 border-b border-gray-200">
                                <div className="-mx-2 flex items-end justify-end">
                                    <div className="flex-grow px-2 lg:max-w-xs">
                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                        <div>
                                            <input className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                                        </div>
                                    </div>
                                    <div className="px-2">
                                        <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="w-full flex mb-3 items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Subtotal</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">${handleTotalAmount()}</span>
                                    </div>
                                </div> */}
                            {/* <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Taxes (GST)</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">$19.09</span>
                                    </div>
                                </div> */}
                            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Total</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold text-gray-400 text-sm">AUD</span> <span className="font-semibold">${handleTotalAmount()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutComponent