import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import course from "./Cards"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    console.log("start");
    console.log(course.title);
    function clickHandler() {
        //logic
        if(likedCourses.includes(course.id)){
          // pehle se like hua pada tha
          setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) ) );
          toast.warning("like removed");
        }
        else{
            //pehle se like nahi hai ye course
            // insert karna h ye course liked courses mai
            if(likedCourses.length === 0) {
               setLikedCourses([course.id]);
            }
            else{
               // non-empty pehle se 
               setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
          <div className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontsize="1.75rem"/>) : 
                        (<FcLikePlaceholder fontsize="1.75rem" />)
                     }
                </button>
            </div>
          </div>


            <div className='p-4'>
                <p className="text-black font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-black'>
                  {
                    course.description.length >100 ?
                    (course.description.substr(0,100)) + "..." : 
                    (course.description)
                  }
                </p>
            </div>

        </div>
    )
}

export default Card