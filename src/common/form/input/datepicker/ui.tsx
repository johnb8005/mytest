// taken from https://tailwinduikit.com/components/webapp/calendar/calendar
import React from "react";

import * as T from "../../type";
import * as Icon from "./icon";
import * as U from "./utils";
import Calendar from "./calendar";
import * as Labels from "./labels";
import * as TT from "./type";

// width of day cell (100% / 7 days)
const width = String(100 / 7) + "%";

const UI = ({
  onChange,
  value,
  disabled,
  formatOutput = U.formatOutDefault,
  formatOutProp = U.toISODate,
  labels = Labels.en,
}: T.InputProps<string> & TT.ExtraProps) => {
  const today = new Date();
  const [showDatepicker, setShowDatepicker] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [yearSelector, setYearSelector] = React.useState<boolean>(false);

  const observedDate = date || today;

  const c = new Calendar(observedDate);

  const handleSelectDay = (d: number) => {
    const date = c.getDateValue(d);
    const dateObject = new Date(date);

    onChange(formatOutProp(dateObject) as any);
    setShowDatepicker(false);
    setDate(dateObject);
  };

  const handleChange = (v: React.ChangeEvent<HTMLInputElement>) => {
    //setDate(v.target.value as any);
    return;
  };

  const toggleDatePicker = () =>
    !disabled && setShowDatepicker(!showDatepicker);

  return (
    <div>
      <div>
        <div className="mb-5 w-64">
          <div className="relative">
            <input
              readOnly={true}
              disabled={disabled}
              onClick={toggleDatePicker}
              onChange={handleChange}
              type="text"
              value={date ? formatOutput(date) : ""}
              className={
                "cursor-pointer w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-medium text-gray-600"
              }
              placeholder="Select date"
            />

            <div
              onClick={toggleDatePicker}
              className="absolute top-0 right-0 px-3 py-2 cursor-pointer"
            >
              <Icon.Calendar />
            </div>

            {showDatepicker && (
              <div
                className="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0"
                style={{ width: "17rem" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-lg font-bold text-gray-800">
                      {labels.months[c.month]}
                    </span>
                    {yearSelector && (
                      <button
                        type="button"
                        className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                        onClick={() =>
                          setDate(
                            new Date(
                              observedDate.setFullYear(
                                observedDate.getFullYear() - 1
                              )
                            )
                          )
                        }
                      >
                        <Icon.CaretLeft />
                      </button>
                    )}
                    <span
                      onClick={() => setYearSelector(!yearSelector)}
                      className={
                        "cursor-pointer ml-1 text-lg font-normal " +
                        (yearSelector ? "text-blue-500" : "text-gray-600")
                      }
                    >
                      {c.year}
                    </span>
                    {yearSelector && (
                      <button
                        type="button"
                        className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                        onClick={() =>
                          setDate(
                            new Date(
                              observedDate.setFullYear(
                                observedDate.getFullYear() + 1
                              )
                            )
                          )
                        }
                      >
                        <Icon.CaretRight />
                      </button>
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                      onClick={() =>
                        setDate(
                          new Date(
                            observedDate.setMonth(observedDate.getMonth() - 1)
                          )
                        )
                      }
                    >
                      <Icon.CaretLeft />
                    </button>
                    <button
                      type="button"
                      className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                      onClick={() =>
                        setDate(
                          new Date(
                            observedDate.setMonth(observedDate.getMonth() + 1)
                          )
                        )
                      }
                    >
                      <Icon.CaretRight />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap mb-3 -mx-1">
                  {labels.days.map((day, i) => (
                    <div key={i} style={{ width }} className="px-1">
                      <div
                        key={i}
                        className="text-gray-800 font-medium text-center text-xs"
                      >
                        {day}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap -mx-1">
                  {c.blankdays.map((_blankDay, i) => (
                    <div
                      key={i}
                      style={{ width }}
                      className="text-center border p-1 border-transparent text-sm"
                    ></div>
                  ))}

                  {c.no_of_days.map((day, i) => {
                    const className =
                      "cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100 " +
                      (c.isToday(day)
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-blue-200");

                    return (
                      <div key={i} style={{ width }} className="px-1 mb-1">
                        <div
                          onClick={() => handleSelectDay(day)}
                          className={className}
                        >
                          {day}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
