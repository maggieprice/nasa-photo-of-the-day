import React from 'react'
import { MyContent } from "./Styles.js";

const ContentBox = (props) => {
    console.log(props.explanation)
return (
        <section className="contentBox">
            <MyContent>
            <article className="explanation">
                {props.explanation}
            </article>
            </MyContent>
        </section>
    )

}

export default ContentBox