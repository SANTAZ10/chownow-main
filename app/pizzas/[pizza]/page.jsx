import Layout from "@/components/Layout";
import { getPizza } from "@/sanity/sanity-utils";


export default async function Pizza({params}) {

  const slug = params.pizza;

  const pizza = await getPizza(slug)

  return (
  <Layout>
    {pizza.name}
  </Layout>
  )
  
}

