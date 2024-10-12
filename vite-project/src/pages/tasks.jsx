const Tasks = () => {
  return (
    <div className="flex flex-col items-start gap-5 min-h-screen">
      <div className="flex flex-col items-center w-full">
        <span className="text-5xl font-bold ">My Tasks</span>
      </div>
      <div className="flex flex-col jusify-start">
        <h2 className="font-bold">Upcoming tasks</h2>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="font-bold">Completed tasks</h2>
      </div>
    </div>
  );
};

export default Tasks;
