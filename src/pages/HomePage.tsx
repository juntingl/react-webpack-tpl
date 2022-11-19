import { useEffect } from 'react';
import '../design-patterns/Factory/jquery'

const HomePage = () => {

  useEffect(() => {
    console.log(window.$$("p"));
  }, [])


  return (
    <>
      Home Page.
      <p>123</p>
      <p>456</p>
      <p>789</p>
    </>
  );
};

export default HomePage;
