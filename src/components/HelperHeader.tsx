import { useSelector, useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { ExternalLink, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
const HelperHeader = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.CurrentLanguage
  );
  return (
    <div className="__helper-header h-[50px] bg-black text-white p-2 flex items-center justify-between">
      <div className="__btn_container flex gap-2">
        <Button variant="success" className=" flex gap-2 ">
          <Save />
          Success
        </Button>
        <Button variant="secondary" className="text-white flex gap-2 ">
          <ExternalLink />
          Share
        </Button>
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small> Current Language: </small>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) => {
            dispatch(updateCurrentLanguage(value));
          }}
        >
          <SelectTrigger className="w-[180px] bg-gray-800 outline-none ">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HelperHeader;
