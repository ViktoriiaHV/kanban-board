import { HeaderForm } from "./HeaderForm";

import classes from "./Header.module.css"

export function Header() {

    return <div className={classes.header}>
        Kanban Board
        <HeaderForm />
    </div>
}