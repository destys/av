import { useRef, useState } from "react";
import Icon from "../icon/Icon";
import Input from "../input/Input";

const Select = ({
  placeholder = "Марка",
  options,
  onSelect,
  disabled = false,
}) => {
  const [showList, setShowList] = useState(false);
  const [entryOption, setEntryOption] = useState(placeholder);
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef(null);

  const handleSelectChange = (item) => {
    setEntryOption(item.label);
    setShowList(!showList);

    const selectedOption = options.find(
      (option) => option.value === item.value
    );

    onSelect(selectedOption);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center justify-between gap-4 py-3 pl-5 pr-4 bg-white border border-lynch-100 rounded-x-large relative cursor-pointer ${
          !!disabled && "bg-lynch-100 border-lynch-200 pointer-events-none"
        }`}
        onClick={() => {
          setShowList(!showList);
        }}
      >
        <span
          className={`font-normal text-lynch xl:text-[22px] ${
            !!disabled && "text-lynch-200"
          }`}
        >
          {entryOption}
        </span>
        <Icon
          name="arrow-down"
          color={`${!!disabled ? "fill-lynch-300" : "fill-navy"}`}
          className="absolute top-[50%] right-3 -translate-y-1/2"
          size={36}
        />
      </div>
      <div
        className={`fixed w-full h-full z-50 inset-0 ${!showList && "hidden"}`}
        onClick={() => setShowList(false)}
      ></div>
      <div
        className={`absolute -top-4 left-1/2 -translate-x-1/2 w-[115%] h-auto p-5 bg-white rounded-[10px] shadow-[0px 5px 15px 0px #00000033] z-50 ${
          showList ? "block" : "hidden"
        }`}
      >
        <Input
          type="search"
          placeholder={placeholder}
          className="mb-4 border border-lynch-100"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          ref={searchRef}
        />
        <ul className=" overflow-auto max-h-[277px]">
          {options.map((item) => (
            <li
              key={item.slug}
              className={`text-black ${
                item.label.toLowerCase().includes(searchText.toLowerCase())
                  ? "block"
                  : "hidden"
              }`}
            >
              <button
                type="button"
                className="py-2 px-1 w-full text-left text-[22px] hover:bg-navy-100"
                onClick={() => handleSelectChange(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
