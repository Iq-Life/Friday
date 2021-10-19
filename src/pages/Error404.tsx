import React from "react"
import s from "./Error404.module.css"

function Error404() {
    return (
        <div className={s.errorPage}>
            <div className={s.errorPageText}>
                <h4 style={{color: "red"}}>404</h4>
                <h5>Page not found!</h5>
            </div>
            <div className={s.errorPageCat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404