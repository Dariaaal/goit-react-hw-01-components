import Profile from 'components/profile/Profile';
import user from 'components/profile/user.json';
import Statistics from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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
    </div>
  );
};
