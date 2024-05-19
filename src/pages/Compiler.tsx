import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCard from "@/components/ui/RenderCard";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Compiler = () => {
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
