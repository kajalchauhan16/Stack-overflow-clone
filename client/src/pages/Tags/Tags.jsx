import React  from "react";
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'
const Tags = () => {

    const tagsList = [{
        id:1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (javaScript/JS) and its various dialects/implementattions   "
    },{

    id:2,
    tagName:"Python",
    tagDesc:"Python is a multi-paradigm, dynamically typed ,multipurpose programming language."
    },{
        id : 3,
        tagName : "C#" ,
        tagDesc: " C# (pronounced 'see sharp') is a hgih level , statically typed ."
    }, {
        id: 4 ,
        tagName : "java" , 
        tagDesc: "java is a high-level obejct-oriented programming language"
    },{
    id:5 ,
    tagName: "php",
    tagDesc: "PHP is a widley used, open source, general-purpose, multi-paradigm , dynamically typed and interpreted scripts."
    },{
        id: 6,
        tagName:"html",
        tagDesc : "HTML is markup language for creating web pages and other iniformation to be displayed."
    }
    ]
    return (
        <div className="home-container-1">
          <LeftSidebar />
          <div className="home-container-2">
            <h1 className=" tags-h1">Tags</h1>
            <p className=" tags-p">A tag is a keyword or label that catgorizes your question with other, similar qusetions.</p>
            <p className=" tags-p">Using the right tags makes it easir for others to find and answer your question.</p>
           <div className="tags-list-container">
            {
                tagsList.map((tag) => (
                    <TagsList tag ={tag} key={tagsList.id} />
                ))
            }
           </div>
          </div>
        </div>
    )
}

export default Tags