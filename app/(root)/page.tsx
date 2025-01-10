import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = {
        firstName: 'Allan',
        lastName: 'Romero',
        email: 'contact@allanrs.com'
    }

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>

                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transaction efficiently"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />

                </header>

                {/* Recent transactions */}
            </div>

            <RightSidebar
                user={loggedIn}
                trasactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 500.00 }]}
            />
        </section>
    )
}

export default Home;