import Profile from 'components/profile/Profile';
import user from 'components/profile/user.json';
import Statistics from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';
import FriendList from 'components/friends/FriendList';
import friends from 'components/friends/friends.json';
import Transactions from 'components/transactions/TransactionHistory';
import transaction from 'components/transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics 
      title='Upload stats'
      stats={data}/>
      <FriendList
      friends={friends}
      key={friends.id}
      name={friends.name}
      avatar={friends.avatar}
      isOnline={friends.isOnline}
      />
      <Transactions
      items={transaction}
      key={transaction.id}
      type={transaction.type}
      amount={transaction.amount}
      currency={transaction.currency}
      />
    </div>
  );
};
