import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
type Props = {
  isLoggedIn: boolean;
  loading: boolean;
};

function Home({ isLoggedIn, loading }: Props) {
  console.log(loading)
  
  if (loading) return <p>Loading...</p>;
  if (!isLoggedIn) return <Redirect to='/login' />;

  return <div>
    hello{isLoggedIn && <p>I am logged in</p>}
    <button>Log out</button>
  </div>;
}

export default Home;
