import React from 'react'

const ContentBox = (props) => {
    console.log(props.explanation)
return (
        <section className="contentBox">
            <article className="explanation">
                {props.explanation}
            </article>
        </section>
    )

}

export default ContentBox