import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from 'next/navigation'

const CryptoCard = ({ crypto }) => {
    const router = useRouter()
    return (
        <div className='w-full'>
            <Card className="shadow-lg shadow-indigo-500/10 hover:shadow-lg hover:shadow-gray-500/40 cursor-pointer transition duration-300 ease-out hover:ease-in"
                onClick={() => {
                    router.push(`/detail/${crypto.code}`)
                    // window.location.href = `/detail/${crypto.code}`
                }

                }
            >
                <div className='flex justify-between items-center'>

                    <CardContent className="p-6 font-semibold flex gap-2 items-center">
                        {crypto.code}
                        <CardDescription>{" "}INR</CardDescription>
                    </CardContent>
                    <CardContent className="p-6 text-pink-200 font-bold ">
                        {crypto.rate}
                    </CardContent>
                </div>

            </Card>
        </div>

    )
}

export default CryptoCard