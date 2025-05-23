import { getAccountWithTransactions } from '@/actions/accounts';
import notFound from '@/app/not-found';
import React, { Suspense } from 'react'
import { TransactionTable } from '../_component/transacation-table';
import { BarLoader } from 'react-spinners';
import { AccountChart } from '../_component/account-chart';

const AccountsPage = async ({params}) => {
    const accountData = await getAccountWithTransactions(params.id);

    if (!accountData) {
      notFound();
    }

    const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 xl:px-20 py-4 ">
    <div className="flex gap-4 items-end justify-between">
      <div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize">
          {account.name}
        </h1>
        <p className="text-muted-foreground">
          {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
          Account
        </p>
      </div>

      <div className="text-right pb-2">
        <div className="text-xl sm:text-2xl font-bold">
          Rs. {parseFloat(account.balance).toFixed(2)}
        </div>
        <p className="text-sm text-muted-foreground">
          {account._count.transactions} Transactions
        </p>
      </div>
    </div>

    {/*account chart */}

    <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <AccountChart transactions={transactions} />
      </Suspense>

    {/* transaction table  */}
    <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <TransactionTable transactions={transactions} />
      </Suspense>


    </div>
  )
}

export default AccountsPage;