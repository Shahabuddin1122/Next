"use client";
import { error } from "console";

const About = ()=>{
    const randomnumber = (number : number)=>{
        return Math.floor(Math.random()*number);
    }
    const value = randomnumber(2)
    if(value===1){
        throw new Error("Custom error")
    }
    return (
        <>
            <h1>Hello world from about page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsam error, ad quia in officiis magnam iusto fugiat eligendi accusantium commodi officia nemo laborum deleniti eos explicabo aperiam tenetur laudantium voluptates. At?</p>
        </>
    )
}
export default About