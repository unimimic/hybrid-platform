import { Deposit } from "@/components/dash/deposit"
import {useTranslations} from 'next-intl';

export default async function Home() {
  // const t = useTranslations('products');
  
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-2">
        <Deposit />
        <Deposit />
        <Deposit />
        <Deposit />
      </div>
  </>
  )
}
