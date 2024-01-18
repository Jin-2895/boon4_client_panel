import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
// import { format } from "date-fns";

function DatePicker() {
  const [selected, setSelected] = React.useState(new Date());
  const [timeIndication, setTimeIndication] = React.useState("AM");
  const footer = (
    <>
      <div className="flex flex-row px-4 py-6 gap-6">
        <div className="flex flex-row">
          <div className="bg-[#F4F6FA] text-[#CF2D39] font-[700] text-[34px] leading-[46.3px] text-center items-center rounded-md px-8 flex justify-center">
            <input
              type="number"
              className="w-10 placeholder:text-[#CF2D39] placeholder:focus:text-transparent bg-[#F4F6FA]"
              placeholder="07"
            />
          </div>
          <div className="rounded-md font-[700] text-[34px] leading-[46.3px] text-center items-center px-4 flex justify-center">
            <h1>:</h1>
          </div>
          <div className="bg-[#F4F6FA] text-[#CF2D39] font-[700] text-[34px] leading-[46.3px] text-center items-center rounded-md px-8 flex justify-center">
            <input
              type="number"
              className="w-10 placeholder:text-[#CF2D39] placeholder:focus:text-transparent bg-[#F4F6FA]"
              placeholder="12"
            />
          </div>
        </div>
        <div className="bg-[#F4F6FA] font-[600] text-[16px] leading-[21.79px] text-center items-center rounded-md px-4 py-3 flex flex-col justify-center gap-3">
          <button
            onClick={() => setTimeIndication("AM")}
            className={
              timeIndication === "AM"
                ? "text-[#CF2D39]"
                : "text-black/[20%] hover:text-[#CF2D39]"
            }
          >
            AM
          </button>
          <span className="border-[0.1px] border-black/[50%] w-full"></span>
          <button
            onClick={() => setTimeIndication("PM")}
            className={
              timeIndication === "PM"
                ? "text-[#CF2D39]"
                : "text-black/[20%] hover:text-[#CF2D39]"
            }
          >
            PM
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      <style>{css}</style>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        modifiersClassNames={{
          selected: "my-selected",
          // today: "my-today",
        }}
        modifiersStyles={{
          disabled: { fontSize: "60%" },
        }}
        footer={footer}
      />
    </>
  );
}

const css = `
.my-selected {
  font-weight: bold;
  background-color: #CF2D39;
  font-size: 14px ; 
  color: white;
}
.my-selected:not([disabled]) { 
  font-weight: bold; 
  background-color: #CF2D39;
  font-size: 14px; 
  color: white;
}
.my-selected:hover:not([disabled]) { 
  border-color: #CF2D39;
  background-color: #CF2D39 !important;
  font-size: 14px; 
  color: white !important;
}
.rdp-caption_label{
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 19px !important;
  color: #0F2552;
}
.rdp-button {
  border: 1px solid transparent !important;
  color: #0F2552;
}
.rdp-button svg {
  width: 22%;
  color: #848A95;
}
.rdp {
  --rdp-cell-size: 40px;
  margin: 15px 0px !important;
}
.rdp-caption {
  border-bottom: 1px solid #E4E5E7;
  padding: 5px;
}
.rdp-months .rdp-month {
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.1)
}
.rdp-head_cell{
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #7E818C;
}
.rdp-cell {
  padding: 6px;
  height: 20px !important;
}
`;
export default DatePicker;
