import DynamicChart from "../../components/Chart";

const Default = () => {
  return (
    <div className="w-full px-5 flex gap-14 justify-between my-5">
      <div
        className="w-full rounded-lg py-1"
        style={{
          boxShadow: "0 4px 8px 0 white, -1px 1px 15px 1px white",
        }}
      >
        <h1 className="w-full text-center text-xl my-2">
          Count of Projects every month
        </h1>
        <DynamicChart />
      </div>
      <div className="w-full h-44 p-5 border rounded text-left">
        <h5>Employees : {20}</h5>
        <h5>Salary of every employee : {"3,000 $"}</h5>
        <h5>Average of salary on month : {"60,000 $"}</h5>
        <h5>Company budget : {"700,000,000 $"}</h5>
      </div>
    </div>
  );
};

export default Default;
