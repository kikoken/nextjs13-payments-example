'use client'

import { data } from "@/mock/data"
import { 
    Button, 
    Card,
    CardBody,
    CardFooter } from '@material-tailwind/react'

const loadPrices = () => {
    const prices = data.prices

    return prices
}

const PricingPage = () => {

    const prices = loadPrices()
  return (
    <article className="flex justify-center items-center h-screen">
        <div>
            <header><h2 className="text-center my-5 font-bold text-3xl">Products</h2><hr/></header>
            <section className="flex gap-x-4">
                {prices.map((price) => (
                    <Card className="mt-6 w-96"  key={price.id}>
                    <CardBody>
                        <div className="bg-slate-300 mb-2 p-7">
                            <h3 className="text-2xl font-bold">{price.nickname}</h3>
                            <p className="text-3xl text-gray">US$ {price.price}</p>
                        </div>
                    </CardBody>
                        <CardFooter className="pt-0">
                            <Button fullWidth>Select</Button>
                        </CardFooter>
                    </Card>
                ))}
            </section>
            
                
        </div>
    </article>
  )
}

export default PricingPage