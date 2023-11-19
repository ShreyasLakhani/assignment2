

function DashboardPage() {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center">
      <div className="text-white py-2 bg-[#1A2C2C99] w-2/3 rounded-2xl flex justify-center mt-10">Employee Productivity Dashboard</div>
      <div className="text-white w-full">
        <div className="flex flex-col gap-5 mt-16">
          <div>
            <div className="flex justify-around">
              <p>Productivity on Monday</p>
              <p>4%</p>
            </div>
            <div className="bg-[#36A546] h-[1.5vh] rounded-xl w-[2%] ml-10"></div>
          </div>
          <div>
            <div className="flex justify-around">
              <p>Productivity on Tuesday</p>
              <p>92%</p>
            </div>
            <div className="bg-[#36A546] h-[1.5vh] rounded-xl w-[46%] ml-10"></div>
          </div>
          <div>
            <div className="flex justify-around">
              <p>Productivity on Wednesday</p>
              <p>122%</p>
            </div>
            <div className="bg-[#36A546] h-[1.5vh] rounded-xl w-[61%] ml-10"></div>
          </div>
          <div>
            <div className="flex justify-around">
              <p>Productivity on Thrusday</p>
              <p>93%</p>
            </div>
            <div className="bg-[#36A546] h-[1.5vh] rounded-xl w-[46.5%] ml-10"></div>
          </div>
          <div>
            <div className="flex justify-around">
              <p>Productivity on Friday</p>
              <p>89%</p>
            </div>
            <div className="bg-[#36A546] h-[1.5vh] rounded-xl w-[44.5%] ml-10"></div>
          </div>
          <div>
            <div className="flex justify-around">
              <p>Productivity on Saturday</p>
              <p>98%</p>
            </div>
            <div className="bg-[#36A546] h-[1.5vh] rounded-xl w-[49%] ml-10"></div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default DashboardPage