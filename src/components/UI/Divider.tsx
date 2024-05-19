import { addClassNames } from "@/utils/functions"

const Divider = ({ classes }) => <div className={addClassNames("h-[1px] w-full bg-black", classes)} />

export default Divider