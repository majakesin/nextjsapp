const staticProps = (props) => {
  return <p>Value SSR: {props.data.value}</p>;
};
export default staticProps;

export const getStaticProps = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
