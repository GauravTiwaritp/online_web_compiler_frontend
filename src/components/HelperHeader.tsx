import { useSelector, useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import axios from "axios";
import { ExternalLink, Save, Check } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useNavigate } from "react-router-dom";
import { updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import { useState } from "react";
import { useParams } from "react-router-dom";
const HelperHeader = () => {
  const navigate = useNavigate();
  const { codeId } = useParams();
  const [success, setSuccess] = useState<boolean>(false);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  console.log(fullCode);
  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/compiler/save",
        {
          Fullcode: fullCode,
        }
      );
      navigate(`/compiler/${response.data.code._id}`, { replace: true });
      console.log(response.data.code._id);
      console.log(response.data.code.fullCode._id);
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.CurrentLanguage
  );
  return (
    <div className="__helper-header h-[50px] bg-black text-white p-2 flex items-center justify-between sticky">
      <div className="__btn_container flex gap-2">
        <Button
          variant="success"
          className=" flex gap-2 "
          onClick={handleSaveCode}
          disabled={saveLoading}
        >
          <Save />
          {saveLoading ? "Saving..." : "Save"}
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="text-white flex gap-2">
              <ExternalLink />
              Share
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[60vw] sm:w-full md:w-[60vw] lg:w-[50vw]">
            {" "}
            {/* Responsive width */}
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue=""
                  value={`http://localhost:5173/compiler/${codeId}`}
                />
              </div>
              <Button
                type="submit"
                size="sm"
                className="px-3"
                onClick={() => {
                  setSuccess(true),
                    navigator.clipboard.writeText(
                      `http://localhost:5173/compiler/${codeId}`
                    );
                }}
              >
                <span className="sr-only">Copy</span>
                {success ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setSuccess(false)}
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-3">
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
