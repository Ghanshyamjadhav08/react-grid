const GridComponent = (props) => {
  if (!props.fields || !Array.isArray(props.fields) || !props.data || !Array.isArray(props.data)) {
    return <div>No data to display</div>;
  }

  return (
    <div className="container-fluid">
      <table  className="table table-hover caption-top">
        <caption>{props.title}</caption>
        <thead>
          <tr>
            {props.fields.map((field) => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key, index) => (
                <td key={index}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridComponent;
