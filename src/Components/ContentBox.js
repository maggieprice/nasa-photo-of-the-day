import React from 'react'
import { MyContent, MyContentText } from "./Styles.js";

const ContentBox = (props) => {
    console.log(props.explanation)
return (
        <section className="contentBox">
            <MyContent>
            <article className="explanation">
                <MyContentText>{props.explanation}</MyContentText>
            </article>
            </MyContent>
        </section>
    )

}

export default ContentBox