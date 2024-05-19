import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="feather feather-rankings mt-0 mr-4 mr-lg-0"
        style={{
            transform: "scale(1.25)",
        }}
        {...props}
    >
        <g fillRule="evenodd" stroke="none" strokeWidth={1}>
            <g stroke="currentColor" strokeWidth={1.5} transform="translate(1 6)">
                <ellipse cx={11.042} cy={5.488} rx={6.86} ry={5.488} />
                <path d="M4.966 2.94H.234c-.345.308-.277 5.213 0 5.488h4.732M17.01 8.428h4.76c.305-.308.244-5.213 0-5.488h-4.194" />
            </g>
            <path d="M0 0h24v24H0z" />
        </g>
    </svg>
)
export default SvgComponent
