const SecondLoaderView = ({
  loading,
  loadingMsg,
  data,
  noDataMsg,
  children,
}) => {
  if (loading) {
    return <p>{loadingMsg}</p>;
  }
  console.log("data",data);
  
  if (  
    (!data || Array.isArray(data) && data.length === 0) ||
    Object.keys(data).length === 0
  ) {
    return <p>{noDataMsg}</p>;
  }

  return children;
};
export default SecondLoaderView;
