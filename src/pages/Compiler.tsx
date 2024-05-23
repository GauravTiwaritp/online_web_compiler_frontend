import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCard from "@/components/ui/RenderCard";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCode } from "@/redux/slices/compilerSlice";
const Compiler = () => {
  const dispatch = useDispatch();
  const { codeId } = useParams();
  console.log(codeId);
  const loadCode = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/compiler/load",
        { id: codeId }
      );
      console.log(response);
      console.log(response.data.Code.fullCode);
      dispatch(updateCode(response.data.Code.fullCode));
    } catch (error) {
      handleError(error);
    }
  };
  useEffect(() => {
    if (codeId) {
      loadCode();
    }
  }, [codeId]);
  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel defaultSize={40} className="min-w-[350px] h-[100vh] ">
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>

      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="min-w-[350px] h-[100vh]">
        <RenderCard />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
