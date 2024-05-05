import { Button } from "./ui/button";
import { ArrowUpRight, ExternalLink, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HelperHeader = () => {
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
      <div className="__tab_switcher">
        <Select defaultValue="html">
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
