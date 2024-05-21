import { MoonLoader } from "react-spinners";

export default function Loader({ size, color }) {
  return <MoonLoader size={size || 25} color={color || "#007AEA"} />;
}
