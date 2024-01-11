import Link from "next/link";
const Home = ()=>{
    return (
        <>
            <h1>Hello world from Home page </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsam error, ad quia in officiis magnam iusto fugiat eligendi accusantium commodi officia nemo laborum deleniti eos explicabo aperiam tenetur laudantium voluptates. At?</p>
            <Link href="/blog">Blog</Link>
        </>
    )
}
export default Home;