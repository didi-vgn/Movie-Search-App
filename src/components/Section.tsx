import { ReactElement } from "react";

export default function Section({ children }: { children: ReactElement[] | ReactElement }) {
    return <div className="xl:self-start xl:border xl:rounded-md border-slate-500 shadow-lg xl:m-1">
        {children}
    </div>
}