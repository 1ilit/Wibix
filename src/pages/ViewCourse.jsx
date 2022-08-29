import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import { urlRes } from "../endpoints";
import axios from "axios"

const ViewCourse =()=>{
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
 
  useEffect(() => {
    const getData = async () => {
      const response1 = await axios.get(`${urlRes}/Courses/${courseId}`);
      setCourse(response1.data);
      
    };
    getData();
  });
    return(
        <>
        <div>{
            course.resources?.map((v, k)=>{
                return(
                    <div>{v.fileName}</div>
                )
            })
            }</div>
        </>
    )
}

export default ViewCourse