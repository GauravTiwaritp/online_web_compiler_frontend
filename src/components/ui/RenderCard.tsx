import { RootState } from "@/redux/store";

import { useSelector } from "react-redux";
const RenderCard = () => {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const combinedCode = `<html>
   
        <style>
 ${fullCode.css}
        </style>
    
    <body>
        ${fullCode.html}
    </body>
    <script>
 ${fullCode.javascript}
    </script>
</html>`;

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <iframe srcDoc={combinedCode} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default RenderCard;
