function Loader(): JSX.Element {
  return (
    <div className="container" style={ { display: 'flex', textAlign: 'center', justifyContent: 'center', border: '1px solid grey', margin: '50px auto'}}>
      <p style={ { fontWeight: 'bold', textTransform: 'uppercase', color: 'coral'}}>Loading ...</p>
    </div>
  );
}

export default Loader;
