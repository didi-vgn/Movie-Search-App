import { ReactElement } from "react";

export default function Container({ children }: { children: ReactElement[] | ReactElement }) {
    return <div className="xl:w-2/3 xl:mx-auto xl:border xl:rounded-md border-slate-600 shadow-lg xl:m-2 xl:p-1">
        {children}
    </div>
}